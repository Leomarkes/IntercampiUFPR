$(document).ready(function () {
    //INTERCAMPI 1
    var dados1=[
        ["06:45","agrarias"],
        ["06:50","reitoria"],
        ["06:55","comunicacao"],
        ["07:10","agrarias"],
        ["07:20","botanico"],
        ["07:30", "poli"],
        ["07:35", "sept"],
        ["07:45","reboucas-c"],
        ["08:00","reitoria"],
        ["08:05","comunicacao"],
        ["08:10","agrarias"],
        ["08:15","prae"],
        ["08:20","botanico"],
        ["08:30","poli"],
        ["08:35","sept"],
        ["09:00","agrarias","c"],
        ["11:00","agrarias"],
        ["11:05","prae"],
        ["11:10","reitoria"],
        ["11:15","reboucas-jn"],
        ["11:25","botanico"],
        ["11:35","poli"],
        ["11:40","sept"],
        ["11:50","reboucas-c"],
        ["11:55","reitoria"],
        ["12:05","agrarias"],
        ["12:10","comunicacao"],
        ["12:15","prae"],
        ["12:20","reitoria"],
        ["12:30","agrarias","c"]
    ];
    //cont - Vai controlar inicio e fim do itinerario
    //string - vai montar o itinerario
    var origem=null, destino=null, cont=false, string='';
    $("#origem").change(function () {
        origem = $(this).children("option:selected").val();
    });

    $("#destino").change(function () {
        destino = $(this).children("option:selected").val();
        if(destino==origem){
            $("#resultado").html('<div class="alert alert-warning" role="alert"> Destino e origem devem ser diferentes. </div>');
        }else if(origem==null){
                $("#resultado").html('');
        }else{
            $("#resultado").html('<h1>Intercampi1</h1>');
            dados1.forEach(elemento => {
                if(cont==true){
                    string+='<p>'+elemento[1]+' - '+elemento[0]+'</p>';
                    //Quando chega no destino, da append no itinerario, zera string
                    //zera cont e sai da funcao
                    if(destino==elemento[1]){
                        $("#resultado").append(string+"<hr style='height:20px'>");
                        string='';
                        cont=false;
                    }
                }
                //Se achar a orige, inicia itinerario
                if(origem==elemento[1]){
                    string+='<p>'+elemento[1]+' - '+elemento[0]+'</p>';
                    cont=true;
                }
            });
                
        }
    });


});