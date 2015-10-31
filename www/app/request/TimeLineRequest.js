
$(document).ready(function () {

    function CarregaUsuariosRequest() {
        $.ajax({
            url: "http://localhost:44300/Home/ListarUsuarios",
            data: {

            },
            dataType: "json",
            type: 'POST',
            success: function () {

            },
            error: function () {
                //Notification();
            }
        });
    }
})







