var xhr = new XMLHttpRequest();
var doc = {
    "userId": 555,
    "title": "Enviando dados via AJAX",
    "body": "Ola mundo!"
}
var i = 0;

xhr.onreadystatechange = () => {
    var pronto = xhr.readyState;
    var status = xhr.status;
    var resposta = xhr.responseText;
    i++;

    console.log("#", i);
    
    if (pronto === 4) {
        console.log("Código da resposta:", status);
        console.log(resposta);
    }


}

xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
xhr.send(doc);