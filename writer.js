import fs, { exists } from 'fs'
import path from 'path'
import debugFunc from 'debug'
const debug = debugFunc('child-writer')
import commandLineUsage from 'command-line-usage'
import commandLineArgs from 'command-line-args'
// import util from 'util';

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
      header: 'Child writer',
      content: 'Converting AST back into Pug'
    },
    {
      header: 'Usage',
      content: 'node writer.js [-h] [-i inFile] [-o outFile]'
    },
    {
      header: 'Options',
      optionList: optionDefinitions
    }
  ]
  const usage = commandLineUsage(sections)
  console.log(usage)

}

try {
  fs.truncateSync(options.out)
} catch (ignore) {}

function exist(obj) {
  if (typeof obj === 'undefined')
    return ''
  else 
    return null
}

const functions = {
  assignment: (obj) => '= ' + obj.assignment_val,
  attrs: (obj) => '(' + obj.attrs + ')',
  classes:  (obj) => '.' + obj.classes.join('.'),
  code:(obj) => '- ' + obj.val, 
  comment:(obj) => '//' + functions.if_val(obj), 
  doctype: (obj) => 'doctype ' + obj.val,
  id:  (obj) => '#' + obj.id,
  pug_keyword: (obj) => obj.name + (obj.val ? ' ' + obj.val : ''),
  tag: (obj) => (obj.name ?? '') + functions.if_id(obj) + functions.if_classes(obj) + functions.if_attrs(obj) + functions.if_assignment(obj) + (obj.hasOwnProperty('val') ? ' ' + obj.val : ''),
  text: (obj) => '| ' + obj.val, 
  val: (obj) => obj.val,
  mixin_call: (obj) => obj.name + (obj.attrs ? '(' + obj.attrs + ')' : '')
}

for (const funcKey in functions) {
  if (Object.hasOwnProperty.call(functions, funcKey)) {
    functions['if_' + funcKey] = function (obj) {
      return exist(obj[funcKey]) ?? functions[funcKey](obj)
    }
  }
}

var source = fs.readFileSync(path.normalize(options.in), 'utf8');

var json = JSON.parse(source)

var currentLine = 0;
json.forEach(obj => {
  currentLine++
  const arr = printLine(obj, 0, Number.MAX_SAFE_INTEGER, currentLine);
  if (options.out == '-') {
    console.log(arr.join(''))
  }
  else {
    fs.appendFileSync(options.out, arr.join(''))
  }
})

function printLine(obj, indent, textStartIndent) {
  let arr = [];
  // try { 

    for (let i = 0; i < Math.min(textStartIndent, indent); i++) {
      arr.push('  ');
    }

    try {
      arr.push(functions[obj.type].call({}, obj))
    } catch (e) {
      console.error(e)
      console.error('Function ' + obj.type + ' doesn\'t exist')
    }

    if (obj.children != undefined) {
      debug('obj.children.length=' + obj.children.length)
      obj.children.forEach(l => {
        // currentLine++
        // arr.push('\n')
        while (l.lineNumber > currentLine) {
          currentLine++
          arr.push('\n')
        }
        arr.push(...printLine(l, indent + 1, textStartIndent));
      })
    }


  return arr;
}
