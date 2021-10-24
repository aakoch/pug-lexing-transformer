import fs from 'fs'
import stream from 'stream'
import indentTransformer from 'indent-transformer';
import WrapLine from '@jaredpalmer/wrapline'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer')
import commandLineUsage from 'command-line-usage'
import commandLineArgs from 'command-line-args'
import nestingTransformer from './index.js'

const optionDefinitions = [
  {
    name: 'in', alias: 'i', type: String, defaultValue: '-', defaultOption: true,
    description: 'Input file or \'-\' for stdin (default)'
  },
  {
    name: 'out', alias: 'o', type: String, defaultValue: '-',
    description: 'Output file or \'-\' for stdout (default)'
  },
  {
    name: 'help', alias: 'h', type: Boolean,
    description: 'Print this usage guide.'
  }
]

const options = commandLineArgs(optionDefinitions)

if (options.help || (typeof options.in === 'undefined' && !process.stdin)) {
  const sections = [
    {
      header: 'Pug Parser',
      content: 'Parses a Pug file and outputs an AST'
    },
    {
      header: 'Usage',
      content: 'node index.js [-h] [-i inFile] [-o outFile]'
    },
    {
      header: 'Options',
      optionList: optionDefinitions
    }
  ]
  const usage = commandLineUsage(sections)
  console.log(usage)

}
else {
  String.prototype.quote = function () {
    return this.replaceAll('\\', '\\\\').replaceAll('"', '\\\"')
  }

  if (typeof String.fill !== 'function') {
    String.fill = function (length, char) {
      return ''.padStart(length, char || ' ')
    }
  }

  const inStream = options.in === '-' ? process.stdin : fs.createReadStream(options.in)
  try {
  inStream
    .pipe(WrapLine('|'))
    .pipe(WrapLine(function (pre, line) {
      // add 'line numbers' to each line
      pre = pre || 0
      return pre + 1
    }))
    .pipe(indentTransformer())
    .pipe(nestingTransformer)
    .pipe(options.out == '-' ? process.stdout : fs.createWriteStream(options.out));
  }
  catch (e) {
    throw new Error("Parsing of " + options.in + " failed", { cause: e }, options.in === '-' ? 'stdin' : options.in)
  }


  stream.finished(process.stdin, (err) => {
    if (err) {
      throw err;
    } else {
      indentTransformer.ended = true
      nestingTransformer.ended = true
    }
  });

}