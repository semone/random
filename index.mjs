import { readFileSync, writeFileSync } from "fs";
import { randomize } from "./random.mjs";

const input = readFileSync('./input.txt', 'utf-8').trim()
const perGroup = process.argv.slice(2)?.[0] || 5
const output = randomize(input, perGroup);
console.log(output);
writeFileSync('output.txt', output);



