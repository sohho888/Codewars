const descendingOrder = (n, arr = [...String(n)]) => parseInt(arr.sort((a, b) => b - a).join(''));

let fff = descendingOrder(56489764895871336);
console.log(fff);
