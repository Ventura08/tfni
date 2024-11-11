const form = document.getElementById("add-form");
const mockdata = [
  {
    id: 1,
    img: "../public/imgs/menu/naturais.png",
    doador: "Estevao Boaventura",
    validade: "12/12/2024",
    produto: "Pizza",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 2,
    img: "../public/imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 3,
    img: "../public/imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 4,
    img: "../public/imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 5,
    img: "../public/imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 6,
    img: "../public/imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 7,
    img: "../public/imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 8,
    img: "../public/imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 9,
    img: "../public/imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 10,
    img: "../public/imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 11,
    img: "../public/imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 12,
    img: "../public/imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 13,
    img: "../public/imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
  {
    id: 14,
    img: "../public/imgs/menu/naturais.png",
    doador: "Lucas Lopes",
    validade: "20/11/2024",
    produto: "Hamburguer",
    categoria: "Lanches",
    descricao: "X-Tudo",
    localizacao: "R. Santo Ângelo, 79 - Parque São Jorge",
  },
];

let currentProduct = null;

function initialLoad() {
  if (!localStorage.getItem("mockdata")) {
    localStorage.setItem("mockdata", JSON.stringify(mockdata));
  }

  if (!localStorage.getItem("mockProdutosPendentes")) {
    localStorage.setItem("mockProdutosPendentes", JSON.stringify([]));
  }

  const productsContainer = document.getElementById("products");
  let productsHTML = "";

  const data = JSON.parse(localStorage.getItem("mockdata"));
  data.forEach((product) => {
    productsHTML += `
          <div class="product" onclick="openModal2(${product.id})">
            <img src="${product.img}" alt="product" />
            <div class="product-info">
              <h2>${product.produto}</h2>
              <p>${product.descricao}</p>
              <p>${product.doador}</p>
              <p>${product.validade}</p>
              <p>${product.categoria}</p>
              <p>${product.localizacao}</p>
            </div>
          </div>
        `;
  });

  productsContainer.innerHTML = productsHTML;

  const recommendedContainer = document.getElementById("recommended-items");
  let recommendedHTML = "";
  const recommendedData = data
    .slice()
    .sort((a, b) => new Date(a.validade) - new Date(b.validade));

  recommendedData.forEach((product) => {
    recommendedHTML += `
          <div class="recommended-item" onclick="openModal2(${product.id})">
            <img src="${product.img}" alt="product" />
            <div class="product-info">
              <h2>${product.produto}</h2>
              <p>${product.descricao}</p>
              <p>${product.validade}</p>
            </div>
          </div>
        `;
  });

  recommendedContainer.innerHTML = recommendedHTML;
}

window.addEventListener("load", initialLoad);

function filterList() {
  const input = document.querySelector(".search-bar input");
  const filter = input.value.toLowerCase();
  const items = document.querySelectorAll(".category-item, .recommended-item");
  items.forEach((item) => {
    const text = item.querySelector("p").textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

function openModal() {
  const modal = document.getElementById("adicionar-modal");
  modal.style.display = "block";
}

function openModal2(id) {
  const modal2 = document.getElementById("retirar-item-modal");
  const modalBodyRetirada = document.getElementById("modal-body-retirada");

  const data = JSON.parse(localStorage.getItem("mockdata"));
  currentProduct = data.find((product) => product.id === id);

  modalBodyRetirada.innerHTML = `
            <div class="product-section2">
                    <div class="product-image2">
                        <div class="recommended-item">
                            <img src="${currentProduct.img}" alt="product" style="object-fit: contain; box-shadow: none;" />
                            <div class="product-info">
                                <h2>${currentProduct.produto}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="product-info">
                    <div class="input-group">
                        <label for="name">Doador</label>
                        <h3>${currentProduct.doador}</h3>
                    </div>
                    <div class="input-group">
                        <label for="validade">Validade</label>
                        <h3>${currentProduct.validade}</h3>
                    </div>
                    <div class="input-group">
                        <label for="categoria">Categoria</label>
                        <h3>${currentProduct.categoria}</h3>
                    </div>
                    <div class="input-group">
                        <label for="descricao">Descrição</label>
                        <h3>${currentProduct.descricao}</h3>
                    </div>
                    <div class="input-group">
                        <label for="localizacao">Endereço</label>
                        <h3>${currentProduct.localizacao}</h3>
                    </div>
                </div>
    `;
  modal2.style.display = "block";
}

function closeModal() {
  const modal1 = document.getElementById("adicionar-modal");
  const modal2 = document.getElementById("retirar-item-modal");

  if (modal1) {
    modal1.style.display = "none";
  }

  if (modal2) {
    modal2.style.display = "none";
  }
}

function post() {
  localStorage.setItem(
    "mockdata",
    JSON.stringify(
      JSON.parse(localStorage.getItem("mockdata")).filter(
        (product) => product.id !== currentProduct.id
      )
    )
  );
  initialLoad();
  closeModal();
}

window.onclick = function (event) {
  const modal = document.getElementById("adicionar-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = JSON.parse(localStorage.getItem("mockProdutosPendentes"));
  const newProduct = {
    id: data.length + 1,
    validade: form.validade.value,
    categoria: form.categoria.value,
    descricao: form.descricao.value,
    img: "../public/imgs/img-placeholder.webp",
    localizacao: form.localizacao.value,
    produto: form.produto.value,
    doador: form.doador.value,
  };

  data.push(newProduct);
  localStorage.setItem("mockProdutosPendentes", JSON.stringify(data));
  initialLoad();
  closeModal();
});

function increase() {
  let stockCountElement = document.getElementById("stock-count");
  let currentStock = parseInt(stockCountElement.textContent, 10);
  stockCountElement.textContent = currentStock + 1;
}

function decrease() {
  let stockCountElement = document.getElementById("stock-count");
  let currentStock = parseInt(stockCountElement.textContent, 10);
  if (currentStock > 1) {
    stockCountElement.textContent = currentStock - 1;
  }
}
