let cep = document.querySelector('#cep');
let search = document.querySelector('#search');

let street = document.querySelector('#street');
let district = document.querySelector('#district');
let city = document.querySelector('#city');
let state = document.querySelector('#state');

// Adição do evento OnClick no input botão
// para executar a função de buscar os dados
search.addEventListener('click', searchAdress);

// Função que faz a ligação com a API do ViaCEP e pega os dados.
async function searchAdress() {
    let ViaCepUrl = `https://viacep.com.br/ws/${cep.value}/json/`;

    //Valida se o número de caracteres digitado é 
    // igual a 8(tamanho padrão de CEP). Se não da um alert de erro.
    if ((cep.value).length != 8) {
        alert("CEP INVÁLIDO: O mesmo deve conter 8 dígitos, não pode ter espaço entre os números e não deve conter caractere especial.");
        street.value = "";
        district.value = "";
        city.value = "";
        state.value = "";
    }

    //Faz o link com a API.
    const response = await fetch(ViaCepUrl);

    //Transforma o JSON retornado da API em um Objeto JS.
    const responseObject = await response.json();

    //Verifica se o Objeto transformado não é válido, ou seja, tenha retornado
    //com erro. Se retornar um Objeto válido, ele atualiza os campos com os dados
    //retornados da API.
    if (responseObject.erro) {
        alert("CEP INVÁLIDO. Favor tente novamente.");
        street.value = "";
        district.value = "";
        city.value = "";
        state.value = "";
    } else {
        street.value = responseObject.logradouro;
        district.value = responseObject.bairro;
        city.value = responseObject.localidade;
        state.value = responseObject.uf; 
    }
     
}


