const character = document.getElementsByClassName("character")[0]; //retorna para a constante character declarada todos os elementos 
//que possuem o nome da classe "character"
const containerCharacter = document.getElementsByClassName("container-character")[0]; //retorna para a constante containerCharacter declarada todos os elementos
//que possuem o nome da classe "container-character"

const VELOCITY = 10; //definindo a constante velocidade como sendo 10

const SCREEN_WIDTH = screen.width; // está definindo a largura da tela como a total possivel
const SCREEN_HEIGHT = screen.height; // está definindo a altura da tela como a total possivel

let xPosition = 500; //atribui o valor 500 a variável xPosition, que representa a posição inical do boneco no eixo x
let yPosition = 300; //atribui o valor 300 a variável yPosition, que representa a posição inical do boneco no eixo y

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]; // declaração da variavel KeysAvaiable como array que determina as possíveis chaves
//que poderão ser chamadas em outras funções (quando a seta está para cima, para baixo, para a esquerda e para a direita)
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; // declaração da variavel KeysAvaiable como array que determina as possiveis direções
//que poderão ser chamadas em outras funções (virar para cima, para baixo, para a esquerda e para a direita)

window.addEventListener("keydown", (event) => { //função que vai dar vida para o boneco e dizer o que ele deve fazer
    //a depender das situações. O evento keydown é disparado quando uma tecla é pressionada

    const key  = event.key; //está definindo que a constante key tem uma propriedade de leitura e retornará
    //o valor da tecla pressionada pelo usuário

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => { //O .some verifica se existe algum 'true', ou seja, ela ira percurrer o array keysAvaiable
        //e verificar se a constante KeyPressedAvaiable existe, ou seja, é algum valor esperado
        return currentKey === key; //logo, se for verdade (existir) o currentKey vai ser a Key atual (a q foi teclada)
    })

    if(!keyPressedAvaiable) return; //aqui faz uma condição, ou seja, caso a tecla seja inválida, ou seja
    //uma tecla que não é esperada/não está no array keysAvaiable, não acontece nada 

    directions.forEach((direction) => { //ele percorre todos os valores que estão no array "directions"
        if(character.classList.contains(direction)) character.classList.remove(direction); //aqui o classList.contais checa se o elemento
        //(nesse caso a direção) contem a classe character, e se for verdade, vai remover a direção anterior, ou seja, vai fazer o bonequinho mudar de direção
    })


    if(key === "ArrowUp" && yPosition > 0){ //aqui faz uma condição, ou seja, caso a chave seja "ArrowUp" do array "keysAvaiable"
        //e o yPosition tem que ser maior que zero para impedir que passe da borda da tela em cima
        character.classList.add("turnUp"); //ele adiciona o caracter "turnUp" ao bonequinho
        yPosition -= VELOCITY; //fazendo ele diminuir 10 (definido la em cima como VELOCITY) do eixo y e consequentemente fazendo ele subir
    }

    if(key === "ArrowDown" && yPosition < SCREEN_HEIGHT - 240){ //aqui faz uma condição, ou seja, caso a chave seja "ArrowDown" do array "keysAvaiable"
        // e o yPosition tem que ser menos que o tamanho da tela menos 240 (altura do bonequinho)
        character.classList.add("turnDown"); //ele adiciona o caracter "turnDown" ao bonequinho
        yPosition += VELOCITY; //fazendo ele aumentar 10 (definido la em cima como VELOCITY) do eixo y e consequentemente fazendo ele descer
    }

    if(key === "ArrowLeft" && xPosition > 0){ //aqui faz uma condição, ou seja, caso a chave seja "ArrowLeft" do array "keysAvaiable"
        //e o xPosition tem que ser maior que zero para impedir que passe da borda da tela a esquerda
        character.classList.add("turnLeft"); //ele adiciona o caracter "turnLeft" ao bonequinho
        xPosition -= VELOCITY; //fazendo ele aumentar 10 (definido la em cima como VELOCITY) do eixo x e consequentemente fazendo ele ir para a esquerda
    }

    if(key === "ArrowRight" && xPosition < SCREEN_WIDTH - 80){ //aqui faz uma condição, ou seja, caso a chave seja "ArrowRight" do array "keysAvaiable"
        // e o xPosition tem que ser menos que o tamanho da tela menos 80 (largura do bonequinho)
        character.classList.add("turnRight"); //ele adiciona o caracter "turnRight" ao bonequinho
        xPosition += VELOCITY; //fazendo ele aumentar 10 (definido la em cima como VELOCITY) do eixo x e consequentemente fazendo ele ir para a direita
    }

    containerCharacter.style.top = `${yPosition}px`; //estilizando, ou seja, dizendo que o boneco vai estar a tantos px (yPosition) do topo da tela
    containerCharacter.style.left = `${xPosition}px`; //estilizando, ou seja, dizendo que o boneco vai estar a tantos px (xPosition) da esquerda da tela
});
