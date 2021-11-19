
# Pug Lexing Transformer

Incomplete project

## TODO

## Command line usage

```
node src/cli.js test/files/interpolated-mixin.in
node src/cli.js test/pug/attrs.js.pug

for f in $(ls test/pug/*.pug); do node src/cli $f $f.json; done
rename -d ".pug" test/pug/*.pug.json
mv test/pug/*.json ../generator/test/json/

touch rewrite.pug
node child_writer.js temp.json
cat rewrite.pug
cat test/files/interpolated-mixin.in

```

```
node src/cli.js /Users/aakoch/projects/adamkoch.com/src/posts/2021/09/08/index.pug ../linker/test/page_in.json
```