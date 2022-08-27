const produtos = [
{"nome": "camiseta", "valor": 100.00, "internacional": true},
{"nome": "perfume", "valor": 200.00, "internacional": true},
{"nome": "sandália", "valor": 120.00, "internacional": false}
]

produtos.forEach((produtos) => {
    if(produtos["internacional"]) {
        console.log(produtos["valor"] * 1.20)
    } else {
        console.log(produtos["valor"] * 1.12)
    }
})