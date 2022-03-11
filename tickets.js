document.getElementById('ticket').addEventListener('click', showTicket);

function showTicket(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'price.json', true);

    xhr.onload = function(){
       if(this.status == 200){
           var price = JSON.parse(this.responseText);

           var output = '';

           output+='<ul class="answer">'+
           '<li class="li">ID:' + price.id + '</li>'+
           '<li class="li">Ticket name:' + price.ticket + '</li>'+
           '<li class="li">Price:' + price.cena +'</li>' +
           '</ul>';

           document.getElementById("response").innerHTML = output;
       }
    }

    xhr.send();
}
