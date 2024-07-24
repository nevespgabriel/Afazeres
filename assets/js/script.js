const botaoAdd = document.querySelector("button");
const containerInput = document.getElementById("containerInput");
const flexbox = document.getElementById("flexbox");

let input;
let apertado = false;

function adicionarTarefa(event){
    if (event.key === 'Enter' && input.value.trim() !== ''){
        const novaTarefa = document.createElement('div');
        novaTarefa.className = 'container tarefa';
        novaTarefa.textContent = input.value;
        flexbox.appendChild(novaTarefa);
        input.value = '';
        input.style.display = 'none';
        apertado = false;
        botaoAdd.classList.remove("pressionado");
    }
}

//Aparecer input quando clicar no botão add
botaoAdd.addEventListener("click", function(){
    if(!apertado){
        botaoAdd.classList.add("pressionado");
        input = document.createElement('input');
        input.type = "text";
        input.placeholder = "Digite uma nova tarefa";
        containerInput.appendChild(input);
        apertado = true;
        input.focus();
        //Adicionar item digitado na lista e fazer sumir o input depois
        input.addEventListener('keypress', adicionarTarefa);
    }
})




