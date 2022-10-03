function explode(x){
  let res = [];
  if (typeof x[0] === "string" && typeof x[1] === "string") {
    return "Void!"
  } else if ((typeof x[0] === "string" && typeof x[1] === "number") || (typeof x[0] === "number" && typeof x[1] === "string")) {
    const leng = x.filter((e) => typeof e === "number" );
    for (let i=0; i < leng; i++) {
      res.push(x)
    }
  } else {
    const leng = x[0] + x[1]
    for (let i=0; i < leng; i++) {
      res.push(x)
    }
  }
    return res;
}

console.log(explode([9, 3])) //> [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
console.log(explode(['a', 3])) //> [['a', 3], ['a', 3], ['a', 3]]
console.log(explode([6, 'c'])) //> [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
console.log(explode(['a', 'b'])) //>  'Void!'
console.log(explode(["a", 0])) //>  []