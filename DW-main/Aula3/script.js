// const titulo = document.querySelector("h1");

// console.log(titulo);

// titulo.textContent = "Novo título";

// const div = document.querySelector("#container");

// div.innerHTML = "<p>Novo título</p>";
// console.log(div);

// const image = document.querySelector("img");

// image.setAttribute('src', '/Desenvolvimento-Web/DW-main/DW-main/Aula4/profile.webp');

// image.src = '/Desenvolvimento-Web/DW-main/DW-main/Aula4/profile.webp';

// image.style.width = "50px";
// image.style.height = "50px";

// const caixa = document.querySelector(".box");

// caixa.style.width = "50px";
// caixa.style.height = "50px";
// caixa.style.backgroundColor = "blue";

// // caixa.classList.add("oculto");
// // caixa.classList.add("oculto");

// const botao = document.querySelector("#btn");

// botao.addEventListener("click", () => {
//     caixa.classList.toggle("oculto");
// });

// const novoItem = document.createElement("li");

// novoItem.textContent = "Novo Item";

// document.querySelector("ul").appendChild(novoItem);

// novoItem.remove();

// localStorage.setItem("nome", "João");

// localStorage.removeItem("nome");

// localStorage.clear();

// const usuario = {nome: "Teste", idade: 18};
// localStorage.setItem('usuario', JSON.stringify(usuario));

// const recuperado = JSON.parse(localStorage.getItem('usuario'))

// console.log(recuperado)
// console.log(recuperado.nome)

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
const renderizarTarefas = () => {
    const list = document.getElementById("lista-tarefas");
    list.innerHTML = ""
    tarefas.forEach (t=> {
        const li = document.createElement("li");
        li.textContent = t
        lista.appendChild(li);
    })
}

const addTarefa = () => {
    const input = document.getElementById("input-tarefa");
    tarefas.push(input.value);
    input.value = "";
    renderizarTarefas();
}

document.getElementById("form-tarefa").onsubmit = (event) => {
    event.preventDefault();

    addTarefa();
};

const limparTarefas = () => {
    tarefas = [];
    localStorage.removeItem('tarefas');
}