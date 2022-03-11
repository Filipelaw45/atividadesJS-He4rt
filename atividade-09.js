function repetir(valor, quantidade){
    let res = [];

    for(let index = 0; index < quantidade; index++){
        res.push(valor);
    }

    return res;
}

console.log(repetir('Filipe', 5));