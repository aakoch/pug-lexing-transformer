
# Pug Lexing Transformer

Incomplete project

## TODO

## Command line usage

```
node src/cli.js test/files/interpolated-mixin.in
node src/cli.js test/pug/attrs.js.pug

mkdir -p build/test/pug

for f in $(ls test/pug/*.pug); do node src/cli $f build/$f.json; done
or
for f in $(ls test/pug/*.pug); do node src/cli $f build/$f.json 2> build/$f.err; done
find build/test/pug/ -size 0c -exec rm {} \;


rename -d ".pug" build/test/pug/*.pug.json
mv build/test/pug/*.json ../generator/test/json/


touch rewrite.pug
node child_writer.js temp.json
cat rewrite.pug
cat test/files/interpolated-mixin.in

```

```
node src/cli.js /Users/aakoch/projects/adamkoch.com/src/posts/2021/09/08/index.pug ../linker/test/page_in.json
```

## State diagram

current state is what is sent to the parser
on deck state is what was received from the parser

Start with no state in [], nothing in onDeckState, no current state.
  indent: indentation count incremented, nothing pushed to [], nothing on deck and the current state is null
  nodent: nothing changes
  dedent: the top state in the [] becomes the current state

### 1
Start with no state in [], 'CODE' is on deck, no current state.
  indent: indentation count incremented, current state is set to what was on deck ('CODE'), 'CODE' in stack???
  indent example:
- some code
  some more code

  nodent: indentation count unchanged, current state replaced with top of the stack but it is empty so..., on deck state thrown away
  nodent example:
body
  - some code
  div more code

  dedent: indentation count decremented, current state replaced with top of the stack but it is empty so..., on deck state thrown away
  dedent example:
body
  - some code
div more code

### 2
Start with stack as ['PERSISTENT STATE'], nothing is on deck, no current state
  indent: error because the persistent state should be on deck?
  indent example:
some_state text
  div

  nodent: indentation count unchanged, current state replaced with on deck state but it is empty so..., on deck state stays null
  nodent example:
persistent_state
  some_state text
  div more stuff

  dedent: indentation count decremented, current state replaced with top of the stack but it is empty so..., on deck state thrown away
  dedent example:
body
  some_state text
div more stuff



-
each item in list
  -
    string = item.charAt(0)
    
      .toUpperCase() +
    item.slice(1);
  li= string


- for (var x = 0; x < 3; x++)
  li item