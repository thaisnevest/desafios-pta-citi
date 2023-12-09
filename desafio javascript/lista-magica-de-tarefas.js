// função para criar objetos de tarefa
function Tarefa (nome, status){
    this.nome = nome;
    this.status = status;
}

var tarefa1 = new Tarefa ("Responder Bea no Discord", "Não concluída")
var tarefa2 = new Tarefa ("Sofrer pelo Santa Cruz", "Concluída")
var tarefa3 = new Tarefa ("Mudar algo no boilerplaite pela 1782683729 vez", "Não concluída")

let listaDeTarefas = [tarefa1, tarefa2, tarefa3]

// função para exibir a lista de tarefas no console
function exibirListaDeTarefas(lista) {
    console.log('Lista de Tarefas:');
    for (let i = 0; i < lista.length; i++) {
        const tarefa = lista[i];
        console.log(`${i + 1}. ${tarefa.nome} - ${tarefa.status}`);
  }
}

// chamando a função
exibirListaDeTarefas(listaDeTarefas);