const listaDeProdutos = document.querySelector(".listaProdutos")

function listarProduto(){

    for(let i=0;i<data.length;i++){

        const divCard = document.createElement("div")
        divCard.className = "card"
        const imgProduto =  document.createElement("img")
        imgProduto.className = "imagemProduto"
        const botaoCategoria = document.createElement("button")
        botaoCategoria.className= "categoria"
        const titulo  = document.createElement("h3")
        titulo.className = "nomeProduto"
        const descricaoProduto = document.createElement("p")
        descricaoProduto.className = "descricao"
        const precoProduto  = document.createElement("strong")
        precoProduto.className = "preco"
        const adicionarCarrinho =  document.createElement("p")
        adicionarCarrinho.className = "adicionarCarrinho"

        imgProduto.src = `${data[i].img}`
        imgProduto.alt = `${data[i].nameItem}`

        botaoCategoria.innerText = `${data[i].tag[0]}`

        titulo.innerText = `${data[i].nameItem}`

        descricaoProduto.innerText = `${data[i].description}`

        precoProduto.innerText = `R$${data[i].value}`

        adicionarCarrinho.innerText = "Adicionar ao carrinho"
        adicionarCarrinho.setAttribute("id", data[i].id)

        listaDeProdutos.appendChild(divCard)
        divCard.appendChild(imgProduto)
        divCard.appendChild(botaoCategoria)
        divCard.appendChild(titulo)
        divCard.appendChild(descricaoProduto)
        divCard.appendChild(precoProduto)
        divCard.appendChild(adicionarCarrinho)
    }
}

listarProduto()

const btnAdicionar = document.querySelectorAll(".adicionarCarrinho")

for(let i=0;i<btnAdicionar.length;i++){

    let btnComprar = btnAdicionar[i]

    btnComprar.addEventListener("click",adicionarAoCarrinho)
}

function adicionarAoCarrinho(event){
    console.log(event.target)
}


const input = document.querySelector("input")
const btnBusca = document.querySelector(".pesquisar")

btnBusca.addEventListener("click",function(){
    let arrayResultado = []
    let resultadoBusca = input.value
    for(let i =0; i<data.length;i++){
        if(resultadoBusca===data[i].nameItem||resultadoBusca===data[i].tag[0]){
            arrayResultado.push(data[i])
        }
    }

    listaDeProdutos.innerHTML = ""

    for(let i=0;i<arrayResultado.length;i++){

        const divCard = document.createElement("div")
        divCard.className = "card"
        const imgProduto =  document.createElement("img")
        imgProduto.className = "imagemProduto"
        const botaoCategoria = document.createElement("button")
        botaoCategoria.className= "categoria"
        const titulo  = document.createElement("h3")
        titulo.className = "nomeProduto"
        const descricaoProduto = document.createElement("p")
        descricaoProduto.className = "descricao"
        const precoProduto  = document.createElement("strong")
        precoProduto.className = "preco"
        const adicionarCarrinho =  document.createElement("p")
        adicionarCarrinho.className = "adicionarCarrinho"

        imgProduto.src = `${arrayResultado[i].img}`
        imgProduto.alt = `${arrayResultado[i].nameItem}`

        botaoCategoria.innerText = `${arrayResultado[i].tag[0]}`

        titulo.innerText = `${arrayResultado[i].nameItem}`

        descricaoProduto.innerText = `${arrayResultado[i].description}`

        precoProduto.innerText = `R$${arrayResultado[i].value}`

        adicionarCarrinho.innerText = "Adicionar ao carrinho"
        adicionarCarrinho.setAttribute("id", arrayResultado[i].id)

        listaDeProdutos.appendChild(divCard)
        divCard.appendChild(imgProduto)
        divCard.appendChild(botaoCategoria)
        divCard.appendChild(titulo)
        divCard.appendChild(descricaoProduto)
        divCard.appendChild(precoProduto)
        divCard.appendChild(adicionarCarrinho)
    }

} )

const btnTodos = document.querySelector(".navegacao.todos")

btnTodos.addEventListener("click",function(){
    listaDeProdutos.innerHTML = ""
    listarProduto()
})

const btnCamisetas = document.querySelector(".navegacao.camisetas")

btnCamisetas.addEventListener("click", function(){
    listaDeProdutos.innerHTML =""
    for(let i=0;i<data.length;i++){
        if(data[i].tag[0]==="Camisetas"){
            const divCard = document.createElement("div")
        divCard.className = "card"
        const imgProduto =  document.createElement("img")
        imgProduto.className = "imagemProduto"
        const botaoCategoria = document.createElement("button")
        botaoCategoria.className= "categoria"
        const titulo  = document.createElement("h3")
        titulo.className = "nomeProduto"
        const descricaoProduto = document.createElement("p")
        descricaoProduto.className = "descricao"
        const precoProduto  = document.createElement("strong")
        precoProduto.className = "preco"
        const adicionarCarrinho =  document.createElement("p")
        adicionarCarrinho.className = "adicionarCarrinho"

        imgProduto.src = `${data[i].img}`
        imgProduto.alt = `${data[i].nameItem}`

        botaoCategoria.innerText = `${data[i].tag[0]}`

        titulo.innerText = `${data[i].nameItem}`

        descricaoProduto.innerText = `${data[i].description}`

        precoProduto.innerText = `R$${data[i].value}`

        adicionarCarrinho.innerText = "Adicionar ao carrinho"
        adicionarCarrinho.setAttribute("id", data[i].id)

        listaDeProdutos.appendChild(divCard)
        divCard.appendChild(imgProduto)
        divCard.appendChild(botaoCategoria)
        divCard.appendChild(titulo)
        divCard.appendChild(descricaoProduto)
        divCard.appendChild(precoProduto)
        divCard.appendChild(adicionarCarrinho)
        }
    }
})

const btnAcessorios = document.querySelector(".navegacao.acessorios")

btnAcessorios.addEventListener("click",function(){
    listaDeProdutos.innerHTML = ""
    for(let i=0;i<data.length;i++){
        if(data[i].tag[0]==="Acessórios"){
            const divCard = document.createElement("div")
            divCard.className = "card"
            const imgProduto =  document.createElement("img")
            imgProduto.className = "imagemProduto"
            const botaoCategoria = document.createElement("button")
            botaoCategoria.className= "categoria"
            const titulo  = document.createElement("h3")
            titulo.className = "nomeProduto"
            const descricaoProduto = document.createElement("p")
            descricaoProduto.className = "descricao"
            const precoProduto  = document.createElement("strong")
            precoProduto.className = "preco"
            const adicionarCarrinho =  document.createElement("p")
            adicionarCarrinho.className = "adicionarCarrinho"
    
            imgProduto.src = `${data[i].img}`
            imgProduto.alt = `${data[i].nameItem}`
    
            botaoCategoria.innerText = `${data[i].tag[0]}`
    
            titulo.innerText = `${data[i].nameItem}`
    
            descricaoProduto.innerText = `${data[i].description}`
    
            precoProduto.innerText = `R$${data[i].value}`
    
            adicionarCarrinho.innerText = "Adicionar ao carrinho"
            adicionarCarrinho.setAttribute("id", data[i].id)
    
            listaDeProdutos.appendChild(divCard)
            divCard.appendChild(imgProduto)
            divCard.appendChild(botaoCategoria)
            divCard.appendChild(titulo)
            divCard.appendChild(descricaoProduto)
            divCard.appendChild(precoProduto)
            divCard.appendChild(adicionarCarrinho)
        }
    }
})


