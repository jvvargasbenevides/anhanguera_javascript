function buscarCEP() {
    var entrada = document.getElementById('buscar_cep').value;

    var cep = document.getElementById('cep');
    var logradouro = document.getElementById('logradouro');
    var bairro = document.getElementById('bairro');
    var cidade = document.getElementById('cidade');
    var estado = document.getElementById('estado');

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open("GET", "https://viacep.com.br/ws/"+entrada+"/json/");
    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.response);
            
            cep.innerText = xhr.response.cep;
            logradouro.innerText = xhr.response.logradouro;
            bairro.innerText = xhr.response.bairro;
            cidade.innerText = xhr.response.localidade;
            estado.innerText = xhr.response.uf;
        }
    }
}