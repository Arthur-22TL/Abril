console.log("Esta mensagem aparecera no console, nao na pagina.");
function adicione_elemento(valor, nome_elemento = "p") {
    const pai = document.getElementById("conteudo");
    const novo_elemento = document.createElement(nome_elemento);
    novo_elemento.innerHTML = valor;
    pai.appendChild(novo_elemento);
}

adicione_elemento("Olá meu nome é Alan. Qual é o seu nome?");
adicione_elemento("Esta mensagem aparecerá na página, não no console");
adicione_elemento("Hala madrid", "h1");
adicione_elemento("Mengao", "h2");
adicione_elemento("Vamo inteeerr", "h3");
adicione_elemento("mata o tricolo", "h4");
adicione_elemento("Abu", "h5");
adicione_elemento("Tralalelo Tralala", "h6");

let nome = prompt("Qual é o seu nome?");
adicione_elemento(nome, "h1");
adicione_elemento("INTER", "p");
adicione_elemento("Bamo inteeee");
console.log("Its Alan Patrck");