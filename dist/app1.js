$(document).ready(function(){

    $("section").html(
        '<div class="card" style="width: 18rem;"> \
            <div class="card-body">\
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content\
        </p></div></div>'
    );
    

    $("header").load("/componentes/header.html");
    $("footer").load("/componentes/footer.html");

});