interface CheckSum {
  (a: number, b: number): number;
}

const sum: CheckSum = function (a, b) {
  return a + b;
};

console.log(sum(1, 4));

// const a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;

// // let b = ro as number[];
// let b = ro;
// a[3] = 54
// a.push(55)
// console.log(ro[4]) // error!
// a[0] = 12; // error!

// console.log({a,ro,b})

// const obj = {
//   a: 1,
//   b: 2,
//   // c: 3,
//   d: 4,
// };

// interface CheckObj {
//   a: number;
//   b: number;
//   c?: number;
// }

// const nestObj = {...obj}
// // console.log(nestObj.obj.a)
// console.log(nestObj.a)

// function takeObj(whatObj: CheckObj) {
//   console.log(whatObj);
// }

// // const x = takeObj(obj);
// takeObj({
//   a: 1,
//   b: 2,
//   // c: 3,
//   d: 4,
// } as CheckObj);

// takeObj(obj)
