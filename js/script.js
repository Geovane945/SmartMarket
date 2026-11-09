const produtos = [
    {
    nome: "Arroz 5kg",
    preco: 24.90,
    setor: "Mercearia",
    corredor: "02",
    prateleira: "03",
    imagem: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",

    porcao: "50 g (arroz cru)",
    calorias: "185 kcal",
    carboidratos: "39 g",
    acucares: "Não informado",
    acucaresAdicionados: "Não informado",
    proteinas: "4 g",
    gorduras: "1 g",
    gordurasSaturadas: "0,2 g",
    gordurasTrans: "0 g",
    fibras: "2,3 g",
    sodio: "0 mg",
    calcio: "Não informado",
    magnesio: "Aproximadamente 70 mg",
    fosforo: "Aproximadamente 140 mg",

    nutricao: "Valores de referência demonstrativos para arroz integral cru.",
    alergenicos: "Pode conter traços de soja e outros cereais, conforme o fabricante."
},
  {
    nome: "Leite Integral 1L",
    preco: 5.49,
    setor: "Laticínios",
    corredor: "03",
    prateleira: "04",
    imagem: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500",

    porcao: "200 ml (1 copo)",
    calorias: "117 kcal / 491 kJ",
    carboidratos: "9,6 g",
    acucares: "9,6 g",
    acucaresAdicionados: "0 g",
    proteinas: "6,2 g",
    gorduras: "6,0 g",
    gordurasSaturadas: "3,5 a 4,0 g",
    gordurasTrans: "0 g",
    fibras: "0 g",
    sodio: "110 mg",
    calcio: "240 mg (25% VD)",

    nutricao: "Valores de referência demonstrativos para leite UHT integral.",
    alergenicos: "CONTÉM LEITE."
},
  {
    nome: "Café 500g",
    preco: 18.90,
    setor: "Mercearia",
    corredor: "01",
    prateleira: "04",
    imagem: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500",

    porcao: "5 g (café em pó)",
    calorias: "Aproximadamente 0 kcal",
    carboidratos: "0 g",
    acucares: "0 g",
    acucaresAdicionados: "0 g",
    proteinas: "0 g",
    gorduras: "0 g",
    gordurasSaturadas: "0 g",
    gordurasTrans: "0 g",
    fibras: "0 g",
    sodio: "0 mg",
    calcio: "Não informado",
    magnesio: "Não informado",
    fosforo: "Não informado",
    cafeina: "Quantidade variável conforme o preparo.",

    nutricao: "Valores demonstrativos para café sem açúcar.",
    alergenicos: "Verifique a declaração de alergênicos na embalagem."
},
   {
    nome: "Óleo de soja 900ml",
    preco: 7.99,
    setor: "Mercearia",
    corredor: "03",
    prateleira: "01",
    imagem: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500",

    porcao: "13 ml (1 colher de sopa)",
    calorias: "Aproximadamente 108 kcal",
    carboidratos: "0 g",
    acucares: "0 g",
    acucaresAdicionados: "0 g",
    proteinas: "0 g",
    gorduras: "12 g",
    gordurasSaturadas: "Aproximadamente 1,8 g",
    gordurasTrans: "0 g",
    fibras: "0 g",
    sodio: "0 mg",
    calcio: "Não informado",
    magnesio: "Não informado",
    fosforo: "Não informado",

    nutricao: "Valores demonstrativos de referência para óleo de soja.",
    alergenicos: "Verifique a declaração de alergênicos na embalagem."
},
  {
    nome: "Feijão Carioca 1kg",
    preco: 8.99,
    setor: "Mercearia",
    corredor: "02",
    prateleira: "02",
    imagem: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=500",

    porcao: "60 g (feijão cru)",
    calorias: "205 kcal",
    carboidratos: "36 g",
    acucares: "1 g",
    acucaresAdicionados: "0 g",
    proteinas: "12 g",
    gorduras: "1,2 g",
    gordurasSaturadas: "0,2 g",
    gordurasTrans: "0 g",
    fibras: "13 g",
    sodio: "5 mg",
    calcio: "45 mg",
    magnesio: "Não informado",
    fosforo: "Não informado",

    nutricao: "Valores demonstrativos de referência para feijão carioca cru.",
    alergenicos: "Verifique possíveis traços e contaminação cruzada na embalagem."
},
{
    nome: "Queijo Mussarela 300g",
    preco: 14.90,
    setor: "Laticínios",
    corredor: "03",
    prateleira: "02",
    imagem: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500",

    porcao: "30 g (1 fatia média)",
    calorias: "95 kcal",
    carboidratos: "1 g",
    acucares: "0 g",
    acucaresAdicionados: "0 g",
    proteinas: "7 g",
    gorduras: "7 g",
    gordurasSaturadas: "4,5 g",
    gordurasTrans: "0 g",
    fibras: "0 g",
    sodio: "180 mg",
    calcio: "200 mg",
    magnesio: "Não informado",
    fosforo: "Não informado",

    nutricao: "Valores demonstrativos aproximados para queijo mussarela.",
    alergenicos: "CONTÉM LEITE."
},
{
    nome: "Banana 1kg",
    preco: 6.99,
    setor: "Hortifruti",
    corredor: "04",
    prateleira: "01",
    imagem: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500",

    porcao: "100 g (1 banana pequena)",
    calorias: "89 kcal",
    carboidratos: "22,8 g",
    acucares: "12,2 g",
    acucaresAdicionados: "0 g",
    proteinas: "1,1 g",
    gorduras: "0,3 g",
    gordurasSaturadas: "0,1 g",
    gordurasTrans: "0 g",
    fibras: "2,6 g",
    sodio: "1 mg",
    calcio: "5 mg",
    magnesio: "27 mg",
    fosforo: "22 mg",

    nutricao: "Valores demonstrativos aproximados para banana crua.",
    alergenicos: "Não contém alergênicos comuns em sua composição. Verifique possíveis contaminações na embalagem."
},
{
    nome: "Maçã 1kg",
    preco: 9.99,
    setor: "Hortifruti",
    corredor: "04",
    prateleira: "02",
    imagem: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500",

    porcao: "100 g (1 maçã pequena)",
    calorias: "52 kcal",
    carboidratos: "13,8 g",
    acucares: "10,4 g",
    acucaresAdicionados: "0 g",
    proteinas: "0,3 g",
    gorduras: "0,2 g",
    gordurasSaturadas: "0 g",
    gordurasTrans: "0 g",
    fibras: "2,4 g",
    sodio: "1 mg",
    calcio: "6 mg",
    magnesio: "5 mg",
    fosforo: "11 mg",

    nutricao: "Valores demonstrativos aproximados para maçã crua com casca.",
    alergenicos: "Não contém alergênicos comuns em sua composição. Verifique possíveis contaminações na embalagem."
},
{
    nome: "Detergente 500ml",
    preco: 2.99,
    setor: "Limpeza",
    corredor: "05",
    prateleira: "01",
    imagem: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=500",
    nutricao: "Não se aplica.",
    alergenicos: "Consulte os componentes e avisos do rótulo."
},
{
    nome: "Água Sanitária 1L",
    preco: 4.49,
    setor: "Limpeza",
    corredor: "05",
    prateleira: "02",
    imagem: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500",
    nutricao: "Não se aplica.",
    alergenicos: "Consulte os componentes e avisos do rótulo."
},
{
    nome: "Suco de Laranja 1L",
    preco: 7.49,
    setor: "Bebidas",
    corredor: "06",
    prateleira: "01",
    imagem: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500",

    porcao: "200 ml",
    calorias: "90 kcal",
    carboidratos: "21 g",
    acucares: "18 g",
    acucaresAdicionados: "0 g",
    proteinas: "1,4 g",
    gorduras: "0,2 g",
    gordurasSaturadas: "0 g",
    gordurasTrans: "0 g",
    fibras: "0,5 g",
    sodio: "2 mg",
    calcio: "20 mg",
    magnesio: "18 mg",
    fosforo: "30 mg",

    nutricao: "Valores demonstrativos aproximados para suco de laranja integral.",
    alergenicos: "Verifique a declaração de alergênicos na embalagem."
},
{
    nome: "Refrigerante 2L",
    preco: 9.49,
    setor: "Bebidas",
    corredor: "06",
    prateleira: "02",
    imagem: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500",

    porcao: "200 ml",
    calorias: "84 kcal",
    carboidratos: "21 g",
    acucares: "21 g",
    acucaresAdicionados: "21 g",
    proteinas: "0 g",
    gorduras: "0 g",
    gordurasSaturadas: "0 g",
    gordurasTrans: "0 g",
    fibras: "0 g",
    sodio: "10 mg",
    calcio: "Não informado",
    magnesio: "Não informado",
    fosforo: "Não informado",

    nutricao: "Valores demonstrativos aproximados para refrigerante tradicional.",
    alergenicos: "Verifique a declaração de alergênicos na embalagem."
},







    

    
];

