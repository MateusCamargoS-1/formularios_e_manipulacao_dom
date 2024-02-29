function printaResultado() {
  let areasDeInteresse = [];

  let radio = document.querySelector('input[type="radio"]:checked').value;
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estado").value;
  const curriculo = document.getElementById("curriculo").value;

  const checkedBoxes = document.querySelectorAll(
    'input[name="interesse"]:checked'
  );

  if (checkedBoxes.length < 1) {
    alert("É necessário marcar uma opção no mínimo.");
  }

  checkedBoxes.forEach(function (checkbox) {
    areasDeInteresse.push(checkbox.value);
  });

  const dados = {
    nome,
    estado,
    cidade,
    estado,
    areasDeInteresse,
    radio,
    curriculo
  }

  console.log(dados);
}

function limparDados() {
  document.getElementById("formulario").reset();
}
