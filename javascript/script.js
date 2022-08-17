const inputText = document.querySelector(".input-text");
const mensagens = document.querySelector(".mensagens")


function btnEncriptar(){
    const textoEncriptado  = encriptar(inputText.value);   //vou ter a funcao que tem a parte de encriptar
    mensagens.value = textoEncriptado;
    mensagens.style.backgroundImage="none"

}  

function encriptar(stringEncriptada){
    let matrizCodigo = [["e" , "enter"]  ,["i" ,  "imes"] , ["a" , "ai"] , ["o" , "ober"], ["u" , "ufat"]]
    stringEncriptada =  stringEncriptada.toLowerCase(); // toLoowerCase transforma tudo em letra minuscula


    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){ // incluedes significa incluir todas as letras dentro da minha matriz
            stringEncriptada = stringEncriptada.replaceAll (matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}


    function btnDesencriptar(){
        const textoDesencriptado = desencriptar (inputText.value);
        mensagens.value = textoDesencriptado;
        mensagens.style.backgroundImage="none"

    }

    function desencriptar(stringDesencriptada){
        let matrizCodigo2 = [["enter" , "e"]  ,["imes" ,  "i"] , ["ai" , "a"] , ["ober" , "o"], ["ufat" , "u"]]
        stringDesencriptada =  stringDesencriptada.toLowerCase();

        for(let i = 0; i < matrizCodigo2.length; i++){
            if( stringDesencriptada.includes(matrizCodigo2[i][0])){ // incluedes significa incluir todas as letras dentro da minha matriz
                stringDesencriptada =  stringDesencriptada.replaceAll (matrizCodigo2[i][0], matrizCodigo2[i][1]);
            }
        }
        return  stringDesencriptada
    }

    