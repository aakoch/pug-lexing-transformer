import fs, { exists } from 'fs'
import path from 'path'
import debugFunc from 'debug'
const debug = debugFunc('writer')
import commandLineUsage from 'command-line-usage'
import commandLineArgs from 'command-line-args'
import chalk from 'chalk'

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
} catch (ignore) { }

function exist(obj) {
  if (typeof obj === 'undefined')
    return ''
  else
    return null
}

const functions = {
  assignment: (obj) => '= ' + obj.assignment_val,
  attrs: (obj) => '(' + obj.attrs + ')',
  attrs_start: (obj) => '(' + (obj.attrs ?? ''),
  attrs_cont: (obj) => '  ' + obj.attrs,
  classes: (obj) => '.' + obj.classes.join('.'),
  code: (obj) => '- ' + functions.if_val(obj),
  comment: (obj) => '//' + functions.if_val(obj),
  condition: (obj) => '(' + obj.condition + ')',
  conditional: (obj) => obj.name + functions.if_condition(obj),
  doctype: (obj) => 'doctype ' + obj.val,
  id: (obj) => '#' + obj.id,
  name: (obj) => obj.name,
  pug_keyword: (obj) => obj.name + (obj.val ? ' ' + obj.val : ''),
  tag: (obj) => (obj.name ?? '') + functions.if_id(obj) + functions.if_classes(obj) + functions.if_attrs(obj) + functions.if_assignment(obj) + (obj.hasOwnProperty('val') ? ' ' + obj.val : ''),
  tag_with_multiline_attrs: (obj) => (obj.name ?? '') + functions.if_id(obj) + functions.if_classes(obj) + functions.attrs_start(obj),
  text: (obj) => '| ' + obj.val,
  val: (obj) => obj.val,
  mixin_call: (obj) => obj.name + (obj.attrs ? '(' + obj.attrs + ')' : ''),
  MULTI_LINE_ATTRS_END: (obj) => ')'
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

const lines = createLines(json, 0, Number.MAX_SAFE_INTEGER, 0).flat();
if (options.out == '-') {
  console.log(lines.join('\n'))
}
else {
  fs.writeFileSync(options.out, lines.join('\n'))
}

function createLines(arr, indent, textStartIndent, controlCharIndent) {
  let lines = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    lines.push(createLine(element, indent, textStartIndent, controlCharIndent).flat())
  }
  return lines;
  // return arr.map((obj, index) => createLine(obj, indent + index, textStartIndent, controlCharIndent)) 
  // json.forEach(obj => {
  //   currentLine++
  //   const arr = createLine(obj, 0, Number.MAX_SAFE_INTEGER, 0);
  // })
}

function createLine(obj, indent, textStartIndent, controlCharIndent) {
  let lineParts = [];
  let lines = [];
  // try { 

  // maybe move to line 103?
  currentLine++

  for (let i = 0; i < Math.min(textStartIndent, indent); i++) {
    lineParts.push('  ');
  }

  try {
    lineParts.push(functions[obj.type].call({}, obj))
  } catch (e) {
    console.error(chalk.red('Function ' + obj.type + ' doesn\'t exist'))
  }

  if (obj.children != undefined) {
    debug('obj.children.length=' + obj.children.length)
    lines.push(createLines(obj.children, indent + 1, textStartIndent, controlCharIndent).flat());
  }

  lines.unshift(lineParts.join(''))
  const flat = lines.flat(99);
  // console.log('flat', flat)
  return flat;
}