const listaProdutos = document.getElementById("listaProdutos");
const campoPesquisa = document.getElementById("campoPesquisa");
const filtroSetor = document.getElementById("filtroSetor");



function calcularPrecoPorMedida(produto) {
    const medida = produto.nome.match(/(\d+(?:[.,]\d+)?)\s*(kg|g|l|ml)\b/i);

    if (!medida) return "";

    let quantidade = parseFloat(medida[1].replace(",", "."));
    let unidade = medida[2].toLowerCase();

    if (unidade === "g" || unidade === "ml") {
        quantidade = quantidade / 1000;
    }

    const preco = produto.preco / quantidade;
    const unidadeFinal = unidade === "kg" || unidade === "g" ? "kg" : "L";

    return `R$ ${preco.toFixed(2).replace(".", ",")} / ${unidadeFinal}`;
}
function mostrarProdutos(lista) {
    listaProdutos.innerHTML = "";

    lista.forEach(produto => {
        listaProdutos.innerHTML += `
            <div class="produto" onclick="abrirProduto('${produto.nome}')">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>Setor: ${produto.setor}</p>
                <strong>R$ ${produto.preco.toFixed(2).replace(".", ",")}</strong>
                <p>${calcularPrecoPorMedida(produto)}</p>
                <button onclick="event.stopPropagation(); adicionarLista('${produto.nome}');">
    Adicionar à lista
</button>
            </div>
        `;
    });
}

