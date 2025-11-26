var xhr = new XMLHttpRequest();

var i = 0;

xhr.onreadystatechange = () => {
    var pronto = xhr.readyState;
    var status = xhr.status;
    var resposta = xhr.response;
    i++;

    console.log("#", i)
    console.log('Status da conexão:', pronto);
    console.log('Código da resposta:', status);
    console.log(resposta);
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
xhr.send();