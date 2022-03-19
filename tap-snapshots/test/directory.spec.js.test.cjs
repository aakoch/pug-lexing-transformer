/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/directory.spec.js TAP test directory testing file=attr-es2015.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/attr-es2015.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/attr-es2015.pug","type":"unbuf_code","val":"var avatar = '219b77f9d21de75e81851b6b886057c7'","lineNumber": 1},  
{"source":"test/pug/attr-es2015.pug","name":"div","type":"tag","attrs":[{"name":"class","val":"\\"avatar-div\\""},{"name":"style","val":"\`background-image: url(https://www.gravatar.com/avatar/\${avatar})\`"}],"lineNumber": 3}]
`

exports[`test/directory.spec.js TAP test directory testing file=attrs-data.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/attrs-data.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/attrs-data.pug","type":"unbuf_code","val":"var user = { name: 'tobi' }","lineNumber": 1},  
{"source":"test/pug/attrs-data.pug","name":"foo","type":"tag","attrs":[{"name":"data-user","val":"user"}],"lineNumber": 2},  
{"source":"test/pug/attrs-data.pug","name":"foo","type":"tag","attrs":[{"name":"data-items","val":"[1,2,3]"}],"lineNumber": 3},  
{"source":"test/pug/attrs-data.pug","name":"foo","type":"tag","attrs":[{"name":"data-username","val":"'tobi'"}],"lineNumber": 4},  
{"source":"test/pug/attrs-data.pug","name":"foo","type":"tag","attrs":[{"name":"data-escaped","val":"{message: \\"Let's rock!\\"}"}],"lineNumber": 5},  
{"source":"test/pug/attrs-data.pug","name":"foo","type":"tag","attrs":[{"name":"data-ampersand","val":"{message: \\"a quote: &quot; this & that\\"}"}],"lineNumber": 6},  
{"source":"test/pug/attrs-data.pug","name":"foo","type":"tag","attrs":[{"name":"data-epoc","val":"new Date(0)"}],"lineNumber": 7}]
`

exports[`test/directory.spec.js TAP test directory testing file=attrs.js.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/attrs.js.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/attrs.js.pug","type":"unbuf_code","val":"var id = 5","lineNumber": 1},  
{"source":"test/pug/attrs.js.pug","type":"unbuf_code","val":"function answer() { return 42; }","lineNumber": 2},  
{"source":"test/pug/attrs.js.pug","name":"a","type":"tag","attrs":[{"name":"href","val":"'/user/' + id"},{"name":"class","val":"'button'"}],"lineNumber": 3},  
{"source":"test/pug/attrs.js.pug","name":"a","type":"tag","attrs":[{"name":"href","val":"'/user/' + id"},{"name":"class","val":"'button'"}],"lineNumber": 4},  
{"source":"test/pug/attrs.js.pug","name":"meta","type":"tag","attrs":[{"name":"key","val":"'answer'"},{"name":"value","val":"answer()"}],"lineNumber": 5},  
{"source":"test/pug/attrs.js.pug","name":"a","type":"tag","attrs":[{"name":"class","val":"['class1', 'class2']"}],"lineNumber": 6},  
{"source":"test/pug/attrs.js.pug","name":"a","type":"tag","attrs":[{"name":"class","val":"\\"tag-class\\""},{"name":"class","val":"['class1', 'class2']"}],"lineNumber": 7},  
{"source":"test/pug/attrs.js.pug","name":"a","type":"tag","attrs":[{"name":"href","val":"'/user/' + id"},{"name":"class","val":"'button'"}],"lineNumber": 9},  
{"source":"test/pug/attrs.js.pug","name":"a","type":"tag","attrs":[{"name":"href","val":"'/user/' + id"},{"name":"class","val":"'button'"}],"lineNumber": 10},  
{"source":"test/pug/attrs.js.pug","name":"meta","type":"tag","attrs":[{"name":"key","val":"'answer'"},{"name":"value","val":"answer()"}],"lineNumber": 11},  
{"source":"test/pug/attrs.js.pug","name":"a","type":"tag","attrs":[{"name":"class","val":"['class1', 'class2']"}],"lineNumber": 12},  
{"source":"test/pug/attrs.js.pug","name":"a","type":"tag","attrs":[{"name":"class","val":"\\"tag-class\\""},{"name":"class","val":"['class1', 'class2']"}],"lineNumber": 13},  
{"source":"test/pug/attrs.js.pug","name":"div","type":"tag","attrs":[{"name":"id","val":"id"},{"name":"foo","val":"bar"}],"lineNumber": 15},  
{"source":"test/pug/attrs.js.pug","type":"unbuf_code","val":"var bar = null","lineNumber": 16},  
{"source":"test/pug/attrs.js.pug","name":"div","type":"tag","attrs":[{"name":"foo","val":"null"},{"name":"bar","val":"bar"},{"name":"baz","val":"baz"}],"lineNumber": 17},  
{"source":"test/pug/attrs.js.pug","name":"div","type":"tag","attrs":[{"name":"...object","val":"...object"}],"lineNumber": 19},  
{"source":"test/pug/attrs.js.pug","name":"div","type":"tag","attrs":[{"name":"...object","val":"...object"},{"name":"after","val":"\\"after\\""}],"lineNumber": 20},  
{"source":"test/pug/attrs.js.pug","name":"div","type":"tag","attrs":[{"name":"before","val":"\\"before\\""},{"name":"...object","val":"...object"}],"lineNumber": 21},  
{"source":"test/pug/attrs.js.pug","name":"div","type":"tag","attrs":[{"name":"before","val":"\\"before\\""},{"name":"...object","val":"...object"},{"name":"after","val":"\\"after\\""}],"lineNumber": 22}]
`

exports[`test/directory.spec.js TAP test directory testing file=attrs.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/attrs.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/attrs.pug","name":"a","type":"tag","attrs":[{"name":"href","val":"'/contact'"}],"val":"contact","lineNumber": 1},  
{"source":"test/pug/attrs.pug","name":"a","type":"tag","attrs":[{"name":"href","val":"'/save'"},{"name":"class","val":"\\"button\\""}],"val":"save","lineNumber": 2},  
{"source":"test/pug/attrs.pug","name":"a","type":"tag","attrs":[{"name":"foo"},{"name":"bar"},{"name":"baz"}],"lineNumber": 3},  
{"source":"test/pug/attrs.pug","name":"a","type":"tag","attrs":[{"name":"foo","val":"'foo, bar, baz'"},{"name":"bar","val":"1"}],"lineNumber": 4},  
{"source":"test/pug/attrs.pug","name":"a","type":"tag","attrs":[{"name":"foo","val":"'((foo))'"},{"name":"bar","val":"(1) ? 1 : 0"}],"lineNumber": 5},  
{"source":"test/pug/attrs.pug","name":"select","type":"tag","lineNumber": 6, "children":[ 
  {"source":"test/pug/attrs.pug","name":"option","type":"tag","attrs":[{"name":"value","val":"'foo'"},{"name":"selected"}],"val":"Foo","lineNumber": 7},  
  {"source":"test/pug/attrs.pug","name":"option","type":"tag","attrs":[{"name":"selected"},{"name":"value","val":"'bar'"}],"val":"Bar","lineNumber": 8}] 
},  
{"source":"test/pug/attrs.pug","name":"a","type":"tag","attrs":[{"name":"foo","val":"\\"class:\\""}],"lineNumber": 9},  
{"source":"test/pug/attrs.pug","name":"input","type":"tag","attrs":[{"name":"pattern","val":"'\\\\\\\\S+'"}],"lineNumber": 10},  
{"source":"test/pug/attrs.pug","name":"a","type":"tag","attrs":[{"name":"href","val":"'/contact'"}],"val":"contact","lineNumber": 12},  
{"source":"test/pug/attrs.pug","name":"a","type":"tag","attrs":[{"name":"href","val":"'/save'"},{"name":"class","val":"\\"button\\""}],"val":"save","lineNumber": 13},  
{"source":"test/pug/attrs.pug","name":"a","type":"tag","attrs":[{"name":"foo"},{"name":"bar"},{"name":"baz"}],"lineNumber": 14},  
{"source":"test/pug/attrs.pug","name":"a","type":"tag","attrs":[{"name":"foo","val":"'foo, bar, baz'"},{"name":"bar","val":"1"}],"lineNumber": 15},  
{"source":"test/pug/attrs.pug","name":"a","type":"tag","attrs":[{"name":"foo","val":"'((foo))'"},{"name":"bar","val":"(1) ? 1 : 0"}],"lineNumber": 16},  
{"source":"test/pug/attrs.pug","name":"select","type":"tag","lineNumber": 17, "children":[ 
  {"source":"test/pug/attrs.pug","name":"option","type":"tag","attrs":[{"name":"value","val":"'foo'"},{"name":"selected"}],"val":"Foo","lineNumber": 18},  
  {"source":"test/pug/attrs.pug","name":"option","type":"tag","attrs":[{"name":"selected"},{"name":"value","val":"'bar'"}],"val":"Bar","lineNumber": 19}] 
},  
{"source":"test/pug/attrs.pug","name":"a","type":"tag","attrs":[{"name":"foo","val":"\\"class:\\""}],"lineNumber": 20},  
{"source":"test/pug/attrs.pug","name":"input","type":"tag","attrs":[{"name":"pattern","val":"'\\\\\\\\S+'"}],"lineNumber": 21},  
{"source":"test/pug/attrs.pug","name":"foo","type":"tag","attrs":[{"name":"terse","val":"\\"true\\""}],"lineNumber": 22},  
{"source":"test/pug/attrs.pug","name":"foo","type":"tag","attrs":[{"name":"date","val":"new Date(0)"}],"lineNumber": 23},  
{"source":"test/pug/attrs.pug","type":"html_comment","val":"- foo(abc","lineNumber": 25},  
{"source":"test/pug/attrs.pug","type":"html_comment","val":"-    ,def)","lineNumber": 26},  
{"source":"test/pug/attrs.pug","type":"html_comment","val":"- foo(abc,","lineNumber": 27},  
{"source":"test/pug/attrs.pug","type":"html_comment","val":"-     def)","lineNumber": 28},  
{"source":"test/pug/attrs.pug","type":"html_comment","val":"- foo(abc,","lineNumber": 29},  
{"source":"test/pug/attrs.pug","type":"html_comment","val":"- \\t\\tdef)","lineNumber": 30},  
{"source":"test/pug/attrs.pug","type":"html_comment","val":"- foo(abc","lineNumber": 31},  
{"source":"test/pug/attrs.pug","type":"html_comment","val":"- \\t\\t,def)","lineNumber": 32},  
{"source":"test/pug/attrs.pug","type":"html_comment","val":"- foo(abc","lineNumber": 33},  
{"source":"test/pug/attrs.pug","type":"html_comment","val":"- \\t\\tdef)","lineNumber": 34},  
{"source":"test/pug/attrs.pug","type":"html_comment","val":"- foo(abc","lineNumber": 35},  
{"source":"test/pug/attrs.pug","type":"html_comment","val":"-     def)","lineNumber": 36},  
{"source":"test/pug/attrs.pug","type":"unbuf_code","val":"var attrs = {foo: 'bar', bar: '<baz>'}","lineNumber": 38},  
{"source":"test/pug/attrs.pug","name":"div","type":"tag","attrs":[{"val":"attrs"}],"lineNumber": 40},  
{"source":"test/pug/attrs.pug","name":"a","type":"tag","attrs":[{"name":"foo","val":"'foo'"},{"name":"\\"bar\\"","val":"\\"bar\\""}],"lineNumber": 42},  
{"source":"test/pug/attrs.pug","type":"html_comment","val":"- a(foo='foo' bar='bar')","lineNumber": 43}]
`

exports[`test/directory.spec.js TAP test directory testing file=attrs.unescaped.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/attrs.unescaped.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/attrs.unescaped.pug","name":"script","type":"tag","attrs":[{"name":"type","val":"'text/x-template'"}],"lineNumber": 1, "children":[ 
  {"source":"test/pug/attrs.unescaped.pug","name":"div","type":"tag","attrs":[{"name":"id!","val":"'user-<%= user.id %>'"}],"lineNumber": 2, "children":[ 
    {"source":"test/pug/attrs.unescaped.pug","name":"h1","type":"tag","val":"<%= user.title %>","lineNumber": 3}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=attrs2.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/attrs2.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/attrs2.pug","name":"foo","type":"tag","attrs_start":[{"name":"abc"}],"lineNumber": 2, "children":[ 
  {"source":"test/pug/attrs2.pug","type":"attrs_end","val":[{"name":"def"}],"lineNumber": 3}] 
},  
{"source":"test/pug/attrs2.pug","name":"foo","type":"tag","attrs_start":[{"name":"abc"}],"lineNumber": 4, "children":[ 
  {"source":"test/pug/attrs2.pug","type":"attrs_end","val":[{"name":"def"}],"lineNumber": 5}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=attrs_copy.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/attrs_copy.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/attrs_copy.pug","name":"foo","type":"tag","attrs_start":[{"name":"abc"}],"lineNumber": 1, "children":[ 
  {"source":"test/pug/attrs_copy.pug","type":"attrs_end","val":[{"name":"def"}],"lineNumber": 2}] 
},  
{"source":"test/pug/attrs_copy.pug","name":"foo","type":"tag","attrs_start":[{"name":"hij"}],"lineNumber": 3, "children":[ 
  {"source":"test/pug/attrs_copy.pug","type":"attrs_end","val":[{"name":"klm"}],"lineNumber": 4}] 
},  
{"source":"test/pug/attrs_copy.pug","name":"foo","type":"tag","attrs_start":[{"name":"nop"}],"lineNumber": 5, "children":[ 
  {"source":"test/pug/attrs_copy.pug","type":"attrs_end","val":[{"name":"def"}],"lineNumber": 6}] 
},  
{"source":"test/pug/attrs_copy.pug","name":"foo","type":"tag","attrs_start":[{"name":"abc"}],"lineNumber": 7, "children":[ 
  {"source":"test/pug/attrs_copy.pug","type":"attrs_end","val":[{"name":"def"}],"lineNumber": 8}] 
},  
{"source":"test/pug/attrs_copy.pug","name":"foo","type":"tag","attrs_start":[{"name":"abc"}],"lineNumber": 9, "children":[ 
  {"source":"test/pug/attrs_copy.pug","type":"attrs_end","val":[{"name":"def"}],"lineNumber": 10}] 
},  
{"source":"test/pug/attrs_copy.pug","name":"foo","type":"tag","attrs_start":[{"name":"qrs"}],"lineNumber": 11, "children":[ 
  {"source":"test/pug/attrs_copy.pug","type":"attrs_end","val":[{"name":"tuv"}],"lineNumber": 12}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=basic.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/basic.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/basic.pug","name":"html","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/basic.pug","name":"body","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/basic.pug","name":"h1","type":"tag","val":"Title","lineNumber": 3}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=blanks.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/blanks.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/blanks.pug","name":"ul","type":"tag","lineNumber": 3, "children":[ 
  {"source":"test/pug/blanks.pug","name":"li","type":"tag","val":"foo","lineNumber": 4},  
  {"source":"test/pug/blanks.pug","name":"li","type":"tag","val":"bar","lineNumber": 6},  
  {"source":"test/pug/blanks.pug","name":"li","type":"tag","val":"baz","lineNumber": 8}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=block-code.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/block-code.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/block-code.pug","type":"unbuf_code_block","lineNumber": 1, "children":[ 
  {"source":"test/pug/block-code.pug","type":"unbuf_code","val":"list = [\\"uno\\", \\"dos\\", \\"tres\\",","lineNumber": 2, "children":[ 
    {"source":"test/pug/block-code.pug","type":"unbuf_code","val":"\\"cuatro\\", \\"cinco\\", \\"seis\\"];","lineNumber": 3}]}] 
},  
{"source":"test/pug/block-code.pug","type":"html_comment","val":"- Without a block, the element is accepted and no code is generated","lineNumber": 4},  
{"source":"test/pug/block-code.pug","type":"unbuf_code_block","lineNumber": 5},  
{"source":"test/pug/block-code.pug","type":"each","val":"item in list","lineNumber": 6, "children":[ 
  {"source":"test/pug/block-code.pug","type":"unbuf_code_block","lineNumber": 7, "children":[ 
    {"source":"test/pug/block-code.pug","type":"unbuf_code","val":"string = item.charAt(0)","lineNumber": 8, "children":[ 
      {"source":"test/pug/block-code.pug","type":"unbuf_code","val":".toUpperCase() +","lineNumber": 10}] 
},  
    {"source":"test/pug/block-code.pug","type":"unbuf_code","val":"item.slice(1);","lineNumber": 11}] 
},  
  {"source":"test/pug/block-code.pug","name":"li","type":"tag","assignment":true,"assignment_val":"string","lineNumber": 12}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=block-expansion.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/block-expansion.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/block-expansion.pug","name":"ul","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/block-expansion.pug","name":"li","type":"tag","lineNumber": 2, "children":[{"name":"a","type":"tag","attrs":[{"name":"href","val":"'#'"}],"val":"foo"}]},  
  {"source":"test/pug/block-expansion.pug","name":"li","type":"tag","lineNumber": 3, "children":[{"name":"a","type":"tag","attrs":[{"name":"href","val":"'#'"}],"val":"bar"}]}] 
},  
{"source":"test/pug/block-expansion.pug","name":"p","type":"tag","val":"baz","lineNumber": 5}]
`

exports[`test/directory.spec.js TAP test directory testing file=block-expansion.shorthands.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/block-expansion.shorthands.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/block-expansion.shorthands.pug","name":"ul","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/block-expansion.shorthands.pug","name":"li","type":"tag","attrs":[{"name":"class","val":"\\"list-item\\""}],"lineNumber": 2, "children":[{"type":"tag","attrs":[{"name":"class","val":"\\"foo\\""}],"state":"NESTED","children":[{"type":"tag","id":"bar","val":"baz"}]}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=blockquote.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/blockquote.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/blockquote.pug","name":"figure","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/blockquote.pug","name":"blockquote","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/blockquote.pug","type":"text","val":"Try to define yourself by what you do, and you&#8217;ll burnout every time. You are. That is enough. I rest in that.","lineNumber": 3}] 
},  
  {"source":"test/pug/blockquote.pug","name":"figcaption","type":"tag","val":"from @thefray at 1:43pm on May 10","lineNumber": 4}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=blocks-in-blocks.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/blocks-in-blocks.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/blocks-in-blocks.pug","type":"extends","val":"./auxiliary/blocks-in-blocks-layout.pug","lineNumber": 1},  
{"source":"test/pug/blocks-in-blocks.pug","type":"block","val":"body","lineNumber": 3, "children":[ 
  {"source":"test/pug/blocks-in-blocks.pug","name":"h1","type":"tag","val":"Page 2","lineNumber": 4}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=blocks-in-if.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/blocks-in-if.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/blocks-in-if.pug","type":"html_comment","val":"- see https://github.com/pugjs/pug/issues/1589","lineNumber": 1},  
{"source":"test/pug/blocks-in-if.pug","type":"unbuf_code","val":"var ajax = true","lineNumber": 3},  
{"source":"test/pug/blocks-in-if.pug","type":"unbuf_code","val":"if( ajax )","lineNumber": 5, "children":[ 
  {"source":"test/pug/blocks-in-if.pug","type":"html_comment","val":"- return only contents if ajax requests","lineNumber": 6},  
  {"source":"test/pug/blocks-in-if.pug","type":"block","val":"contents","lineNumber": 7, "children":[ 
    {"source":"test/pug/blocks-in-if.pug","name":"p","type":"tag","val":"ajax contents","lineNumber": 8}]}] 
},  
{"source":"test/pug/blocks-in-if.pug","type":"unbuf_code","val":"else","lineNumber": 10, "children":[ 
  {"source":"test/pug/blocks-in-if.pug","type":"html_comment","val":"- return all html","lineNumber": 11},  
  {"source":"test/pug/blocks-in-if.pug","type":"doctype","val":"html","lineNumber": 12},  
  {"source":"test/pug/blocks-in-if.pug","name":"html","type":"tag","lineNumber": 13, "children":[ 
    {"source":"test/pug/blocks-in-if.pug","name":"head","type":"tag","lineNumber": 14, "children":[ 
      {"source":"test/pug/blocks-in-if.pug","name":"meta","type":"tag","attrs":[{"name":"charset","val":"'utf8'"}],"lineNumber": 15},  
      {"source":"test/pug/blocks-in-if.pug","name":"title","type":"tag","val":"sample","lineNumber": 16},  
      {"source":"test/pug/blocks-in-if.pug","name":"body","type":"tag","lineNumber": 17, "children":[ 
        {"source":"test/pug/blocks-in-if.pug","type":"block","val":"contents","lineNumber": 18, "children":[ 
          {"source":"test/pug/blocks-in-if.pug","name":"p","type":"tag","val":"all contetns","lineNumber": 19}]}]}]}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=case-blocks.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/case-blocks.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/case-blocks.pug","name":"html","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/case-blocks.pug","name":"body","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/case-blocks.pug","type":"unbuf_code","val":"var friends = 1","lineNumber": 3},  
    {"source":"test/pug/case-blocks.pug","type":"case","val":"friends","lineNumber": 4, "children":[ 
      {"source":"test/pug/case-blocks.pug","type":"when","val":"0","lineNumber": 5, "children":[ 
        {"source":"test/pug/case-blocks.pug","name":"p","type":"tag","val":"you have no friends","lineNumber": 6}] 
},  
      {"source":"test/pug/case-blocks.pug","type":"when","val":"1","lineNumber": 7, "children":[ 
        {"source":"test/pug/case-blocks.pug","name":"p","type":"tag","val":"you have a friend","lineNumber": 8}] 
},  
      {"source":"test/pug/case-blocks.pug","type":"default","lineNumber": 9, "children":[ 
        {"source":"test/pug/case-blocks.pug","name":"p","type":"tag","children":[{"type":"text","val":"you have "},{"type":"interpolation","val":"friends"},{"type":"text","val":" friends"}],"lineNumber": 10}]}]}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=case.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/case.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/case.pug","name":"html","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/case.pug","name":"body","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/case.pug","type":"unbuf_code","val":"var friends = 1","lineNumber": 3},  
    {"source":"test/pug/case.pug","type":"case","val":"friends","lineNumber": 4, "children":[ 
      {"source":"test/pug/case.pug","type":"when","val":"0: p you have no friends","lineNumber": 5},  
      {"source":"test/pug/case.pug","type":"when","val":"1: p you have a friend","lineNumber": 6},  
      {"source":"test/pug/case.pug","type":"default","val":": p you have #{friends} friends","lineNumber": 7}] 
},  
    {"source":"test/pug/case.pug","type":"unbuf_code","val":"var friends = 0","lineNumber": 8},  
    {"source":"test/pug/case.pug","type":"case","val":"friends","lineNumber": 9, "children":[ 
      {"source":"test/pug/case.pug","type":"when","val":"0","lineNumber": 10},  
      {"source":"test/pug/case.pug","type":"when","val":"1","lineNumber": 11, "children":[ 
        {"source":"test/pug/case.pug","name":"p","type":"tag","val":"you have very few friends","lineNumber": 12}] 
},  
      {"source":"test/pug/case.pug","type":"default","lineNumber": 13, "children":[ 
        {"source":"test/pug/case.pug","name":"p","type":"tag","children":[{"type":"text","val":"you have "},{"type":"interpolation","val":"friends"},{"type":"text","val":" friends"}],"lineNumber": 14}]}] 
},  
    {"source":"test/pug/case.pug","type":"unbuf_code","val":"var friend = 'Tim:G'","lineNumber": 16},  
    {"source":"test/pug/case.pug","type":"case","val":"friend","lineNumber": 17, "children":[ 
      {"source":"test/pug/case.pug","type":"when","val":"'Tim:G':    p Friend is a string","lineNumber": 18},  
      {"source":"test/pug/case.pug","type":"when","val":"{tim: 'g'}: p Friend is an object","lineNumber": 19}]}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=classes-empty.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/classes-empty.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/classes-empty.pug","name":"a","type":"tag","attrs":[{"name":"class","val":"''"}],"lineNumber": 1},  
{"source":"test/pug/classes-empty.pug","name":"a","type":"tag","attrs":[{"name":"class","val":"null"}],"lineNumber": 2},  
{"source":"test/pug/classes-empty.pug","name":"a","type":"tag","attrs":[{"name":"class","val":"undefined"}],"lineNumber": 3}]
`

exports[`test/directory.spec.js TAP test directory testing file=code.conditionals.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/code.conditionals.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/code.conditionals.pug","type":"unbuf_code","val":"if (true)","lineNumber": 2, "children":[ 
  {"source":"test/pug/code.conditionals.pug","name":"p","type":"tag","val":"foo","lineNumber": 3}] 
},  
{"source":"test/pug/code.conditionals.pug","type":"unbuf_code","val":"else","lineNumber": 4, "children":[ 
  {"source":"test/pug/code.conditionals.pug","name":"p","type":"tag","val":"bar","lineNumber": 5}] 
},  
{"source":"test/pug/code.conditionals.pug","type":"unbuf_code","val":"if (true) {","lineNumber": 7, "children":[ 
  {"source":"test/pug/code.conditionals.pug","name":"p","type":"tag","val":"foo","lineNumber": 8}] 
},  
{"source":"test/pug/code.conditionals.pug","type":"unbuf_code","val":"} else {","lineNumber": 9, "children":[ 
  {"source":"test/pug/code.conditionals.pug","name":"p","type":"tag","val":"bar","lineNumber": 10}] 
},  
{"source":"test/pug/code.conditionals.pug","type":"unbuf_code","val":"}","lineNumber": 11},  
{"source":"test/pug/code.conditionals.pug","type":"if","val":"true","lineNumber": 13, "children":[ 
  {"source":"test/pug/code.conditionals.pug","name":"p","type":"tag","val":"foo","lineNumber": 14},  
  {"source":"test/pug/code.conditionals.pug","name":"p","type":"tag","val":"bar","lineNumber": 15},  
  {"source":"test/pug/code.conditionals.pug","name":"p","type":"tag","val":"baz","lineNumber": 16}] 
},  
{"source":"test/pug/code.conditionals.pug","type":"else","lineNumber": 17, "children":[ 
  {"source":"test/pug/code.conditionals.pug","name":"p","type":"tag","val":"bar","lineNumber": 18}] 
},  
{"source":"test/pug/code.conditionals.pug","type":"unless","val":"true","lineNumber": 20, "children":[ 
  {"source":"test/pug/code.conditionals.pug","name":"p","type":"tag","val":"foo","lineNumber": 21}] 
},  
{"source":"test/pug/code.conditionals.pug","type":"else","lineNumber": 22, "children":[ 
  {"source":"test/pug/code.conditionals.pug","name":"p","type":"tag","val":"bar","lineNumber": 23}] 
},  
{"source":"test/pug/code.conditionals.pug","type":"if","val":"'nested'","lineNumber": 25, "children":[ 
  {"source":"test/pug/code.conditionals.pug","type":"if","val":"'works'","lineNumber": 26, "children":[ 
    {"source":"test/pug/code.conditionals.pug","name":"p","type":"tag","val":"yay","lineNumber": 27}]}] 
},  
{"source":"test/pug/code.conditionals.pug","type":"html_comment","val":"- allow empty blocks","lineNumber": 29},  
{"source":"test/pug/code.conditionals.pug","type":"if","val":"false","lineNumber": 30},  
{"source":"test/pug/code.conditionals.pug","type":"else","lineNumber": 31, "children":[ 
  {"source":"test/pug/code.conditionals.pug","type":"tag","attrs":[{"name":"class","val":"\\"bar\\""}],"lineNumber": 32}] 
},  
{"source":"test/pug/code.conditionals.pug","type":"if","val":"true","lineNumber": 33, "children":[ 
  {"source":"test/pug/code.conditionals.pug","type":"tag","attrs":[{"name":"class","val":"\\"bar\\""}],"lineNumber": 34}] 
},  
{"source":"test/pug/code.conditionals.pug","type":"else","lineNumber": 35},  
{"source":"test/pug/code.conditionals.pug","type":"tag","attrs":[{"name":"class","val":"\\"bing\\""}],"lineNumber": 36},  
{"source":"test/pug/code.conditionals.pug","type":"if","val":"false","lineNumber": 38, "children":[ 
  {"source":"test/pug/code.conditionals.pug","type":"tag","attrs":[{"name":"class","val":"\\"bing\\""}],"lineNumber": 39}] 
},  
{"source":"test/pug/code.conditionals.pug","type":"else","val":"if false","lineNumber": 40, "children":[ 
  {"source":"test/pug/code.conditionals.pug","type":"tag","attrs":[{"name":"class","val":"\\"bar\\""}],"lineNumber": 41}] 
},  
{"source":"test/pug/code.conditionals.pug","type":"else","lineNumber": 42, "children":[ 
  {"source":"test/pug/code.conditionals.pug","type":"tag","attrs":[{"name":"class","val":"\\"foo\\""}],"lineNumber": 43}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=code.escape.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/code.escape.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/code.escape.pug","name":"p","type":"tag","assignment":true,"assignment_val":"'<script>'","lineNumber": 1},  
{"source":"test/pug/code.escape.pug","name":"p","type":"tag","val":"!= '<script>'","lineNumber": 2}]
`

exports[`test/directory.spec.js TAP test directory testing file=code.iteration.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/code.iteration.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/code.iteration.pug","type":"unbuf_code","val":"var items = [1,2,3]","lineNumber": 2},  
{"source":"test/pug/code.iteration.pug","name":"ul","type":"tag","lineNumber": 4, "children":[ 
  {"source":"test/pug/code.iteration.pug","type":"unbuf_code","val":"items.forEach(function(item){","lineNumber": 5, "children":[ 
    {"source":"test/pug/code.iteration.pug","name":"li","type":"tag","assignment":true,"assignment_val":"item","lineNumber": 6}] 
},  
  {"source":"test/pug/code.iteration.pug","type":"unbuf_code","val":"})","lineNumber": 7}] 
},  
{"source":"test/pug/code.iteration.pug","type":"unbuf_code","val":"var items = [1,2,3]","lineNumber": 9},  
{"source":"test/pug/code.iteration.pug","name":"ul","type":"tag","lineNumber": 11, "children":[ 
  {"source":"test/pug/code.iteration.pug","type":"for","val":"item, i in items","lineNumber": 12, "children":[ 
    {"source":"test/pug/code.iteration.pug","name":"li","type":"tag","attrs":[{"name":"class","val":"'item-' + i"}],"assignment":true,"assignment_val":"item","lineNumber": 13}]}] 
},  
{"source":"test/pug/code.iteration.pug","name":"ul","type":"tag","lineNumber": 15, "children":[ 
  {"source":"test/pug/code.iteration.pug","type":"each","val":"item, i in items","lineNumber": 16, "children":[ 
    {"source":"test/pug/code.iteration.pug","name":"li","type":"tag","assignment":true,"assignment_val":"item","lineNumber": 17}]}] 
},  
{"source":"test/pug/code.iteration.pug","name":"ul","type":"tag","lineNumber": 19, "children":[ 
  {"source":"test/pug/code.iteration.pug","type":"each","val":"$item in items","lineNumber": 20, "children":[ 
    {"source":"test/pug/code.iteration.pug","name":"li","type":"tag","assignment":true,"assignment_val":"$item","lineNumber": 21}]}] 
},  
{"source":"test/pug/code.iteration.pug","type":"unbuf_code","val":"var nums = [1, 2, 3]","lineNumber": 23},  
{"source":"test/pug/code.iteration.pug","type":"unbuf_code","val":"var letters = ['a', 'b', 'c']","lineNumber": 24},  
{"source":"test/pug/code.iteration.pug","name":"ul","type":"tag","lineNumber": 26, "children":[ 
  {"source":"test/pug/code.iteration.pug","type":"for","val":"l in letters","lineNumber": 27, "children":[ 
    {"source":"test/pug/code.iteration.pug","type":"for","val":"n in nums","lineNumber": 28, "children":[ 
      {"source":"test/pug/code.iteration.pug","name":"li","type":"tag","children":[{"type":"interpolation","val":"n"},{"type":"text","val":": "},{"type":"interpolation","val":"l"}],"lineNumber": 29}]}]}] 
},  
{"source":"test/pug/code.iteration.pug","type":"unbuf_code","val":"var count = 1","lineNumber": 31},  
{"source":"test/pug/code.iteration.pug","type":"unbuf_code","val":"var counter = function() { return [count++, count++, count++] }","lineNumber": 32},  
{"source":"test/pug/code.iteration.pug","name":"ul","type":"tag","lineNumber": 33, "children":[ 
  {"source":"test/pug/code.iteration.pug","type":"for","val":"n in counter()","lineNumber": 34, "children":[ 
    {"source":"test/pug/code.iteration.pug","name":"li","type":"tag","children":[{"type":"interpolation","val":"n"}],"lineNumber": 35}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=code.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/code.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/code.pug","name":"p","type":"tag","assignment":true,"assignment_val":"null","lineNumber": 1},  
{"source":"test/pug/code.pug","name":"p","type":"tag","assignment":true,"assignment_val":"undefined","lineNumber": 2},  
{"source":"test/pug/code.pug","name":"p","type":"tag","assignment":true,"assignment_val":"''","lineNumber": 3},  
{"source":"test/pug/code.pug","name":"p","type":"tag","assignment":true,"assignment_val":"0","lineNumber": 4},  
{"source":"test/pug/code.pug","name":"p","type":"tag","assignment":true,"assignment_val":"false","lineNumber": 5},  
{"source":"test/pug/code.pug","name":"p","type":"tag","attrs":[{"name":"foo","val":"null"}],"lineNumber": 6},  
{"source":"test/pug/code.pug","name":"p","type":"tag","attrs":[{"name":"foo","val":"undefined"}],"lineNumber": 7},  
{"source":"test/pug/code.pug","name":"p","type":"tag","attrs":[{"name":"foo","val":"''"}],"lineNumber": 8},  
{"source":"test/pug/code.pug","name":"p","type":"tag","attrs":[{"name":"foo","val":"0"}],"lineNumber": 9},  
{"source":"test/pug/code.pug","name":"p","type":"tag","attrs":[{"name":"foo","val":"false"}],"lineNumber": 10}]
`

exports[`test/directory.spec.js TAP test directory testing file=comments-in-case.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/comments-in-case.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/comments-in-case.pug","type":"doctype","val":"html","lineNumber": 1},  
{"source":"test/pug/comments-in-case.pug","name":"html","type":"tag","lineNumber": 2, "children":[ 
  {"source":"test/pug/comments-in-case.pug","name":"body","type":"tag","lineNumber": 3},  
  {"source":"test/pug/comments-in-case.pug","type":"unbuf_code","val":"var s = 'this'","lineNumber": 4},  
  {"source":"test/pug/comments-in-case.pug","type":"case","val":"s","lineNumber": 5, "children":[ 
    {"source":"test/pug/comments-in-case.pug","type":"html_comment","val":"- Comment","lineNumber": 6},  
    {"source":"test/pug/comments-in-case.pug","type":"when","val":"'this'","lineNumber": 7, "children":[ 
      {"source":"test/pug/comments-in-case.pug","name":"p","type":"tag","val":"It's this!","lineNumber": 8}] 
},  
    {"source":"test/pug/comments-in-case.pug","type":"when","val":"'that'","lineNumber": 9, "children":[ 
      {"source":"test/pug/comments-in-case.pug","name":"p","type":"tag","val":"It's that!","lineNumber": 10}]}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=comments.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/comments.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/comments.pug","type":"html_comment","val":" foo","lineNumber": 2},  
{"source":"test/pug/comments.pug","name":"ul","type":"tag","lineNumber": 3, "children":[ 
  {"source":"test/pug/comments.pug","type":"html_comment","val":" bar","lineNumber": 4},  
  {"source":"test/pug/comments.pug","name":"li","type":"tag","val":"one","lineNumber": 5},  
  {"source":"test/pug/comments.pug","type":"html_comment","val":" baz","lineNumber": 6},  
  {"source":"test/pug/comments.pug","name":"li","type":"tag","val":"two","lineNumber": 7}] 
},  
{"source":"test/pug/comments.pug","type":"html_comment","lineNumber": 9, "children":[ 
  {"source":"test/pug/comments.pug","type":"text","val":"ul","lineNumber": 10, "children":[ 
    {"source":"test/pug/comments.pug","type":"text","val":"li foo","lineNumber": 11}]}] 
},  
{"source":"test/pug/comments.pug","type":"html_comment","val":" block","lineNumber": 13, "children":[ 
  {"source":"test/pug/comments.pug","type":"text","val":"// inline follow","lineNumber": 14},  
  {"source":"test/pug/comments.pug","type":"text","val":"li three","lineNumber": 15}] 
},  
{"source":"test/pug/comments.pug","type":"html_comment","val":" block","lineNumber": 17, "children":[ 
  {"source":"test/pug/comments.pug","type":"text","val":"// inline followed by tags","lineNumber": 18},  
  {"source":"test/pug/comments.pug","type":"text","val":"ul","lineNumber": 19, "children":[ 
    {"source":"test/pug/comments.pug","type":"text","val":"li four","lineNumber": 20}]}] 
},  
{"source":"test/pug/comments.pug","type":"html_comment","val":"if IE lt 9","lineNumber": 22, "children":[ 
  {"source":"test/pug/comments.pug","type":"text","val":"// inline","lineNumber": 23},  
  {"source":"test/pug/comments.pug","type":"text","val":"script(src='/lame.js')","lineNumber": 24},  
  {"source":"test/pug/comments.pug","type":"text","val":"// end-inline","lineNumber": 25}] 
},  
{"source":"test/pug/comments.pug","name":"p","type":"tag","val":"five","lineNumber": 27},  
{"source":"test/pug/comments.pug","type":"tag","attrs":[{"name":"class","val":"\\"foo\\""}],"val":"// not a comment","lineNumber": 29}]
`

exports[`test/directory.spec.js TAP test directory testing file=comments.source.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/comments.source.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/comments.source.pug","type":"html_comment","val":"-","lineNumber": 1, "children":[ 
  {"source":"test/pug/comments.source.pug","type":"text","val":"s/s.","lineNumber": 2}] 
},  
{"source":"test/pug/comments.source.pug","type":"html_comment","val":"- test/cases/comments.source.pug","lineNumber": 4},  
{"source":"test/pug/comments.source.pug","type":"html_comment","val":"-","lineNumber": 6, "children":[ 
  {"source":"test/pug/comments.source.pug","type":"text","val":"test/cases/comments.source.pug","lineNumber": 7},  
  {"source":"test/pug/comments.source.pug","type":"text","val":"when","lineNumber": 8},  
  {"source":"test/pug/comments.source.pug","type":"text","val":"()","lineNumber": 9}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=doctype.custom.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/doctype.custom.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/doctype.custom.pug","type":"doctype","val":"custom stuff","lineNumber": 1}]
`

exports[`test/directory.spec.js TAP test directory testing file=doctype.default.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/doctype.default.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/doctype.default.pug","type":"doctype","lineNumber": 1},  
{"source":"test/pug/doctype.default.pug","name":"html","type":"tag","lineNumber": 2, "children":[ 
  {"source":"test/pug/doctype.default.pug","name":"body","type":"tag","lineNumber": 3, "children":[ 
    {"source":"test/pug/doctype.default.pug","name":"h1","type":"tag","val":"Title","lineNumber": 4}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=doctype.keyword.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/doctype.keyword.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/doctype.keyword.pug","type":"doctype","val":"html","lineNumber": 1}]
`

exports[`test/directory.spec.js TAP test directory testing file=each.else.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/each.else.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/each.else.pug","type":"unbuf_code","val":"var users = []","lineNumber": 2},  
{"source":"test/pug/each.else.pug","name":"ul","type":"tag","lineNumber": 4, "children":[ 
  {"source":"test/pug/each.else.pug","type":"for","val":"user in users","lineNumber": 5, "children":[ 
    {"source":"test/pug/each.else.pug","name":"li","type":"tag","assignment":true,"assignment_val":"user.name","lineNumber": 6}] 
},  
  {"source":"test/pug/each.else.pug","type":"else","lineNumber": 7, "children":[ 
    {"source":"test/pug/each.else.pug","name":"li","type":"tag","val":"no users!","lineNumber": 8}]}] 
},  
{"source":"test/pug/each.else.pug","type":"unbuf_code","val":"var users = [{ name: 'tobi', friends: ['loki'] }, { name: 'loki' }]","lineNumber": 11},  
{"source":"test/pug/each.else.pug","type":"if","val":"users","lineNumber": 13, "children":[ 
  {"source":"test/pug/each.else.pug","name":"ul","type":"tag","lineNumber": 14, "children":[ 
    {"source":"test/pug/each.else.pug","type":"for","val":"user in users","lineNumber": 15, "children":[ 
      {"source":"test/pug/each.else.pug","name":"li","type":"tag","assignment":true,"assignment_val":"user.name","lineNumber": 16}] 
},  
    {"source":"test/pug/each.else.pug","type":"else","lineNumber": 17, "children":[ 
      {"source":"test/pug/each.else.pug","name":"li","type":"tag","val":"no users!","lineNumber": 18}]}]}] 
},  
{"source":"test/pug/each.else.pug","type":"unbuf_code","val":"var user = { name: 'tobi', age: 10 }","lineNumber": 20},  
{"source":"test/pug/each.else.pug","name":"ul","type":"tag","lineNumber": 22, "children":[ 
  {"source":"test/pug/each.else.pug","type":"each","val":"val, key in user","lineNumber": 23, "children":[ 
    {"source":"test/pug/each.else.pug","name":"li","type":"tag","children":[{"type":"interpolation","val":"key"},{"type":"text","val":": "},{"type":"interpolation","val":"val"}],"lineNumber": 24}] 
},  
  {"source":"test/pug/each.else.pug","type":"else","lineNumber": 25, "children":[ 
    {"source":"test/pug/each.else.pug","name":"li","type":"tag","val":"user has no details!","lineNumber": 26}]}] 
},  
{"source":"test/pug/each.else.pug","type":"unbuf_code","val":"var user = {}","lineNumber": 28},  
{"source":"test/pug/each.else.pug","name":"ul","type":"tag","lineNumber": 30, "children":[ 
  {"source":"test/pug/each.else.pug","type":"each","val":"prop, key in user","lineNumber": 31, "children":[ 
    {"source":"test/pug/each.else.pug","name":"li","type":"tag","children":[{"type":"interpolation","val":"key"},{"type":"text","val":": "},{"type":"interpolation","val":"val"}],"lineNumber": 32}] 
},  
  {"source":"test/pug/each.else.pug","type":"else","lineNumber": 33, "children":[ 
    {"source":"test/pug/each.else.pug","name":"li","type":"tag","val":"user has no details!","lineNumber": 34}]}] 
},  
{"source":"test/pug/each.else.pug","type":"unbuf_code","val":"var user = Object.create(null)","lineNumber": 36},  
{"source":"test/pug/each.else.pug","type":"unbuf_code","val":"user.name = 'tobi'","lineNumber": 37},  
{"source":"test/pug/each.else.pug","name":"ul","type":"tag","lineNumber": 39, "children":[ 
  {"source":"test/pug/each.else.pug","type":"each","val":"val, key in user","lineNumber": 40, "children":[ 
    {"source":"test/pug/each.else.pug","name":"li","type":"tag","children":[{"type":"interpolation","val":"key"},{"type":"text","val":": "},{"type":"interpolation","val":"val"}],"lineNumber": 41}] 
},  
  {"source":"test/pug/each.else.pug","type":"else","lineNumber": 42, "children":[ 
    {"source":"test/pug/each.else.pug","name":"li","type":"tag","val":"user has no details!","lineNumber": 43}]}] 
},  
{"source":"test/pug/each.else.pug","type":"unbuf_code","val":"var ofKeyword = [{ name: 'tobi', friends: ['loki'] }, { name: 'loki' }]","lineNumber": 45},  
{"source":"test/pug/each.else.pug","name":"ul","type":"tag","lineNumber": 46, "children":[ 
  {"source":"test/pug/each.else.pug","type":"each","val":"val of ofKeyword","lineNumber": 47, "children":[ 
    {"source":"test/pug/each.else.pug","name":"li","type":"tag","assignment":true,"assignment_val":"user.name","lineNumber": 48}]}] 
},  
{"source":"test/pug/each.else.pug","name":"ul","type":"tag","lineNumber": 50, "children":[ 
  {"source":"test/pug/each.else.pug","type":"each","val":"val of [\\"variable with of keyword\\"]","lineNumber": 51, "children":[ 
    {"source":"test/pug/each.else.pug","name":"li","type":"tag","assignment":true,"assignment_val":"val","lineNumber": 52}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=escape-chars.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/escape-chars.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/escape-chars.pug","name":"script","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/escape-chars.pug","type":"text","val":"var re = /\\\\d+/;","lineNumber": 2}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=escape-test.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/escape-test.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/escape-test.pug","type":"doctype","val":"html","lineNumber": 1},  
{"source":"test/pug/escape-test.pug","name":"html","type":"tag","lineNumber": 2, "children":[ 
  {"source":"test/pug/escape-test.pug","name":"head","type":"tag","lineNumber": 3, "children":[ 
    {"source":"test/pug/escape-test.pug","name":"title","type":"tag","val":"escape-test","lineNumber": 4}] 
},  
  {"source":"test/pug/escape-test.pug","name":"body","type":"tag","lineNumber": 5, "children":[ 
    {"source":"test/pug/escape-test.pug","name":"textarea","type":"tag","lineNumber": 6, "children":[ 
      {"source":"test/pug/escape-test.pug","type":"unbuf_code","val":"var txt = '<param name=\\"flashvars\\" value=\\"a=&quot;value_a&quot;&b=&quot;value_b&quot;&c=3\\"/>'","lineNumber": 7},  
      {"source":"test/pug/escape-test.pug","type":"text","val":"#{txt}","lineNumber": 8}]}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=escaping-class-attribute.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/escaping-class-attribute.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/escaping-class-attribute.pug","name":"foo","type":"tag","attrs":[{"name":"attr","val":"\\"<%= bar %>\\""}],"lineNumber": 1},  
{"source":"test/pug/escaping-class-attribute.pug","name":"foo","type":"tag","attrs":[{"name":"class","val":"\\"<%= bar %>\\""}],"lineNumber": 2},  
{"source":"test/pug/escaping-class-attribute.pug","name":"foo","type":"tag","attrs":[{"name":"attr!","val":"\\"<%= bar %>\\""}],"lineNumber": 3},  
{"source":"test/pug/escaping-class-attribute.pug","name":"foo","type":"tag","attrs":[{"name":"class!","val":"\\"<%= bar %>\\""}],"lineNumber": 4},  
{"source":"test/pug/escaping-class-attribute.pug","name":"foo","type":"tag","attrs":[{"name":"class!","val":"\\"<%= bar %> lol rofl\\""}],"lineNumber": 5},  
{"source":"test/pug/escaping-class-attribute.pug","name":"foo","type":"tag","attrs":[{"name":"class!","val":"\\"<%= bar %> lol rofl <%= lmao %>\\""}],"lineNumber": 6}]
`

exports[`test/directory.spec.js TAP test directory testing file=filter-in-include.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/filter-in-include.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/filter-in-include.pug","type":"include","val":"./auxiliary/filter-in-include.pug","lineNumber": 1}]
`

exports[`test/directory.spec.js TAP test directory testing file=filters.include.custom.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/filters.include.custom.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/filters.include.custom.pug","name":"html","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/filters.include.custom.pug","name":"body","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/filters.include.custom.pug","name":"pre","type":"tag","lineNumber": 3, "children":[ 
      {"source":"test/pug/filters.include.custom.pug","type":"include","filter":"custom","val":"(opt='val' num=2) filters.include.custom.pug","lineNumber": 4}]}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=filters.include.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/filters.include.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/filters.include.pug","name":"html","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/filters.include.pug","name":"body","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/filters.include.pug","type":"include","filter":"markdown-it","val":"some.md","lineNumber": 3},  
    {"source":"test/pug/filters.include.pug","name":"script","type":"tag","lineNumber": 4, "children":[ 
      {"source":"test/pug/filters.include.pug","type":"include","filter":"coffee-script","val":"(minify=true) include-filter-coffee.coffee","lineNumber": 5}] 
},  
    {"source":"test/pug/filters.include.pug","name":"script","type":"tag","lineNumber": 6, "children":[ 
      {"source":"test/pug/filters.include.pug","type":"include","filter":"cdatacoffee-script","val":"(minify=false) include-filter-coffee.coffee","lineNumber": 7}]}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=html.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/html.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/html.pug","type":"unbuf_code","val":"var version = 1449104952939","lineNumber": 1},  
{"source":"test/pug/html.pug","type":"text","val":"<ul>","lineNumber": 3, "children":[ 
  {"source":"test/pug/html.pug","type":"text","val":"<li>foo</li>","lineNumber": 4},  
  {"source":"test/pug/html.pug","type":"text","val":"<li>bar</li>","lineNumber": 5},  
  {"source":"test/pug/html.pug","type":"text","val":"<li>baz</li>","lineNumber": 6}] 
},  
{"source":"test/pug/html.pug","type":"text","val":"</ul>","lineNumber": 7},  
{"source":"test/pug/html.pug","type":"html_comment","children":[{"type":"text","val":"build:js /js/app.min.js?v="},{"type":"interpolation","val":"version"}],"lineNumber": 9},  
{"source":"test/pug/html.pug","type":"html_comment","val":"endbuild","lineNumber": 10},  
{"source":"test/pug/html.pug","name":"p","type":"tag","val":"You can <em>embed</em> html as well.","lineNumber": 12},  
{"source":"test/pug/html.pug","name":"p","type":"tag","lineNumber": 13, "children":[{"type":"text","val":"<strong>Even</strong> as the body of a block expansion."}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=html5.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/html5.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/html5.pug","type":"doctype","val":"html","lineNumber": 1},  
{"source":"test/pug/html5.pug","name":"input","type":"tag","attrs":[{"name":"type","val":"'checkbox'"},{"name":"checked"}],"lineNumber": 2},  
{"source":"test/pug/html5.pug","name":"input","type":"tag","attrs":[{"name":"type","val":"'checkbox'"},{"name":"checked","val":"true"}],"lineNumber": 3},  
{"source":"test/pug/html5.pug","name":"input","type":"tag","attrs":[{"name":"type","val":"'checkbox'"},{"name":"checked","val":"false"}],"lineNumber": 4}]
`

exports[`test/directory.spec.js TAP test directory testing file=include-extends-from-root.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/include-extends-from-root.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/include-extends-from-root.pug","type":"include","val":"/auxiliary/extends-from-root.pug","lineNumber": 1}]
`

exports[`test/directory.spec.js TAP test directory testing file=include-extends-of-common-template.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/include-extends-of-common-template.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/include-extends-of-common-template.pug","type":"include","val":"auxiliary/extends-empty-block-1.pug","lineNumber": 1},  
{"source":"test/pug/include-extends-of-common-template.pug","type":"include","val":"auxiliary/extends-empty-block-2.pug","lineNumber": 2}]
`

exports[`test/directory.spec.js TAP test directory testing file=include-extends-relative.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/include-extends-relative.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/include-extends-relative.pug","type":"include","val":"../cases/auxiliary/extends-relative.pug","lineNumber": 1}]
`

exports[`test/directory.spec.js TAP test directory testing file=include-only-text-body.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/include-only-text-body.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/include-only-text-body.pug","type":"text","val":"The message is \\"","lineNumber": 1},  
{"source":"test/pug/include-only-text-body.pug","type":"yield","lineNumber": 2},  
{"source":"test/pug/include-only-text-body.pug","type":"text","val":"\\"","lineNumber": 3}]
`

exports[`test/directory.spec.js TAP test directory testing file=include-only-text.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/include-only-text.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/include-only-text.pug","name":"html","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/include-only-text.pug","name":"body","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/include-only-text.pug","name":"p","type":"tag","lineNumber": 3, "children":[ 
      {"source":"test/pug/include-only-text.pug","type":"include","val":"include-only-text-body.pug","lineNumber": 4, "children":[ 
        {"source":"test/pug/include-only-text.pug","name":"em","type":"tag","val":"hello world","lineNumber": 5}]}]}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=include-with-text-head.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/include-with-text-head.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/include-with-text-head.pug","name":"head","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/include-with-text-head.pug","name":"script","type":"tag","attrs":[{"name":"type","val":"'text/javascript'"}],"lineNumber": 2, "children":[ 
    {"source":"test/pug/include-with-text-head.pug","type":"text","val":"alert('hello world');","lineNumber": 3}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=include-with-text.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/include-with-text.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/include-with-text.pug","name":"html","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/include-with-text.pug","type":"include","val":"include-with-text-head.pug","lineNumber": 2, "children":[ 
    {"source":"test/pug/include-with-text.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'/caustic.js'"}],"lineNumber": 3},  
    {"source":"test/pug/include-with-text.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'/app.js'"}],"lineNumber": 4}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=include.script.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/include.script.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/include.script.pug","name":"script","type":"tag","id":"pet-template","attrs":[{"name":"type","val":"'text/x-template'"}],"lineNumber": 1, "children":[ 
  {"source":"test/pug/include.script.pug","type":"include","val":"auxiliary/pet.pug","lineNumber": 2}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=include.yield.nested.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/include.yield.nested.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/include.yield.nested.pug","type":"include","val":"auxiliary/yield-nested.pug","lineNumber": 2, "children":[ 
  {"source":"test/pug/include.yield.nested.pug","name":"p","type":"tag","val":"some content","lineNumber": 3},  
  {"source":"test/pug/include.yield.nested.pug","name":"p","type":"tag","val":"and some more","lineNumber": 4}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=includes-with-ext-js.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/includes-with-ext-js.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/includes-with-ext-js.pug","name":"pre","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/includes-with-ext-js.pug","name":"code","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/includes-with-ext-js.pug","type":"include","val":"javascript-new-lines.js","lineNumber": 3}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=includes.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/includes.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/includes.pug","type":"include","val":"auxiliary/mixins.pug","lineNumber": 2},  
{"source":"test/pug/includes.pug","type":"mixin_call","name":"foo","lineNumber": 4},  
{"source":"test/pug/includes.pug","name":"body","type":"tag","lineNumber": 6, "children":[ 
  {"source":"test/pug/includes.pug","type":"include","val":"auxiliary/smile.html","lineNumber": 7},  
  {"source":"test/pug/includes.pug","type":"include","val":"auxiliary/escapes.html","lineNumber": 8},  
  {"source":"test/pug/includes.pug","name":"script","type":"tag","attrs":[{"name":"type","val":"\\"text/javascript\\""}],"lineNumber": 9, "children":[ 
    {"source":"test/pug/includes.pug","type":"include","filter":"verbatim","val":"auxiliary/includable.js","lineNumber": 10}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=inheritance.alert-dialog.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/inheritance.alert-dialog.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/inheritance.alert-dialog.pug","type":"extends","val":"auxiliary/dialog.pug","lineNumber": 2},  
{"source":"test/pug/inheritance.alert-dialog.pug","type":"block","val":"content","lineNumber": 4, "children":[ 
  {"source":"test/pug/inheritance.alert-dialog.pug","name":"h1","type":"tag","val":"Alert!","lineNumber": 5},  
  {"source":"test/pug/inheritance.alert-dialog.pug","name":"p","type":"tag","val":"I'm an alert!","lineNumber": 6}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=inheritance.defaults.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/inheritance.defaults.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/inheritance.defaults.pug","name":"html","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/inheritance.defaults.pug","name":"head","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/inheritance.defaults.pug","type":"block","val":"head","lineNumber": 3, "children":[ 
      {"source":"test/pug/inheritance.defaults.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'jquery.js'"}],"lineNumber": 4},  
      {"source":"test/pug/inheritance.defaults.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'keymaster.js'"}],"lineNumber": 5},  
      {"source":"test/pug/inheritance.defaults.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'caustic.js'"}],"lineNumber": 6}]}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=inheritance.extend.recursive.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/inheritance.extend.recursive.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/inheritance.extend.recursive.pug","type":"extends","val":"/auxiliary/inheritance.extend.recursive-parent.pug","lineNumber": 1},  
{"source":"test/pug/inheritance.extend.recursive.pug","type":"block","val":"parent","lineNumber": 3, "children":[ 
  {"source":"test/pug/inheritance.extend.recursive.pug","name":"h4","type":"tag","val":"child","lineNumber": 4}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=inheritance.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/inheritance.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/inheritance.pug","type":"extends","val":"auxiliary/layout.pug","lineNumber": 2},  
{"source":"test/pug/inheritance.pug","type":"block","val":"head","lineNumber": 4, "children":[ 
  {"source":"test/pug/inheritance.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'jquery.js'"}],"lineNumber": 5}] 
},  
{"source":"test/pug/inheritance.pug","type":"block","val":"content","lineNumber": 7, "children":[ 
  {"source":"test/pug/inheritance.pug","name":"h2","type":"tag","val":"Page","lineNumber": 8},  
  {"source":"test/pug/inheritance.pug","name":"p","type":"tag","val":"Some content","lineNumber": 9}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=inline-block-comment.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/inline-block-comment.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/inline-block-comment.pug","type":"block","val":"content // Main content goes here","lineNumber": 1},  
{"source":"test/pug/inline-block-comment.pug","type":"append","val":"content // adding something to content","lineNumber": 2},  
{"source":"test/pug/inline-block-comment.pug","type":"prepend","val":"content // adding something to other end of content","lineNumber": 3}]
`

exports[`test/directory.spec.js TAP test directory testing file=inline-tag.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/inline-tag.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/inline-tag.pug","name":"p","type":"tag","children":[{"type":"text","val":"bing "},{"name":"strong","type":"tag","val":"foo"},{"type":"text","val":" bong"}],"lineNumber": 1},  
{"source":"test/pug/inline-tag.pug","name":"p","type":"tag","lineNumber": 3, "children":[ 
  {"source":"test/pug/inline-tag.pug","type":"text","val":"bing","lineNumber": 4},  
  {"source":"test/pug/inline-tag.pug","type":"text","val":"#[strong foo]","lineNumber": 5},  
  {"source":"test/pug/inline-tag.pug","type":"text","val":"#[strong= '[foo]']","lineNumber": 6},  
  {"source":"test/pug/inline-tag.pug","type":"text","val":"#[- var foo = 'foo]']","lineNumber": 7},  
  {"source":"test/pug/inline-tag.pug","type":"text","val":"bong","lineNumber": 8}] 
},  
{"source":"test/pug/inline-tag.pug","name":"p","type":"tag","lineNumber": 10, "children":[ 
  {"source":"test/pug/inline-tag.pug","type":"text","val":"bing","lineNumber": 11},  
  {"source":"test/pug/inline-tag.pug","type":"text","val":"#[strong foo]","lineNumber": 12},  
  {"source":"test/pug/inline-tag.pug","type":"text","val":"#[strong= '[foo]']","lineNumber": 13},  
  {"source":"test/pug/inline-tag.pug","type":"text","val":"#[- var foo = 'foo]']","lineNumber": 14},  
  {"source":"test/pug/inline-tag.pug","type":"text","val":"bong","lineNumber": 15}] 
},  
{"source":"test/pug/inline-tag.pug","name":"p","type":"tag","lineNumber": 17, "children":[ 
  {"source":"test/pug/inline-tag.pug","type":"text","val":"\\\\#[strong escaped]","lineNumber": 18},  
  {"source":"test/pug/inline-tag.pug","type":"text","val":"\\\\#[#[strong escaped]","lineNumber": 19}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=intepolated-elements.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/intepolated-elements.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/intepolated-elements.pug","name":"p","type":"tag","children":[{"name":"a","type":"tag","attrs":[{"name":"class","val":"\\"rho\\""},{"name":"href","val":"'#'"},{"name":"class","val":"'rho--modifier'"}],"val":"with inline link"}],"lineNumber": 1},  
{"source":"test/pug/intepolated-elements.pug","name":"p","type":"tag","children":[{"type":"text","val":"Some text "},{"name":"a","type":"tag","attrs":[{"name":"class","val":"\\"rho\\""},{"name":"href","val":"'#'"},{"name":"class","val":"'rho--modifier'"}]}],"lineNumber": 2},  
{"source":"test/pug/intepolated-elements.pug","name":"p","type":"tag","children":[{"type":"text","val":"Some text "},{"name":"a","type":"tag","attrs":[{"name":"class","val":"\\"rho\\""},{"name":"href","val":"'#'"},{"name":"class","val":"'rho--modifier'"}],"val":"with inline link"}],"lineNumber": 3}]
`

exports[`test/directory.spec.js TAP test directory testing file=interpolated-mixin.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/interpolated-mixin.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/interpolated-mixin.pug","type":"mixin","val":"linkit(url)","lineNumber": 1, "children":[ 
  {"source":"test/pug/interpolated-mixin.pug","name":"a","type":"tag","attrs":[{"name":"href","val":"url"}],"assignment":true,"assignment_val":"url","lineNumber": 2}] 
},  
{"source":"test/pug/interpolated-mixin.pug","name":"p","type":"tag","children":[{"type":"text","val":"This also works "},{"type":"mixin_call","name":"linkit","state":"MIXIN_CALL","params":"'http://www.bing.com'"},{"type":"text","val":" so hurrah for Pug"}],"lineNumber": 4}]
`

exports[`test/directory.spec.js TAP test directory testing file=interpolation.escape.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/interpolation.escape.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/interpolation.escape.pug","type":"unbuf_code","val":"var id = 42;","lineNumber": 1},  
{"source":"test/pug/interpolation.escape.pug","name":"foo","type":"tag","lineNumber": 2, "children":[ 
  {"source":"test/pug/interpolation.escape.pug","type":"text","val":"some","lineNumber": 3},  
  {"source":"test/pug/interpolation.escape.pug","type":"text","val":"\\\\#{text}","lineNumber": 4},  
  {"source":"test/pug/interpolation.escape.pug","type":"text","val":"\\\\!{here}","lineNumber": 5},  
  {"source":"test/pug/interpolation.escape.pug","type":"text","val":"My ID #{\\"is {\\" + id + \\"}\\"}","lineNumber": 6}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=layout.append.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/layout.append.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/layout.append.pug","type":"extends","val":"../fixtures/append/app-layout.pug","lineNumber": 2},  
{"source":"test/pug/layout.append.pug","type":"block","val":"append head","lineNumber": 4, "children":[ 
  {"source":"test/pug/layout.append.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'foo.js'"}],"lineNumber": 5},  
  {"source":"test/pug/layout.append.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'bar.js'"}],"lineNumber": 6}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=layout.append.without-block.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/layout.append.without-block.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/layout.append.without-block.pug","type":"extends","val":"../fixtures/append-without-block/app-layout.pug","lineNumber": 2},  
{"source":"test/pug/layout.append.without-block.pug","type":"append","val":"head","lineNumber": 4, "children":[ 
  {"source":"test/pug/layout.append.without-block.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'foo.js'"}],"lineNumber": 5},  
  {"source":"test/pug/layout.append.without-block.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'bar.js'"}],"lineNumber": 6}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=layout.multi.append.prepend.block.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/layout.multi.append.prepend.block.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/layout.multi.append.prepend.block.pug","type":"extends","val":"../fixtures/multi-append-prepend-block/redefine.pug","lineNumber": 1},  
{"source":"test/pug/layout.multi.append.prepend.block.pug","type":"append","val":"content","lineNumber": 3, "children":[ 
  {"source":"test/pug/layout.multi.append.prepend.block.pug","name":"p","type":"tag","attrs":[{"name":"class","val":"\\"first\\""},{"name":"class","val":"\\"append\\""}],"val":"Something appended to content","lineNumber": 4}] 
},  
{"source":"test/pug/layout.multi.append.prepend.block.pug","type":"prepend","val":"content","lineNumber": 6, "children":[ 
  {"source":"test/pug/layout.multi.append.prepend.block.pug","name":"p","type":"tag","attrs":[{"name":"class","val":"\\"first\\""},{"name":"class","val":"\\"prepend\\""}],"val":"Something prepended to content","lineNumber": 7}] 
},  
{"source":"test/pug/layout.multi.append.prepend.block.pug","type":"append","val":"content","lineNumber": 9, "children":[ 
  {"source":"test/pug/layout.multi.append.prepend.block.pug","name":"p","type":"tag","attrs":[{"name":"class","val":"\\"last\\""},{"name":"class","val":"\\"append\\""}],"val":"Last append must be most last","lineNumber": 10}] 
},  
{"source":"test/pug/layout.multi.append.prepend.block.pug","type":"prepend","val":"content","lineNumber": 12, "children":[ 
  {"source":"test/pug/layout.multi.append.prepend.block.pug","name":"p","type":"tag","attrs":[{"name":"class","val":"\\"last\\""},{"name":"class","val":"\\"prepend\\""}],"val":"Last prepend must appear at top","lineNumber": 13}] 
},  
{"source":"test/pug/layout.multi.append.prepend.block.pug","type":"append","val":"head","lineNumber": 15, "children":[ 
  {"source":"test/pug/layout.multi.append.prepend.block.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'jquery.js'"}],"lineNumber": 16}] 
},  
{"source":"test/pug/layout.multi.append.prepend.block.pug","type":"prepend","val":"head","lineNumber": 18, "children":[ 
  {"source":"test/pug/layout.multi.append.prepend.block.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'foo.js'"}],"lineNumber": 19}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=layout.prepend.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/layout.prepend.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/layout.prepend.pug","type":"extends","val":"../fixtures/prepend/app-layout.pug","lineNumber": 2},  
{"source":"test/pug/layout.prepend.pug","type":"block","val":"prepend head","lineNumber": 4, "children":[ 
  {"source":"test/pug/layout.prepend.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'foo.js'"}],"lineNumber": 5},  
  {"source":"test/pug/layout.prepend.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'bar.js'"}],"lineNumber": 6}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=layout.prepend.without-block.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/layout.prepend.without-block.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/layout.prepend.without-block.pug","type":"extends","val":"../fixtures/prepend-without-block/app-layout.pug","lineNumber": 2},  
{"source":"test/pug/layout.prepend.without-block.pug","type":"prepend","val":"head","lineNumber": 4, "children":[ 
  {"source":"test/pug/layout.prepend.without-block.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'foo.js'"}],"lineNumber": 5},  
  {"source":"test/pug/layout.prepend.without-block.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'bar.js'"}],"lineNumber": 6}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=mixin-at-end-of-file.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/mixin-at-end-of-file.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/mixin-at-end-of-file.pug","type":"include","val":"./auxiliary/mixin-at-end-of-file.pug","lineNumber": 1},  
{"source":"test/pug/mixin-at-end-of-file.pug","type":"mixin_call","name":"slide","params":"","lineNumber": 3, "children":[ 
  {"source":"test/pug/mixin-at-end-of-file.pug","name":"p","type":"tag","val":"some awesome content","lineNumber": 4}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=mixin-block-with-space.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/mixin-block-with-space.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/mixin-block-with-space.pug","type":"mixin","val":"m(id)","lineNumber": 1, "children":[ 
  {"source":"test/pug/mixin-block-with-space.pug","name":"div","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/mixin-block-with-space.pug","type":"block","val":"   ","lineNumber": 3}]}] 
},  
{"source":"test/pug/mixin-block-with-space.pug","type":"mixin_call","name":"m","params":"","lineNumber": 5, "children":[ 
  {"source":"test/pug/mixin-block-with-space.pug","type":"text","val":"This text should appear","lineNumber": 6}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=mixin-hoist.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/mixin-hoist.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/mixin-hoist.pug","type":"mixin","val":"foo()","lineNumber": 2, "children":[ 
  {"source":"test/pug/mixin-hoist.pug","name":"h1","type":"tag","assignment":true,"assignment_val":"title","lineNumber": 3}] 
},  
{"source":"test/pug/mixin-hoist.pug","name":"html","type":"tag","lineNumber": 5, "children":[ 
  {"source":"test/pug/mixin-hoist.pug","name":"body","type":"tag","lineNumber": 6, "children":[ 
    {"source":"test/pug/mixin-hoist.pug","type":"mixin_call","name":"foo","lineNumber": 7}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=mixin-via-include.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/mixin-via-include.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/mixin-via-include.pug","type":"html_comment","val":"- regression test for https://github.com/pugjs/pug/issues/1435","lineNumber": 1},  
{"source":"test/pug/mixin-via-include.pug","type":"include","val":"../fixtures/mixin-include.pug","lineNumber": 3},  
{"source":"test/pug/mixin-via-include.pug","type":"mixin_call","name":"bang","lineNumber": 5}]
`

exports[`test/directory.spec.js TAP test directory testing file=mixin.blocks.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/mixin.blocks.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/mixin.blocks.pug","type":"mixin","val":"form(method, action)","lineNumber": 3, "children":[ 
  {"source":"test/pug/mixin.blocks.pug","name":"form","type":"tag","attrs":[{"name":"method","val":"method"},{"name":"action","val":"action"}],"lineNumber": 4, "children":[ 
    {"source":"test/pug/mixin.blocks.pug","type":"unbuf_code","val":"var csrf_token_from_somewhere = 'hey'","lineNumber": 5},  
    {"source":"test/pug/mixin.blocks.pug","name":"input","type":"tag","attrs":[{"name":"type","val":"'hidden'"},{"name":"name","val":"'_csrf'"},{"name":"value","val":"csrf_token_from_somewhere"}],"lineNumber": 6},  
    {"source":"test/pug/mixin.blocks.pug","type":"block","lineNumber": 7}]}] 
},  
{"source":"test/pug/mixin.blocks.pug","name":"html","type":"tag","lineNumber": 9, "children":[ 
  {"source":"test/pug/mixin.blocks.pug","name":"body","type":"tag","lineNumber": 10, "children":[ 
    {"source":"test/pug/mixin.blocks.pug","type":"mixin_call","name":"form","params":"'GET', '/search'","lineNumber": 11, "children":[ 
      {"source":"test/pug/mixin.blocks.pug","name":"input","type":"tag","attrs":[{"name":"type","val":"'text'"},{"name":"name","val":"'query'"},{"name":"placeholder","val":"'Search'"}],"lineNumber": 12},  
      {"source":"test/pug/mixin.blocks.pug","name":"input","type":"tag","attrs":[{"name":"type","val":"'submit'"},{"name":"value","val":"'Search'"}],"lineNumber": 13}]}]}] 
},  
{"source":"test/pug/mixin.blocks.pug","name":"html","type":"tag","lineNumber": 15, "children":[ 
  {"source":"test/pug/mixin.blocks.pug","name":"body","type":"tag","lineNumber": 16, "children":[ 
    {"source":"test/pug/mixin.blocks.pug","type":"mixin_call","name":"form","params":"'POST', '/search'","lineNumber": 17, "children":[ 
      {"source":"test/pug/mixin.blocks.pug","name":"input","type":"tag","attrs":[{"name":"type","val":"'text'"},{"name":"name","val":"'query'"},{"name":"placeholder","val":"'Search'"}],"lineNumber": 18},  
      {"source":"test/pug/mixin.blocks.pug","name":"input","type":"tag","attrs":[{"name":"type","val":"'submit'"},{"name":"value","val":"'Search'"}],"lineNumber": 19}]}]}] 
},  
{"source":"test/pug/mixin.blocks.pug","name":"html","type":"tag","lineNumber": 21, "children":[ 
  {"source":"test/pug/mixin.blocks.pug","name":"body","type":"tag","lineNumber": 22, "children":[ 
    {"source":"test/pug/mixin.blocks.pug","type":"mixin_call","name":"form","params":"'POST', '/search'","lineNumber": 23}]}] 
},  
{"source":"test/pug/mixin.blocks.pug","type":"mixin","val":"bar()","lineNumber": 25, "children":[ 
  {"source":"test/pug/mixin.blocks.pug","type":"tag","id":"bar","lineNumber": 26, "children":[ 
    {"source":"test/pug/mixin.blocks.pug","type":"block","lineNumber": 27}]}] 
},  
{"source":"test/pug/mixin.blocks.pug","type":"mixin","val":"foo()","lineNumber": 29, "children":[ 
  {"source":"test/pug/mixin.blocks.pug","type":"tag","id":"foo","lineNumber": 30, "children":[ 
    {"source":"test/pug/mixin.blocks.pug","type":"mixin_call","name":"bar","lineNumber": 31, "children":[ 
      {"source":"test/pug/mixin.blocks.pug","type":"block","lineNumber": 32}]}]}] 
},  
{"source":"test/pug/mixin.blocks.pug","type":"mixin_call","name":"foo","lineNumber": 34, "children":[ 
  {"source":"test/pug/mixin.blocks.pug","name":"p","type":"tag","val":"one","lineNumber": 35},  
  {"source":"test/pug/mixin.blocks.pug","name":"p","type":"tag","val":"two","lineNumber": 36},  
  {"source":"test/pug/mixin.blocks.pug","name":"p","type":"tag","val":"three","lineNumber": 37}] 
},  
{"source":"test/pug/mixin.blocks.pug","type":"mixin","val":"baz","lineNumber": 40, "children":[ 
  {"source":"test/pug/mixin.blocks.pug","type":"tag","id":"baz","lineNumber": 41, "children":[ 
    {"source":"test/pug/mixin.blocks.pug","type":"block","lineNumber": 42}]}] 
},  
{"source":"test/pug/mixin.blocks.pug","type":"mixin_call","name":"baz","params":"","assignment":true,"assignment_val":"'123'","lineNumber": 44}]
`

exports[`test/directory.spec.js TAP test directory testing file=mixin.merge.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/mixin.merge.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/mixin.merge.pug","type":"mixin","val":"foo","lineNumber": 1, "children":[ 
  {"source":"test/pug/mixin.merge.pug","name":"p","type":"tag","attrs":[{"name":"class","val":"\\"bar\\""},{"val":"attributes"}],"val":"One","lineNumber": 2},  
  {"source":"test/pug/mixin.merge.pug","name":"p","type":"tag","attrs":[{"name":"class","val":"\\"baz\\""},{"name":"class","val":"\\"quux\\""},{"val":"attributes"}],"val":"Two","lineNumber": 3},  
  {"source":"test/pug/mixin.merge.pug","name":"p","type":"tag","attrs":[{"val":"attributes"}],"val":"Three","lineNumber": 4},  
  {"source":"test/pug/mixin.merge.pug","name":"p","type":"tag","attrs":[{"name":"class","val":"\\"bar\\""},{"val":"attributes"},{"name":"class","val":"\\"baz\\""}],"val":"Four","lineNumber": 5}] 
},  
{"source":"test/pug/mixin.merge.pug","name":"body","type":"tag","lineNumber": 7, "children":[ 
  {"source":"test/pug/mixin.merge.pug","type":"mixin_call","name":"foo","attrs":[{"name":"class","val":"\\"hello\\""}],"lineNumber": 8},  
  {"source":"test/pug/mixin.merge.pug","type":"mixin_call","name":"foo","id":"world","lineNumber": 9},  
  {"source":"test/pug/mixin.merge.pug","type":"mixin_call","name":"foo","attrs":[{"name":"class","val":"\\"hello\\""}],"id":"world","lineNumber": 10},  
  {"source":"test/pug/mixin.merge.pug","type":"mixin_call","name":"foo","attrs":[{"name":"class","val":"\\"hello\\""},{"name":"class","val":"\\"world\\""}],"lineNumber": 11},  
  {"source":"test/pug/mixin.merge.pug","type":"mixin_call","name":"foo","params":"class=\\"hello\\"","lineNumber": 12},  
  {"source":"test/pug/mixin.merge.pug","type":"mixin_call","name":"foo","attrs":[{"name":"class","val":"\\"hello\\""}],"params":"class=\\"world\\"","lineNumber": 13},  
  {"source":"test/pug/mixin.merge.pug","type":"mixin_call","name":"foo","lineNumber": 14},  
  {"source":"test/pug/mixin.merge.pug","type":"mixin_call","name":"foo","attrs":[{"name":"class","val":"hello"}],"lineNumber": 15}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=mixins-unused.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/mixins-unused.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/mixins-unused.pug","type":"mixin","val":"never-called","lineNumber": 1, "children":[ 
  {"source":"test/pug/mixins-unused.pug","type":"tag","attrs":[{"name":"class","val":"\\"wtf\\""}],"val":"This isn't something we ever want to output","lineNumber": 2}] 
},  
{"source":"test/pug/mixins-unused.pug","name":"body","type":"tag","lineNumber": 3}]
`

exports[`test/directory.spec.js TAP test directory testing file=mixins.rest-args.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/mixins.rest-args.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/mixins.rest-args.pug","type":"mixin","val":"list(tag, ...items)","lineNumber": 1, "children":[ 
  {"source":"test/pug/mixins.rest-args.pug","type":"tag","name":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/mixins.rest-args.pug","type":"each","val":"item in items","lineNumber": 3, "children":[ 
      {"source":"test/pug/mixins.rest-args.pug","name":"li","type":"tag","assignment":true,"assignment_val":"item","lineNumber": 4}]}]}] 
},  
{"source":"test/pug/mixins.rest-args.pug","type":"mixin_call","name":"list","params":"'ul', 1, 2, 3, 4","lineNumber": 6}]
`

exports[`test/directory.spec.js TAP test directory testing file=namespaces.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/namespaces.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/namespaces.pug","name":"fb","type":"tag","val":":user:role Something","lineNumber": 1},  
{"source":"test/pug/namespaces.pug","name":"foo","type":"tag","attrs":[{"name":"fb:foo","val":"'bar'"}],"lineNumber": 2}]
`

exports[`test/directory.spec.js TAP test directory testing file=nesting.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/nesting.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/nesting.pug","name":"ul","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/nesting.pug","name":"li","type":"tag","val":"a","lineNumber": 2},  
  {"source":"test/pug/nesting.pug","name":"li","type":"tag","val":"b","lineNumber": 3},  
  {"source":"test/pug/nesting.pug","name":"li","type":"tag","lineNumber": 4, "children":[ 
    {"source":"test/pug/nesting.pug","name":"ul","type":"tag","lineNumber": 5, "children":[ 
      {"source":"test/pug/nesting.pug","name":"li","type":"tag","val":"c","lineNumber": 6},  
      {"source":"test/pug/nesting.pug","name":"li","type":"tag","val":"d","lineNumber": 7}]}] 
},  
  {"source":"test/pug/nesting.pug","name":"li","type":"tag","val":"e","lineNumber": 8}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=pipeless-comments.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/pipeless-comments.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/pipeless-comments.pug","type":"html_comment","lineNumber": 1, "children":[ 
  {"source":"test/pug/pipeless-comments.pug","type":"text","val":".foo","lineNumber": 2}] 
},  
{"source":"test/pug/pipeless-comments.pug","type":"tag","attrs":[{"name":"class","val":"\\"bar\\""}],"lineNumber": 3, "children":[ 
  {"source":"test/pug/pipeless-comments.pug","type":"tag","attrs":[{"name":"class","val":"\\"hey\\""}],"lineNumber": 4}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=pre.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/pre.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/pre.pug","name":"pre","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/pre.pug","type":"text","val":"foo","lineNumber": 2},  
  {"source":"test/pug/pre.pug","type":"text","val":"bar","lineNumber": 3},  
  {"source":"test/pug/pre.pug","type":"text","val":"baz","lineNumber": 4}] 
},  
{"source":"test/pug/pre.pug","name":"pre","type":"tag","lineNumber": 6, "children":[ 
  {"source":"test/pug/pre.pug","name":"code","type":"tag","lineNumber": 7, "children":[ 
    {"source":"test/pug/pre.pug","type":"text","val":"foo","lineNumber": 8},  
    {"source":"test/pug/pre.pug","type":"text","val":"bar","lineNumber": 9},  
    {"source":"test/pug/pre.pug","type":"text","val":"baz","lineNumber": 10}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=quotes.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/quotes.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/quotes.pug","name":"p","type":"tag","val":"\\"foo\\"","lineNumber": 1},  
{"source":"test/pug/quotes.pug","name":"p","type":"tag","val":"'foo'","lineNumber": 2}]
`

exports[`test/directory.spec.js TAP test directory testing file=regression.1794.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/regression.1794.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/regression.1794.pug","type":"extends","val":"./auxiliary/1794-extends.pug","lineNumber": 1},  
{"source":"test/pug/regression.1794.pug","type":"block","val":"content","lineNumber": 3, "children":[ 
  {"source":"test/pug/regression.1794.pug","type":"include","val":"./auxiliary/1794-include.pug","lineNumber": 4}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=regression.784.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/regression.784.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/regression.784.pug","type":"unbuf_code","val":"var url = 'http://www.google.com'","lineNumber": 1},  
{"source":"test/pug/regression.784.pug","type":"tag","attrs":[{"name":"class","val":"\\"url\\""}],"children":[{"type":"interpolation","val":"url.replace('http://', '').replace(/^www\\\\./, '')"}],"lineNumber": 2}]
`

exports[`test/directory.spec.js TAP test directory testing file=script.whitespace.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/script.whitespace.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/script.whitespace.pug","name":"script","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/script.whitespace.pug","type":"text","val":"if (foo) {","lineNumber": 2, "children":[ 
    {"source":"test/pug/script.whitespace.pug","type":"text","val":"bar();","lineNumber": 4}] 
},  
  {"source":"test/pug/script.whitespace.pug","type":"block_end","lineNumber": 6}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=scripts.non-js.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/scripts.non-js.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/scripts.non-js.pug","name":"script","type":"tag","id":"user-template","attrs":[{"name":"type","val":"'text/template'"}],"lineNumber": 1, "children":[ 
  {"source":"test/pug/scripts.non-js.pug","type":"tag","id":"user","lineNumber": 2, "children":[ 
    {"source":"test/pug/scripts.non-js.pug","name":"h1","type":"tag","val":"<%= user.name %>","lineNumber": 3},  
    {"source":"test/pug/scripts.non-js.pug","name":"p","type":"tag","val":"<%= user.description %>","lineNumber": 4}]}] 
},  
{"source":"test/pug/scripts.non-js.pug","name":"script","type":"tag","id":"user-template","attrs":[{"name":"type","val":"'text/template'"}],"lineNumber": 6, "children":[ 
  {"source":"test/pug/scripts.non-js.pug","type":"text","val":"if (foo) {","lineNumber": 7, "children":[ 
    {"source":"test/pug/scripts.non-js.pug","type":"text","val":"bar();","lineNumber": 8}] 
},  
  {"source":"test/pug/scripts.non-js.pug","type":"block_end","lineNumber": 9}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=scripts.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/scripts.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/scripts.pug","name":"script","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/scripts.pug","type":"text","val":"if (foo) {","lineNumber": 2, "children":[ 
    {"source":"test/pug/scripts.pug","type":"text","val":"bar();","lineNumber": 3}] 
},  
  {"source":"test/pug/scripts.pug","type":"block_end","lineNumber": 4}] 
},  
{"source":"test/pug/scripts.pug","name":"script","type":"tag","val":"!= 'foo()'","lineNumber": 5},  
{"source":"test/pug/scripts.pug","name":"script","type":"tag","val":"foo()","lineNumber": 6},  
{"source":"test/pug/scripts.pug","name":"script","type":"tag","lineNumber": 7},  
{"source":"test/pug/scripts.pug","name":"div","type":"tag","lineNumber": 8}]
`

exports[`test/directory.spec.js TAP test directory testing file=self-closing-html.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/self-closing-html.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/self-closing-html.pug","type":"doctype","val":"html","lineNumber": 1},  
{"source":"test/pug/self-closing-html.pug","name":"html","type":"tag","lineNumber": 2, "children":[ 
  {"source":"test/pug/self-closing-html.pug","name":"body","type":"tag","lineNumber": 3, "children":[ 
    {"source":"test/pug/self-closing-html.pug","name":"br","type":"tag","val":"/","lineNumber": 4}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=single-period.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/single-period.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/single-period.pug","name":"span","type":"tag","lineNumber": 1}]
`

exports[`test/directory.spec.js TAP test directory testing file=source.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/source.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/source.pug","name":"html","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/source.pug","name":"audio","type":"tag","attrs":[{"name":"preload","val":"'auto'"},{"name":"autobuffer"},{"name":"controls"}],"lineNumber": 2, "children":[ 
    {"source":"test/pug/source.pug","name":"source","type":"tag","attrs":[{"name":"src","val":"'foo'"}],"lineNumber": 3},  
    {"source":"test/pug/source.pug","name":"source","type":"tag","attrs":[{"name":"src","val":"'bar'"}],"lineNumber": 4}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=tag.interpolation.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/tag.interpolation.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/tag.interpolation.pug","type":"unbuf_code","val":"var tag = 'p'","lineNumber": 2},  
{"source":"test/pug/tag.interpolation.pug","type":"unbuf_code","val":"var foo = 'bar'","lineNumber": 3},  
{"source":"test/pug/tag.interpolation.pug","type":"tag","name":"tag","val":"value","lineNumber": 5},  
{"source":"test/pug/tag.interpolation.pug","type":"tag","name":"tag","attrs":[{"name":"foo","val":"'bar'"}],"val":"value","lineNumber": 6},  
{"source":"test/pug/tag.interpolation.pug","type":"tag","name":"foo ? 'a' : 'li'","attrs":[{"name":"something"}],"val":"here","lineNumber": 7},  
{"source":"test/pug/tag.interpolation.pug","type":"mixin","val":"item(icon)","lineNumber": 9, "children":[ 
  {"source":"test/pug/tag.interpolation.pug","name":"li","type":"tag","lineNumber": 10, "children":[ 
    {"source":"test/pug/tag.interpolation.pug","type":"if","val":"attributes.href","lineNumber": 11, "children":[ 
      {"source":"test/pug/tag.interpolation.pug","name":"a","type":"tag","attrs":[{"val":"attributes"}],"lineNumber": 12, "children":[ 
        {"source":"test/pug/tag.interpolation.pug","name":"img","type":"tag","attrs":[{"name":"class","val":"\\"icon\\""},{"name":"src","val":"icon"}],"lineNumber": 13},  
        {"source":"test/pug/tag.interpolation.pug","type":"block","lineNumber": 14}]}] 
},  
    {"source":"test/pug/tag.interpolation.pug","type":"else","lineNumber": 15, "children":[ 
      {"source":"test/pug/tag.interpolation.pug","name":"span","type":"tag","attrs":[{"val":"attributes"}],"lineNumber": 16, "children":[ 
        {"source":"test/pug/tag.interpolation.pug","name":"img","type":"tag","attrs":[{"name":"class","val":"\\"icon\\""},{"name":"src","val":"icon"}],"lineNumber": 17},  
        {"source":"test/pug/tag.interpolation.pug","type":"block","lineNumber": 18}]}]}]}] 
},  
{"source":"test/pug/tag.interpolation.pug","name":"ul","type":"tag","lineNumber": 20, "children":[ 
  {"source":"test/pug/tag.interpolation.pug","type":"mixin_call","name":"item","params":"'contact'","val":"Contact","lineNumber": 21},  
  {"source":"test/pug/tag.interpolation.pug","type":"mixin_call","name":"item","params":"href='/contact'","val":"Contact","lineNumber": 22}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=template.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/template.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/template.pug","name":"script","type":"tag","attrs":[{"name":"type","val":"'text/x-template'"}],"lineNumber": 1, "children":[ 
  {"source":"test/pug/template.pug","name":"article","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/template.pug","name":"h2","type":"tag","val":"{{title}}","lineNumber": 3},  
    {"source":"test/pug/template.pug","name":"p","type":"tag","val":"{{description}}","lineNumber": 4}]}] 
},  
{"source":"test/pug/template.pug","name":"script","type":"tag","attrs":[{"name":"type","val":"'text/x-template'"}],"lineNumber": 6, "children":[ 
  {"source":"test/pug/template.pug","type":"text","val":"article","lineNumber": 7, "children":[ 
    {"source":"test/pug/template.pug","type":"text","val":"h2 {{title}}","lineNumber": 8},  
    {"source":"test/pug/template.pug","type":"text","val":"p {{description}}","lineNumber": 9}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=text-block.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/text-block.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/text-block.pug","name":"label","type":"tag","val":"Username:","lineNumber": 2, "children":[ 
  {"source":"test/pug/text-block.pug","name":"input","type":"tag","attrs":[{"name":"type","val":"'text'"},{"name":"name","val":"'user[name]'"}],"lineNumber": 3}] 
},  
{"source":"test/pug/text-block.pug","name":"label","type":"tag","val":"Password:","lineNumber": 5, "children":[ 
  {"source":"test/pug/text-block.pug","name":"input","type":"tag","attrs":[{"name":"type","val":"'text'"},{"name":"name","val":"'user[pass]'"}],"lineNumber": 6}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=text.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/text.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/text.pug","name":"option","type":"tag","attrs":[{"name":"value","val":"''"}],"val":"-- (selected) --","lineNumber": 1},  
{"source":"test/pug/text.pug","name":"p","type":"tag","lineNumber": 3},  
{"source":"test/pug/text.pug","name":"p","type":"tag","lineNumber": 5},  
{"source":"test/pug/text.pug","name":"p","type":"tag","lineNumber": 7, "children":[ 
  {"source":"test/pug/text.pug","type":"text","val":"foo","lineNumber": 8},  
  {"source":"test/pug/text.pug","type":"text","val":"bar","lineNumber": 9},  
  {"source":"test/pug/text.pug","type":"text","val":"","lineNumber": 10},  
  {"source":"test/pug/text.pug","type":"text","lineNumber": 11},  
  {"source":"test/pug/text.pug","type":"text","val":"baz","lineNumber": 12}] 
},  
{"source":"test/pug/text.pug","name":"p","type":"tag","lineNumber": 14, "children":[ 
  {"source":"test/pug/text.pug","type":"text","val":"foo","lineNumber": 15},  
  {"source":"test/pug/text.pug","type":"text","val":"bar","lineNumber": 18},  
  {"source":"test/pug/text.pug","type":"text","val":"baz","lineNumber": 19}] 
},  
{"source":"test/pug/text.pug",,"lineNumber": 21},  
{"source":"test/pug/text.pug",,"lineNumber": 23, "children":[ 
  {"source":"test/pug/text.pug","type":"text","val":"foo","lineNumber": 24},  
  {"source":"test/pug/text.pug","type":"text","val":"bar","lineNumber": 27},  
  {"source":"test/pug/text.pug","type":"text","val":"baz","lineNumber": 28}] 
},  
{"source":"test/pug/text.pug","name":"pre","type":"tag","lineNumber": 30, "children":[ 
  {"source":"test/pug/text.pug","type":"text","val":"foo","lineNumber": 31},  
  {"source":"test/pug/text.pug","type":"text","val":"  bar","lineNumber": 32},  
  {"source":"test/pug/text.pug","type":"text","val":"    baz","lineNumber": 33},  
  {"source":"test/pug/text.pug","type":"text","val":".","lineNumber": 34}] 
},  
{"source":"test/pug/text.pug","name":"pre","type":"tag","lineNumber": 36, "children":[ 
  {"source":"test/pug/text.pug","type":"text","val":"foo","lineNumber": 37, "children":[ 
    {"source":"test/pug/text.pug","type":"text","val":"bar","lineNumber": 38, "children":[ 
      {"source":"test/pug/text.pug","type":"text","val":"baz","lineNumber": 39}]}] 
},  
  {"source":"test/pug/text.pug",,"lineNumber": 40}] 
},  
{"source":"test/pug/text.pug",,"lineNumber": 42, "children":[ 
  {"source":"test/pug/text.pug","type":"text","val":"foo","lineNumber": 43, "children":[ 
    {"source":"test/pug/text.pug","type":"text","val":"bar","lineNumber": 44, "children":[ 
      {"source":"test/pug/text.pug","type":"text","val":"baz","lineNumber": 45}]}] 
},  
  {"source":"test/pug/text.pug",,"lineNumber": 46}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=utf8bom.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/utf8bom.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/utf8bom.pug","name":"p","type":"tag","val":"\\"foo\\"","lineNumber": 1}]
`

exports[`test/directory.spec.js TAP test directory testing file=vars.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/vars.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/vars.pug","type":"unbuf_code","val":"var foo = 'bar'","lineNumber": 1},  
{"source":"test/pug/vars.pug","type":"unbuf_code","val":"var list = [1,2,3]","lineNumber": 2},  
{"source":"test/pug/vars.pug","name":"a","type":"tag","attrs":[{"name":"class","val":"list"},{"name":"id","val":"foo"}],"lineNumber": 3}]
`

exports[`test/directory.spec.js TAP test directory testing file=while.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/while.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/while.pug","type":"unbuf_code","val":"var x = 1;","lineNumber": 1},  
{"source":"test/pug/while.pug","name":"ul","type":"tag","lineNumber": 2, "children":[ 
  {"source":"test/pug/while.pug","type":"while","val":"x < 10","lineNumber": 3, "children":[ 
    {"source":"test/pug/while.pug","type":"unbuf_code","val":"x++;","lineNumber": 4},  
    {"source":"test/pug/while.pug","name":"li","type":"tag","assignment":true,"assignment_val":"x","lineNumber": 5}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=yield-before-conditional-head.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/yield-before-conditional-head.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/yield-before-conditional-head.pug","name":"head","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/yield-before-conditional-head.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'/jquery.js'"}],"lineNumber": 2},  
  {"source":"test/pug/yield-before-conditional-head.pug","type":"yield","lineNumber": 3},  
  {"source":"test/pug/yield-before-conditional-head.pug","type":"if","val":"false","lineNumber": 4, "children":[ 
    {"source":"test/pug/yield-before-conditional-head.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'/jquery.ui.js'"}],"lineNumber": 5}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=yield-before-conditional.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/yield-before-conditional.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/yield-before-conditional.pug","name":"html","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/yield-before-conditional.pug","name":"body","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/yield-before-conditional.pug","type":"include","val":"yield-before-conditional-head.pug","lineNumber": 3, "children":[ 
      {"source":"test/pug/yield-before-conditional.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'/caustic.js'"}],"lineNumber": 4},  
      {"source":"test/pug/yield-before-conditional.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'/app.js'"}],"lineNumber": 5}]}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=yield-head.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/yield-head.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/yield-head.pug","name":"head","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/yield-head.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'/jquery.js'"}],"lineNumber": 2},  
  {"source":"test/pug/yield-head.pug","type":"yield","lineNumber": 3},  
  {"source":"test/pug/yield-head.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'/jquery.ui.js'"}],"lineNumber": 4}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=yield-title-head.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/yield-title-head.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/yield-title-head.pug","name":"head","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/yield-title-head.pug","name":"title","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/yield-title-head.pug","type":"yield","lineNumber": 3}] 
},  
  {"source":"test/pug/yield-title-head.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'/jquery.js'"}],"lineNumber": 4},  
  {"source":"test/pug/yield-title-head.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'/jquery.ui.js'"}],"lineNumber": 5}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=yield-title.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/yield-title.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/yield-title.pug","name":"html","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/yield-title.pug","name":"body","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/yield-title.pug","type":"include","val":"yield-title-head.pug","lineNumber": 3, "children":[ 
      {"source":"test/pug/yield-title.pug","type":"text","val":"My Title","lineNumber": 4}]}]}]}]
`

exports[`test/directory.spec.js TAP test directory testing file=yield.pug > File /Users/aakoch/projects/new-foo/workspaces/lexing-transformer/test/pug/yield.pug did not match snapshot 1`] = `
[ 
{"source":"test/pug/yield.pug","name":"html","type":"tag","lineNumber": 1, "children":[ 
  {"source":"test/pug/yield.pug","name":"body","type":"tag","lineNumber": 2, "children":[ 
    {"source":"test/pug/yield.pug","type":"include","val":"yield-head.pug","lineNumber": 3, "children":[ 
      {"source":"test/pug/yield.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'/caustic.js'"}],"lineNumber": 4},  
      {"source":"test/pug/yield.pug","name":"script","type":"tag","attrs":[{"name":"src","val":"'/app.js'"}],"lineNumber": 5}]}]}]}]
`
