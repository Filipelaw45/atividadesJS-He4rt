function receberDoisNumeros(num1, num2){
    if(num1 >= num2 && typeof num1 === 'number' && typeof num2 === 'number'){
        return true;
    }else{
        return false;
    }
}

console.log(receberDoisNumeros(4, 4));