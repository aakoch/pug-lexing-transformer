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
  classes:  (obj) => obj.classes.join('.'),
  code:(obj) => obj.val, 
  comment:(obj) => obj.val, 
  doctype: (obj) => 'doctype ' + obj.val,
  id:  (obj) => '#' + obj.id,
  pug_keyword: (obj) => obj.name + ' ' + obj.val,
  tag: (obj) => obj.name + functions.if_id(obj) + functions.if_classes(obj) + functions.if_attrs(obj) + functions.if_assignment(obj) + ' ' + functions.if_val(obj),
  text:(obj) => obj.val, 
  val: (obj) => obj.val
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

json.forEach(obj => {
  const arr = printLine(obj, 0, Number.MAX_SAFE_INTEGER);
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
      arr.push(functions[obj.type].call({}, obj) + '\n')
    } catch (e) {
      console.error(e)
      console.error('Function ' + obj.type + ' doesn\'t exist')
    }

    if (obj.children != undefined) {
      debug('obj.children.length=' + obj.children.length)
      arr.push('\n')
      obj.children.forEach(l => {
        arr.push(...printLine(l, indent + 1, textStartIndent));
      })
    }


    // if (obj.type == 'doctype') {
    //   arr.push('doctype ')
    //   arr.push(obj.val)
    // }

    // if (obj.hasOwnProperty('name')) {
    //   arr.push(obj.name)
    // }

    // if (obj.hasOwnProperty('classes')) {
    //   arr.push('.')
    //   arr.push(obj.classes.join('.'))
    // }

    // if (obj.hasOwnProperty('id')) {
    //   arr.push('#')
    //   arr.push(obj.id)
    // }

    // if (obj.hasOwnProperty('attrs')) {
    //   // if (/^[a-zA-Z0-9&]/.test(obj.attrs.toString())) {
    //   //   arr.push(' ');
    //   // }
    //   arr.push('(' + obj.attrs + ')')
    // }

    // if (obj.hasOwnProperty('therest')) {
    //   arr.push(' ')
    //   arr.push(obj.therest)
    // }

    // if (obj.hasOwnProperty('WORD')) {
    //   arr.push(obj.WORD)
    // }

    // if (obj.hasOwnProperty('params')) {
    //   arr.push(' ')
    //   arr.push(obj.params)
    // }

    // if (obj.hasOwnProperty('type') && obj.type == 'js') {
    //   arr.push('- ')
    //   arr.push(obj.val)
    // }

    // if (obj.hasOwnProperty('type') && obj.type == 'unbuffered_code') {
    //   arr.push('- ')
    //   arr.push(obj.val)
    // }

    // if (obj.hasOwnProperty('type') && obj.type == 'text') {
    //   if (textStartIndent == Number.MAX_SAFE_INTEGER) {
    //     textStartIndent = indent;
    //   }
    //   arr.push('| ')
    //   arr.push(''.padStart(indent - textStartIndent, '  '))
    //   arr.push(obj.val)
    // }

    // if (obj.hasOwnProperty('type') && obj.type == 'comment') {
    //   arr.push('//')
    //   arr.push('\n')
    //   if (obj.children != undefined) {
    //     debug('obj.children.length=' + obj.children.length)
    //     obj.children.forEach(l => {
    //       for (let i = 0; i < Math.min(textStartIndent, indent); i++) {
    //         arr.push('  ');
    //       }
    //       arr.push('//' + l.text);
    //     })
    //   }
    //   arr.push('\n')
    // }
    // else {
    //   arr.push('\n')
      
    //   if (obj.children != undefined) {
    //     debug('obj.children.length=' + obj.children.length)
    //     obj.children.forEach(l => {
    //       arr.push(...printLine(l, indent + 1, textStartIndent));
    //     })
    //   }
    // }

    // if (obj.hasOwnProperty('val')) {
    //   arr.push(obj.val)
    // }
  // } catch (e) {
  //   console.error(e);
  // }
  return arr;
}


// try {
//   console.log("\n\nor as JSON:\n", JSON.parse(source, null, 2));
// } catch (e) {  }