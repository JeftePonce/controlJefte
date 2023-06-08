$(document).ready(function(){

    

    $.getJSON("../datos/carusel.json", function(data){
        for(item in data){
            if(item==0)activo=" active"; else activo="";
            var carusel=`<div class="carousel-item`+activo+`"><img class="d-block w-100" src="`+data[item].src+`" alt="ejemplo" height="500px" ><h5>`+data[item].titulo+`</h5></div>`;
            $(".carousel-inner").append(carusel);
        }
    });


    $("header").load("/componentes/header.html");
    $("footer").load("/componentes/footer.html");

});

    
