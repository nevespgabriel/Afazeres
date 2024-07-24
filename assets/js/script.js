const botaoAdd = document.querySelector("button");
const containerInput = document.getElementById("containerInput");
const flexbox = document.getElementById("flexbox");
let botaoRemover

let input;
let apertado = false;



function adicionarTarefa(event){
    if (event.key === 'Enter' && input.value.trim() !== ''){
        const novaTarefa = document.createElement('div');
        novaTarefa.className = 'container tarefa';

        //Necessário, pois quando for pra riscar, se não criar isso vai riscar o botão tbm
        const textoTarefa = document.createElement('span'); 
        
        textoTarefa.textContent = "• " + input.value;
        novaTarefa.appendChild(textoTarefa);
        flexbox.appendChild(novaTarefa);
        novaTarefa.addEventListener("mouseover", function criarRemover(){
            if(!novaTarefa.querySelector("#remover")){
                botaoRemover = document.createElement("button");
                botaoRemover.id = "remover";
                botaoRemover.textContent = "X";
                novaTarefa.appendChild(botaoRemover);
                botaoRemover.addEventListener("click", function removerTarefa(){
                    flexbox.removeChild(novaTarefa);
                    botaoRemover = undefined;
                })
            }    
        })
        
        novaTarefa.addEventListener("mouseout", function reiniciarRemover(event) {
            if (botaoRemover && !novaTarefa.contains(event.relatedTarget)) { //: No evento mouseout, verificamos se o elemento que recebe o foco do mouse (relatedTarget) não é parte da tarefa (!novaTarefa.contains(event.relatedTarget)). Isso garante que o botão de remoção não desapareça se o mouse for movido para o botão.
                novaTarefa.removeChild(botaoRemover);
                botaoRemover = undefined;
            }
        });

        novaTarefa.addEventListener("click", function riscar(){
            textoTarefa.style.textDecoration = "line-through";
        })

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
