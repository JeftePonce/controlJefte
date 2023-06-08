$(document).ready(function(){

    /**$.getJSON("../datos/galeria.json", function(data){
        for(item in data){
            var galeria=`<div class=""><img class="d-block w-100" src="`+data[item].src+`" height="500px"><h5>`+data[item].nombre+`</h5></div>`;
            $("#galeria").append(galeria);
        }
    });**/

    $.getJSON("../datos/galeria.json", function(data) {

        for (item in data){

            var galeria = `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="`+data[item].src+`" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">`+data[item].nombre+`</h5>
                    <p class="card-text">`+data[item].descripcion+`</p>
                    <p class="card-text">`+data[item].autor+`</p>
                </div>
            </div>
            `;

            $("#galeria").append(galeria);

        }

    });


    $("header").load("/componentes/header.html");
    $("footer").load("/componentes/footer.html");

});