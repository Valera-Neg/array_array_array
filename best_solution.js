function explode([x, y]){
 return x+0!=x&&y+0!=y?"Void!":Array((+x||0)+(+y||0)).fill([x,y]);
};

console.log(explode([9, 3])) //> [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
console.log(explode(['a', 3])) //> [['a', 3], ['a', 3], ['a', 3]]
console.log(explode([6, 'c'])) //> [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
console.log(explode(['a', 'b'])) //>  'Void!'
console.log(explode(["a", 0])) //>  []