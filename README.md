
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