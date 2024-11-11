window.addEventListener("load", initialLoad);
function initialLoad() {
  const data = JSON.parse(localStorage.getItem("mockProdutosPendentes"));
  const productsContainer = document.getElementById("products");
  let products = [];
  data.map((item) => {
    products += `<div class="product">
                        <h2>Doador: ${item.doador}</h2>
                        <h3>Validade: (${item.validade})</h3>
                        <img src="${item.img}" alt="product" />
                            <div class="product-info">
                                <h3>Produto: ${item.produto}</h3>
                                <p>Descrição: ${item.descricao}</p>
                                <p>Localização: (${item.localizacao})</p>
                            </div>
                            <div class="button-container">
                                <button onclick="reject(${item.id})" class="stock-button">Rejeitar</button>
                                <button onclick="accept(${item.id})" class="stock-button2">Aceitar</button>
                            </div>
                    </div>`;
  });
  productsContainer.innerHTML = products;
}

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

const reject = (id) => {
  const data = JSON.parse(localStorage.getItem("mockProdutosPendentes"));
  const newData = data.filter((item) => item.id !== id);
  localStorage.setItem("mockProdutosPendentes", JSON.stringify(newData));
  initialLoad();
};

const accept = (id) => {
  const catalog = JSON.parse(localStorage.getItem("mockdata"));
  const validation = JSON.parse(localStorage.getItem("mockProdutosPendentes"));

  const product = validation.find((item) => item.id === id);
  catalog.push(product);
  localStorage.setItem("mockdata", JSON.stringify(catalog));

  const newData = validation.filter((item) => item.id !== id);
  localStorage.setItem("mockProdutosPendentes", JSON.stringify(newData));
  initialLoad();
};
