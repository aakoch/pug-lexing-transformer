
# Pug Lexing Transformer

Parse a file to AST

## TODO

1. Fix errors in errors.txt

## Command line usage
```shell
node src/cli.js [filename]
```

### Mass testing

Remove current build folder and copy input files from test folder:
```shell
rm -rf build/ && mkdir build && cp -R ../test/pug/ build
```


Loop over files calling the CLI with the filename and outputting new files in build directory:
```shell
for f in $(ls build/*.pug); do echo ${f%.*}.json; export errfilename="${f%.*}.err"; node src/cli $f ${f%.*}.json 2> ${errfilename}; [ -s ${errfilename} ] || rm ${errfilename}; done; echo $(ls -1 build/*.err | wc -l) "files have errors"
```

## Dependencies

- pug-line-lexer
- post-lexing-transformer (used as part of the CLI but probably needs incorporated)

## Flow
pug-lexing-transformer -> foo-dog-attrs -> generator