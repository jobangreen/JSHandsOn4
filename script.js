function makeList() {
    let e1= 1;
    let list = [];

for (let i= 0; i<20; i++){
    if (i===0){
        list.push(1);
    }
    else if (i===1){
        list.push(2);
    }
    else {
        list.push( list[i-1] + list[i-2] );
    }
}

console.log(list);

}

makeList();