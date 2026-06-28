let nomes = [];

function adicionarNome() {
    let input = document.getElementById("nome");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Adicione um nome.");
        return;
    }

    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if (!regex.test(nome)) {
        alert("Formato inválido. Apenas letras.");
        input.focus();
        return;letras
    }

    nomes.push(nome);

    input.value = "";
    input.focus();

    mostrarNomes();
}

function organizarNomes() {
    nomes.sort((a, b) => a.localeCompare(b, "pt-BR"));
    mostrarNomes();
}

function mostrarNomes() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let nome of nomes) {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    }
}
