function flattenArray<T>(arr: T[]): T[] {
  const flattened: T[] = [];

  for (const element of arr) {
    if (Array.isArray(element)) {
      flattened.push(...flattenArray(element));
    } else {
      flattened.push(element);
    }
  }

  return flattened;
}

const nestedArray = [1, [2, [3, 4]], 5, [6]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
