const descendingOrder = (n, arr = [...String(n)]) => parseInt(arr.sort((a, b) => b - a).join(''));

let fff = descendingOrder(56489764895871336);
console.log(fff);



// Powers of 2.1

function powersOfTwo(n){
    let arr = []
    for(let i = 0; i <= n; i++) {
      let f = Math.pow(2,i);
      arr.push(f)
    }
   
    
    return arr
  }
  
  let jj = powersOfTwo(4);
  console.log(jj);
