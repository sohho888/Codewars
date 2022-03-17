function descendingOrder(n) {
    let arr2 = []
    let arr = String(n).split("");
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) >= Number(arr[i+1]))
            arr2.push(Number(arr[i]))
        // else {
        //     arr2.push(Number(arr[i]))
        // }
    }
    return arr2;
}


console.log(descendingOrder(588824543)); 