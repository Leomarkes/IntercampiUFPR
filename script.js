$(document).ready(function () {
    //Campus
    var campus=["agrarias","artes","botanico","comunicacao","poli","prae","reboucas-c","reboucas-jn",
                "reitoria","sept","reboucas"]
    //INTERCAMPI 1
    var dados1=[
        ["06:45",campus[0]],
        ["06:50",campus[8]],
        ["06:55",campus[3]],
        ["07:10",campus[0]],
        ["07:20",campus[2]],
        ["07:30", campus[4]],
        ["07:35", campus[9]],
        ["07:45",campus[6]],
        ["08:00",campus[8]],
        ["08:05",campus[3]],
        ["08:10",campus[0]],
        ["08:15",campus[5]],
        ["08:20",campus[2]],
        ["08:30",campus[4]],
        ["08:35",campus[9]],
        ["09:00",campus[0],"c"],
        ["11:00",campus[0]],
        ["11:05",campus[5]],
        ["11:10",campus[8]],
        ["11:15",campus[7]],
        ["11:25",campus[2]],
        ["11:35",campus[4]],
        ["11:40",campus[9]],
        ["11:50",campus[6]],
        ["11:55",campus[8]],
        ["12:05",campus[0]],
        ["12:10",campus[3]],
        ["12:15",campus[5]],
        ["12:20",campus[8]],
        ["12:30",campus[0],"c"],
        ["12:45",campus[0]],
        ["12:50",campus[5]],
        ["12:55",campus[8]],
        ["13:00",campus[10]],
        ["13:10",campus[2]],
        ["13:20",campus[4]],
        ["13:25",campus[9]],
        ["13:35",campus[6]],
        ["13:50",campus[8]],
        ["13:55",campus[5]],
        ["14:00",campus[0],"c"],
        ["15:15",campus[0]],
        ["15:20",campus[5]],
        ["15:30",campus[8]],
        ["15:40",campus[2]],
        ["15:50",campus[4]],
        ["15:55",campus[9]],
        ["16:10",campus[8]],
        ["16:20",campus[0],"c"],
        ["17:50",campus[0]],
        ["18:00",campus[5]],
        ["18:10",campus[8]],
        ["18:30",campus[2]],
        ["18:35",campus[4]],
        ["18:40",campus[9]],
        ["18:50",campus[6]],
        ["18:55",campus[8]],
        ["19:00",campus[5]],
        ["19:05",campus[0],"c"]
    ];

    //INTERCAMPI 2
    var dados2=[
        ["06:50",campus[0]],
        ["06:55",campus[8]],
        ["07:05",campus[7]],
        ["07:20",campus[2]],
        ["07:35", campus[4]],
        ["07:40", campus[9]],
        ["07:50",campus[6]],
        ["08:00",campus[0],"c"],
        ["09:30",campus[0]],
        ["09:35",campus[5]],
        ["09:40",campus[8]],
        ["09:50",campus[3]],
        ["10:00",campus[0]],
        ["10:20",campus[2]],
        ["10:40",campus[4]],
        ["10:45",campus[9]],
        ["11:10",campus[0]],
        ["11:30",campus[2]],
        ["11:40",campus[4]],
        ["11:45",campus[9]],
        ["12:00",campus[8]],
        ["12:10",campus[0],"c"],
        ["12:40",campus[0]],
        ["12:45",campus[5]],
        ["12:50",campus[8]],
        ["13:10",campus[2]],
        ["13:15",campus[4]],
        ["13:20",campus[9]],
        ["13:45",campus[8]],
        ["13:50",campus[0],"c"],
        ["14:30",campus[0]],
        ["14:50",campus[2]],
        ["15:10",campus[4]],
        ["15:15",campus[9]],
        ["15:30",campus[2]],
        ["16:30",campus[8]],
        ["16:40",campus[3]],
        ["17:00",campus[0]],
        ["17:20",campus[2]],
        ["17:40",campus[4]],
        ["17:45",campus[9]],
        ["18:15",campus[8]],
        ["18:30",campus[7]],
        ["18:45",campus[0],"c"]
    ];
    
    //INTERCAMPI 4
    var dados4=[
        ["06:55",campus[0]],
        ["07:05",campus[8]],
        ["07:15",campus[1]],
        ["07:30",campus[8]],
        ["07:50", campus[2]],
        ["08:25",campus[4]],
        ["08:30",campus[9]],
        ["08:50",campus[0]],
        ["09:15",campus[1]],
        ["09:40",campus[8]],
        ["09:50",campus[3]],
        ["10:00",campus[0]],
        ["10:20",campus[2]],
        ["10:40",campus[4]],
        ["10:45",campus[9]],
        ["11:00",campus[0]],
        ["11:20",campus[2]],
        ["11:30",campus[4]],
        ["11:35",campus[9]],
        ["12:00",campus[8]],
        ["12:15",campus[1]],
        ["12:30",campus[8]],
        ["12:40",campus[0],"c"],
        ["13:05",campus[0]],
        ["13:15",campus[8]],
        ["13:30",campus[1]],
        ["13:45",campus[8]],
        ["14:00",campus[0],"c"],
        ["14:30",campus[0]],
        ["14:50",campus[2]],
        ["15:10",campus[4]],
        ["15:15",campus[9]],
        ["15:30",campus[2]],
        ["16:00",campus[1]],
        ["16:30",campus[8]],
        ["16:40",campus[3]],
        ["17:00",campus[0]],
        ["17:20",campus[2]],
        ["17:40",campus[4]],
        ["17:45",campus[9]],
        ["17:55",campus[10]],
        ["18:20",campus[8]],
        ["18:30",campus[3]],
        ["18:50",campus[0]],
        ["19:10",campus[8]],
        ["19:30",campus[1]],
        ["19:50",campus[8]],
        ["20:00",campus[0],"c"]
        ];

    //INTERCAMPI EXTRA
    var dadosExtra=[
        ["06:45",campus[8]],
        ["06:55",campus[2]],
        ["07:00",campus[4]],
        ["07:15",campus[8]],
        ["07:30",campus[0],"c"],
        ["11:45",campus[4]],
        ["11:50",campus[9]],
        ["12:50",campus[8],"c"],
        ["15:25",campus[8]],
        ["15:35",campus[2]],
        ["15:45",campus[4]],
        ["16:05",campus[8],"c"],
        ["18:05",campus[8]],
        ["18:25",campus[2]],
        ["18:30",campus[4]],
        ["18:50",campus[8],"c"],
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
        }else{
            $("#resultado").html('');
            $("#resultado").append("<h1>Intercampi 1</h1>");
            montar(dados1,origem,destino,cont,string);
            $("#resultado").append("<h1>Intercampi 2</h1>");
            montar(dados2,origem,destino,cont,string);
            $("#resultado").append("<h1>Intercampi 4</h1>");
            montar(dados4,origem,destino,cont,string);
            $("#resultado").append("<h1>Intercampi extra</h1>");
            montar(dadosExtra,origem,destino,cont,string);
        }
    });


});

function montar(dados,origem,destino,cont,string){
            dados.forEach(elemento => {
                if(cont==true){
                    string+='<p>'+elemento[1]+' - '+elemento[0]+'</p>';
                    //se o onibus recolhe (existe elemento[2]), ignora
                    if(elemento[2] !== void 0){
                        string='';
                        cont=false;
                    }
                    //Quando chega no destino, da append no itinerario, zera string
                    //zera cont e sai da funcao
                    if(destino==elemento[1]){
                        $("#resultado").append(string+"<br>");
                        string='';
                        cont=false;
                    }
                }
                //Se achar a origem, inicia itinerario
                if(origem==elemento[1] && elemento[2] === void 0){
                    string='';
                    string+='<p>'+elemento[1]+' - '+elemento[0]+'</p>';
                    cont=true;
                }
            });
}