const character = document.getElementsByClassName("character")[0]; //retorna para a constante character todos os elementos 
//que possuem o nome da classe "character"
const containerCharacter = document.getElementsByClassName("container-character")[0]; //retorna para a constante containerCharacter todos os elementos
//que possuem o nome da classe "container-character"

const VELOCITY = 10; //definindo a constante velocidade como sendo 10px

const SCREEN_WIDTH = screen.width; // está definindo a largura da tela como a total possivel
const SCREEN_HEIGHT = screen.height; // está definindo a altura da tela como a total possivel

let xPosition = 500; //define a posição do eixo x do boneco incialmente
let yPosition = 300; //define a posição do eixo y do boneco inicialmente

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]; // array que determina as possiveis chaves
//que poderão ser chamadas em outras funções (quando a seta está para cima, baixo, esquerda e direita)
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; // array que determina as possiveis direções
//que poderão ser chamadas em outras funções (virar para cima, para baixo, para a esquerda e para a direita)

window.addEventListener("keydown", (event) => { //função que vai dar vida para o boneco e dizer o que ele deve
    //a depender das situações. O evento keydown é disparado quando uma tecla é pressionada

    const key  = event.key; //está definindo que a constante key tem uma propriedade de leitura e retornará
    //o valor da tecla pressionada pelo usuário

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => { //essa função diz que se a tecla pressionada não for uma das esperadas
        //será retornado a "chave", ou seja, possição atual que está definida no array "KeysAvaiable"
        return currentKey === key;//logo, a chave atual será a chave que já estava antes
    })

    if(!keyPressedAvaiable) return; //aqui faz uma condição, ou seja, caso a tecla não seja invalida, ou seja
    //seja uma tecla que realmente é esperada, alguma ações podem acontecer

    directions.forEach((direction) => { //ele percorre todos os valores que estão no array "directions"
        if(character.classList.contains(direction)) character.classList.remove(direction);//aqui o classList.contais checa se o elemento
        //(nesse caso a direção) contem a classe character, e se for verdade, vai remover a direção anterior, ou seja, vai fazer o bonequinho mudar de direção
    })


    if(key === "ArrowUp" && yPosition > 0){ //aqui faz uma condição, ou seja, caso a chave seja "ArrowUp" do array "keysAvaiable"
        //e o yPosition tem que ser maior que zero para impedir que passe da borda da tela em cima
        character.classList.add("turnUp"); //ele adiciona o caracter "turnUp" ao bonequinho
        yPosition -= VELOCITY; //fazendo ele diminuir 10px (definido la em cima como VELOCITY) do eixo y e consequentemente fazendo ele subir
    }

    if(key === "ArrowDown"){ //aqui faz uma condição, ou seja, caso a chave seja "ArrowDown" do array "keysAvaiable"
        character.classList.add("turnDown"); //ele adiciona o caracter "turnDown" ao bonequinho
        yPosition += VELOCITY; //fazendo ele aumentar 10px (definido la em cima como VELOCITY) do eixo y e consequentemente fazendo ele descer
    }

    if(key === "ArrowLeft" && xPosition > 0){ //aqui faz uma condição, ou seja, caso a chave seja "ArrowLeft" do array "keysAvaiable"
        //e o xPosition tem que ser maior que zero para impedir que passe da borda da tela a esquerda
        character.classList.add("turnLeft"); //ele adiciona o caracter "turnLeft" ao bonequinho
        xPosition -= VELOCITY; //fazendo ele aumentar 10px (definido la em cima como VELOCITY) do eixo x e consequentemente fazendo ele ir para a esquerda
    }

    if(key === "ArrowRight"){ //aqui faz uma condição, ou seja, caso a chave seja "ArrowRight" do array "keysAvaiable"
        character.classList.add("turnRight"); //ele adiciona o caracter "turnRight" ao bonequinho
        xPosition += VELOCITY; //fazendo ele aumentar 10px (definido la em cima como VELOCITY) do eixo x e consequentemente fazendo ele ir para a direita
    }

    containerCharacter.style.top = `${yPosition}px`; //estilizando, ou seja, dizendo que o boneco vai estar a tantos px (yPosition) do topo da tela
    containerCharacter.style.left = `${xPosition}px`; //estilizando, ou seja, dizendo que o boneco vai estar a tantos px (xPosition) da esquerda da tela
});