mostrarProdutos(produtos);

function filtrarProdutos() {
    const pesquisa = campoPesquisa.value.toLowerCase();
    const setorSelecionado = filtroSetor.value;

    const filtrados = produtos.filter(produto => {
        const combinaNome = produto.nome.toLowerCase().includes(pesquisa);
        const combinaSetor = setorSelecionado === "" || produto.setor === setorSelecionado;

        return combinaNome && combinaSetor;
    });

    mostrarProdutos(filtrados);
}

campoPesquisa.addEventListener("input", filtrarProdutos);
filtroSetor.addEventListener("change", filtrarProdutos);

function abrirProduto(nome) {
    const produto = produtos.find(item => item.nome === nome);

    document.getElementById("nomeProduto").textContent = produto.nome;
    document.getElementById("categoriaProduto").textContent = produto.setor;
    document.getElementById("corredorProduto").textContent = "Corredor: " + produto.corredor;
    document.getElementById("prateleiraProduto").textContent = "Prateleira: " + produto.prateleira;
    document.getElementById("precoProduto").textContent =
        "R$ " + produto.preco.toFixed(2).replace(".", ",");
        document.getElementById("precoMedidaProduto").textContent =
    calcularPrecoPorMedida(produto);

    document.getElementById("imagemProduto").src = produto.imagem;
    document.getElementById("nutricaoProduto").textContent =
        "Informações nutricionais: " + produto.nutricao;

    document.getElementById("porcaoProduto").textContent = "Porção: " + produto.porcao;
    document.getElementById("caloriasProduto").textContent = "Calorias: " + produto.calorias;
    document.getElementById("carboidratosProduto").textContent = "Carboidratos: " + produto.carboidratos;
    document.getElementById("proteinasProduto").textContent = "Proteínas: " + produto.proteinas;
    document.getElementById("gordurasProduto").textContent = "Gorduras: " + produto.gorduras;
    document.getElementById("sodioProduto").textContent = "Sódio: " + produto.sodio;
    document.getElementById("acucaresProduto").textContent = "Açúcares totais: " + produto.acucares;
    document.getElementById("acucaresAdicionadosProduto").textContent = "Açúcares adicionados: " + produto.acucaresAdicionados;
    document.getElementById("gordurasSaturadasProduto").textContent = "Gorduras saturadas: " + produto.gordurasSaturadas;
    document.getElementById("gordurasTransProduto").textContent = "Gorduras trans: " + produto.gordurasTrans;
    document.getElementById("fibrasProduto").textContent = "Fibra alimentar: " + produto.fibras;
    document.getElementById("calcioProduto").textContent = "Cálcio: " + produto.calcio;
    document.getElementById("magnesioProduto").textContent = "Magnésio: " + produto.magnesio;
    document.getElementById("fosforoProduto").textContent = "Fósforo: " + produto.fosforo;
    document.getElementById("cafeinaProduto").textContent =
        "Cafeína: " + (produto.cafeina || "Não informado");

    document.getElementById("alergenicosProduto").textContent =
        "Alérgenos: " + produto.alergenicos;

    const blocoNutricao = document.getElementById("blocoNutricao");

    if (produto.setor === "Limpeza") {
        blocoNutricao.style.display = "none";
    } else {
        blocoNutricao.style.display = "block";
    }

    const sugestoes = {
        "Arroz 5kg": ["Feijão Carioca 1kg", "Óleo de soja 900ml"],
        "Feijão Carioca 1kg": ["Arroz 5kg", "Óleo de soja 900ml"],
        "Café 500g": ["Leite Integral 1L"],
        "Leite Integral 1L": ["Café 500g"],
        "Banana 1kg": ["Maçã 1kg"],
        "Maçã 1kg": ["Banana 1kg"]
    };

    const areaSugestoes = document.getElementById("sugestoesProdutos");
    const nomesSugeridos = sugestoes[produto.nome] || [];

    areaSugestoes.innerHTML = "";

    if (nomesSugeridos.length > 0) {
        areaSugestoes.innerHTML = "<h3>Você também pode gostar</h3>";

        nomesSugeridos.forEach(nomeSugerido => {
            const produtoSugerido = produtos.find(
                item => item.nome === nomeSugerido
            );

            if (produtoSugerido) {
                areaSugestoes.innerHTML += `
                    <div class="sugestao-produto">
                        <span>${produtoSugerido.nome}</span>
                        <button onclick="adicionarLista('${produtoSugerido.nome}')">
                            Adicionar à lista
                        </button>
                    </div>
                `;
            }
        });
    }

    document.getElementById("modalProduto").style.display = "flex";
}
function fecharModal() {
    document.getElementById("modalProduto").style.display = "none";
}

