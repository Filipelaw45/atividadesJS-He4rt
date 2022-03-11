function simboloMais(qnt){
    let res = ""

    for(let i = 0; i < qnt; i++){
        res = `${res}+`;
    }

    return `"${res}"`;
}

console.log(simboloMais(6));