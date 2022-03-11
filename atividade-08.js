function multiplicar(num1, num2){
    let res = 0;
    let i = 0;

    while(i < num1){
        res = res + num2;
        i++;
    };
    return res;
}

console.log(multiplicar(5, 5));