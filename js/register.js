function toggleRendaAnual() {
  const role = document.getElementById("role").value;
  const rendaAnualGroup = document.getElementById("renda-anual-group");
  const enderecoGroup = document.getElementById("endereco-group");
  const cnpjCpfLabel = document.getElementById("cnpj-cpf-label");
  const cnpjCpfInput = document.getElementById("cnpj-cpf");

  if (role === "Doador") {
    rendaAnualGroup.style.display = "none";
    enderecoGroup.style.display = "block";
    cnpjCpfLabel.innerText = "CNPJ ou CPF";
    cnpjCpfInput.placeholder = "CNPJ ou CPF";
    cnpjCpfInput.maxLength = 14;
  } else {
    rendaAnualGroup.style.display = "block";
    enderecoGroup.style.display = "none";
    cnpjCpfLabel.innerText = "CPF";
    cnpjCpfInput.placeholder = "CPF";
    cnpjCpfInput.maxLength = 11;
  }
}

function goBack() {
  window.location.href = "../login/index.html";
}

function redirect(event) {
  event.preventDefault();
  window.location.href = "../login/index.html";
}

function validateNumber(input) {
  input.value = input.value.replace(/\D/g, "");
}

window.onload = function () {
  toggleRendaAnual();
};
