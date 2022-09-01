let numero = 13

for(let i = 2;i <= numero; i++){
    if(i === numero){
        console.log(`Sim, o número ${numero} é primo!`)
        return
    }
    
    if(numero % i === 0) {
        console.log(`Não, o número ${numero} não é primo!`) 
        return
    }
}    