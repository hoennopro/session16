function genericFunction<T>(input: T): T {
  return input;
}

let result1 = genericFunction<number>(10);
let result2 = genericFunction<string>("Hello");
let result3 = genericFunction<boolean>(true);

console.log(result1);
console.log(result2);
console.log(result3);
