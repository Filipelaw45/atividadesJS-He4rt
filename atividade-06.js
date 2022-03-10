function inverterValor(valor){
    if(valor === true){
        return false
    }
    if(valor === false){
        return true 
    }
    if(valor !== NaN && valor > 0){
        return -valor 
    }
    if(valor !== NaN && valor < 0){
        return valor *= -1
    }
    else{
        return "booleano ou número esperados, mas o parâmetro é do tipo string"
    }
}

console.log(inverterValor(6));