'use strict'

const listaProdutos = [
  {
    "id": 1,
    "nome": "Notebook Dell Inspiron 15 3000",
    "descricao": "Notebook com processador Intel Core i5, 8GB de RAM e 256GB de SSD",
    "preco": 3999.99,
    "imagem": "notebook-dell-inspiron-15-3000.png",
    "categoria": "Informática",
    "classificacao": 2
  },
  {
    "id": 2,
    "nome": "Monitor Samsung LED 23.8 polegadas",
    "descricao": "Monitor LED com resolução Full HD e tempo de resposta de 5ms",
    "preco": 799.99,
    "imagem": "monitor-samsung-led-23.8.png",
    "categoria": "Informática",
    "classificacao": 4
  },
  {
    "id": 3,
    "nome": "Mouse Gamer Logitech G Pro",
    "descricao": "Mouse com sensor HERO 25K, 6 botões programáveis e 16000 DPI",
    "preco": 299.99,
    "imagem": "mouse-gamer-logitech-g-pro.png",
    "categoria": "Informática",
    "classificacao": 2
  },
  {
    "id": 4,
    "nome": "Teclado Mecânico Redragon Kumara",
    "descricao": "Teclado mecânico com switches Outemu Blue e iluminação em LED",
    "preco": 219.99,
    "imagem": "teclado-mecanico-redragon-kumara.png",
    "categoria": "Informática",
    "classificacao": 5
  },
  {
    "id": 5,
    "nome": "Smartphone Samsung Galaxy S21",
    "descricao": "Smartphone com tela de 6.2 polegadas, processador Exynos 2100 e câmera de 64 MP",
    "preco": 5999.99,
    "imagem": "smartphone-samsung-galaxy-s21.png",
    "categoria": "Informática",
    "classificacao": 5
  },
  {
    "id": 6,
    "nome": "Tablet Apple iPad Pro",
    "descricao": "Tablet com tela de 11 polegadas, processador A12Z Bionic e câmera de 12 MP",
    "preco": 8499.99,
    "imagem": "tablet-apple-ipad-pro.png",
    "categoria": "Informática",
    "classificacao": 4
  },
  {
    "id": 7,
    "nome": "Caixa de Som JBL Flip 5",
    "descricao": "Caixa de som portátil com Bluetooth, resistente à água e bateria com duração de até 12 horas",
    "preco": 499.99,
    "imagem": "caixa-de-som-jbl-flip-5.png",
    "categoria": "Eletrônicos",
    "classificacao": 3
  },
  {
    "id": 8,
    "nome": "Fone de Ouvido Bluetooth JBL Tune 500BT",
    "descricao": "Fone de ouvido com conectividade Bluetooth, bateria com duração de até 16 horas e microfone integrado",
    "preco": 299.99,
    "imagem": "fone-de-ouvido-bluetooth-jbl-tune-500bt.png",
    "categoria": "Eletrônicos",
    "classificacao": 4
  },
  {
    "id": 9,
    "nome": "Smartwatch Samsung Galaxy Watch 3",
    "descricao": "Smartwatch com tela de 1.4 polegadas, GPS integrado e bateria com duração de até 56 horas",
    "preco": 2799.99,
    "imagem": "smartwatch-samsung-galaxy-watch-3.png",
    "categoria": "Eletrônicos",
    "classificacao": 4
  },
  {
    "id": 10,
    "nome": "Câmera Sony Alpha a7 III",
    "descricao": "Câmera mirrorless com sensor full-frame de 24.2 MP, estabilização de imagem de 5 eixos e gravação de vídeo em 4K",
    "preco": 12999.99,
    "imagem": "camera-sony-alpha-a7-iii.png",
    "categoria": "Eletrônicos",
    "classificacao": 4
  }
]

const containerProdutos = document.getElementById('listaProdutos')

function corrigirTexto(texto) {
  try {
    return decodeURIComponent(escape(texto))
  } catch {
    return texto
  }
}

function formatarPreco(preco) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

function criarEstrelas(classificacao) {
  let estrelas = ''

  for (let estrela = 1; estrela <= 5; estrela += 1) {
    estrelas += estrela <= classificacao ? '★' : '☆'
  }

  return estrelas
}

function criarCardProduto(produto) {
  const card = document.createElement('article')
  const categoria = corrigirTexto(produto.categoria)
  const nome = corrigirTexto(produto.nome)
  const descricao = corrigirTexto(produto.descricao)
  const precoParcelado = produto.preco / 10
  const imagemContainer = document.createElement('figure')
  const badge = document.createElement('p')
  const imagem = document.createElement('img')
  const corpo = document.createElement('section')
  const cabecalho = document.createElement('header')
  const avaliacao = document.createElement('p')
  const estrelas = document.createElement('p')
  const nota = document.createElement('p')
  const titulo = document.createElement('h3')
  const descricaoTexto = document.createElement('p')
  const preco = document.createElement('p')
  const parcelado = document.createElement('p')
  const rodape = document.createElement('footer')
  const frete = document.createElement('p')
  const botao = document.createElement('button')

  card.className = 'produto-card'

  imagemContainer.className = 'produto-card__imagem'
  badge.className = 'produto-card__badge'
  badge.textContent = categoria
  if (produto.id === 6) {
    imagem.classList.add('produto-card__img--blend')
  }
  imagem.src = `./img/${produto.imagem}`
  imagem.alt = nome
  imagemContainer.append(badge, imagem)

  corpo.className = 'produto-card__corpo'
  cabecalho.className = 'produto-card__cabecalho'

  avaliacao.className = 'produto-card__avaliacao'
  estrelas.className = 'produto-card__estrelas'
  estrelas.textContent = criarEstrelas(produto.classificacao)
  nota.textContent = `${produto.classificacao.toFixed(1)} de 5`
  avaliacao.append(estrelas, nota)

  titulo.textContent = nome
  cabecalho.append(avaliacao, titulo)

  descricaoTexto.className = 'produto-card__descricao'
  descricaoTexto.textContent = descricao

  preco.className = 'produto-card__preco'
  preco.textContent = formatarPreco(produto.preco)

  parcelado.className = 'produto-card__parcelado'
  parcelado.textContent = `ou 10x de ${formatarPreco(precoParcelado)} sem juros`

  rodape.className = 'produto-card__rodape'
  frete.className = 'produto-card__frete'
  frete.textContent = 'Frete rapido para todo o Brasil'
  botao.className = 'produto-card__botao'
  botao.type = 'button'
  botao.textContent = 'Comprar agora'
  rodape.append(frete, botao)

  corpo.append(cabecalho, descricaoTexto, preco, parcelado, rodape)
  card.append(imagemContainer, corpo)

  return card
}

function renderizarProdutos() {
  const cards = listaProdutos.map(criarCardProduto)
  containerProdutos.replaceChildren(...cards)
}

renderizarProdutos()
