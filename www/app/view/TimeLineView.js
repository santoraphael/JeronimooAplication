
function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}
includeJs("../controller/TimeLineController.js");


$(document).ready(function () {

    function CarregaUsuariosView() {
        alert('View');
        CarregaUsuariosController();
    }

    
})






