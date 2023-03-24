function parseInput(input) {
  return input.split("\n");
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function chunk(arr, size) {
  return arr.length > size
    ? [arr.slice(0, size), ...chunk(arr.slice(size), size)]
    : [arr];
}

function createGroups(arr, size) {
  const chunks = chunk(arr, size);
  const l = chunks.length;
  if (chunks[l - 1].length < size - 1) {
    const lastChunk = chunks.pop();
    let i = 0;
    while (lastChunk.length) {
      chunks[i % (l - 1)].push(lastChunk.pop());
      i += 1;
    }
  }

  return chunks;
}

function randomize(input, groups) {
  const entities = parseInput(input);
  if(entities.length < groups) {
    return entities.join("\n")
  }
  const shuffled = shuffle(entities);
  const grouped = createGroups(shuffled, groups);
  return grouped.map((g) => g.join("\n")).join("\n\n");
}

export { randomize }