document.getElementById("modalProduto").addEventListener("click", function(event) {
    if (event.target === this) {
        fecharModal();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        fecharModal();
    }
});

let minhaLista = [];

function adicionarLista(nome) {
    const produto = produtos.find(item => item.nome === nome);

    if (!produto) {
        alert("Produto não encontrado!");
        return;
    }

   minhaLista.push({
    ...produto,
    coletado: false
});

    mostrarLista();

    alert(produto.nome + " foi adicionado ao carrinho!");
}

function mostrarLista() {
    const itensLista = document.getElementById("itensLista");

    itensLista.innerHTML = "";

    minhaLista.forEach((produto, indice) => {
        itensLista.innerHTML += `
            <div class="item-lista">
                <label>
                    <input
                        type="checkbox"
                        ${produto.coletado ? "checked" : ""}
                        onchange="marcarColetado(${indice})"
                    >
                    <span>${produto.nome}</span>
                </label>

                <strong>R$ ${produto.preco.toFixed(2).replace(".", ",")}</strong>

                <button onclick="removerLista(${indice})">Remover</button>
            </div>
        `;
    });

    const total = minhaLista.reduce((soma, produto) => {
        return soma + produto.preco;
    }, 0);

    document.getElementById("totalCompra").textContent =
        "Total: R$ " + total.toFixed(2).replace(".", ",");

    document.getElementById("contadorCarrinho").textContent =
        minhaLista.length;
}

function marcarColetado(indice) {
    minhaLista[indice].coletado = !minhaLista[indice].coletado;

    mostrarLista();
}

function removerLista(indice) {
    minhaLista.splice(indice, 1);

    mostrarLista();
}
function abrirCarrinho() {
    document.getElementById("modalCarrinho").style.display = "flex";
}

function fecharCarrinho() {
    document.getElementById("modalCarrinho").style.display = "none";
}

function filtrarCorredor(numero) {
    const produtosDoCorredor = produtos.filter(produto =>
        produto.corredor === numero
    );

    document.getElementById("campoPesquisa").value = "";
    document.getElementById("filtroSetor").value = "";

    mostrarProdutos(produtosDoCorredor);
}
function compararPrecos() {
    const produtosOrdenados = [...produtos].sort((a, b) => {
        return calcularPrecoPorMedida(a).localeCompare(
            calcularPrecoPorMedida(b),
            "pt-BR",
            { numeric: true }
        );
    });

    const resultado = document.getElementById("resultadoComparacao");

    resultado.innerHTML = produtosOrdenados.map(produto => `
        <div class="item-comparacao">
            <strong>${produto.nome}</strong>
            <span>${calcularPrecoPorMedida(produto)}</span>
        </div>
    `).join("");
}
function alternarTema() {
    document.body.classList.toggle("modo-escuro");

    const botao = document.getElementById("botaoTema");

    if (document.body.classList.contains("modo-escuro")) {
        botao.textContent = "☀️ Modo claro";
    } else {
        botao.textContent = "🌙 Modo escuro";
    }
}