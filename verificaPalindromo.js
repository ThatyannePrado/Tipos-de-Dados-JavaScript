function verificaPalindromo(entrada) {
    if (!entrada) return "String inexistente";
    return entrada.split("").reverse().join("").replace(/ /g,'') === entrada.replace(/ /g,'');
}

console.log(verificaPalindromo('ama ama'));