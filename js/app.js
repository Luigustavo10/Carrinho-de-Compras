let valorTotal = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';
function adicionar() {

let produtos = document.getElementById('produto').value;
let nomeProduto = produtos.split('-')[0];
let valorUnitario = produtos.split('$')[1];
let quantidade = document.getElementById('quantidade').value;


let valor = valorUnitario * quantidade ;


let listaProduto = document.getElementById('lista-produtos');
listaProduto.innerHTML = listaProduto.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
</section>`
valorTotal = valorTotal + valor
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = ` R$ ${valorTotal}`;
document.getElementById('quantidade').value = '0'




}

function limpar(){
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';

}