## Simple setup to randomize whatever

### Pre req:

Tested with node < 18

To run:

1. Run NPM install (nothing to install at the moment though...)
2. Put the names/things you want to rondomize in input.txt (one per line)
3. `node index.mjs 4` will split the names/things into groups of 4 (ish, depending on how many names you have). If you omit the 4, the default number is 5
4. The groups will be written to `output.txt`
