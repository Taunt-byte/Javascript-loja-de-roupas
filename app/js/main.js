// Array de produtos
const produtos = [
    {
      nome: 'Calça Jeans',
      descricao: 'Calça jeans de corte reto',
      disponiveis: 10
    },
    {
      nome: 'Vestido Floral',
      descricao: 'Vestido floral com mangas compridas',
      disponiveis: 5
    },
    {
      nome: 'Sapatos de Salto Alto',
      descricao: 'Sapatos de salto alto pretos',
      disponiveis: 8
    },
    {
      nome: 'Camisa Polo',
      descricao: 'Camisa polo de algodão na cor azul',
      disponiveis: 15
    }
  ];
  
  // Função para gerar os elementos HTML dos produtos
  function gerarProdutos() {
    const container = document.getElementById('product-container');
    const row = document.createElement('div');
    row.className = 'row';
  
    produtos.forEach((produto) => {
      const col = document.createElement('div');
      col.className = 'col';
      const elemento = document.createElement('div');
      elemento.className = 'elemento';
  
      const titulo = document.createElement('h2');
      titulo.textContent = produto.nome;
      const subtitulo = document.createElement('h3');
      subtitulo.textContent = produto.descricao;
      const form = document.createElement('form');
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = 'Comprar';
      const disponiveis = document.createElement('p');
      disponiveis.textContent = produto.disponiveis + ' produtos disponíveis';
  
      form.appendChild(button);
      elemento.appendChild(titulo);
      elemento.appendChild(subtitulo);
      elemento.appendChild(form);
      elemento.appendChild(disponiveis);
      col.appendChild(elemento);
      row.appendChild(col);
    });
  
    container.appendChild(row);
  }
  
  // Chamar a função para gerar os produtos ao carregar a página
  window.addEventListener('load', gerarProdutos);
  