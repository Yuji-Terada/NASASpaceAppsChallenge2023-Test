function getCSV(){
    var req = new XMLHttpRequest();
    req.open("get", "./planet-data.csv", false);
    // 第3引数をfalseにして非同期→同期に設定しておく
    req.send(null);

    return convertCSVtoArray(req.responseText);
}

var values = [];

function convertCSVtoArray(str){
    var result = [];
    var tmp = str.split("\n");
    for(var i=0; i<tmp.length; i++){
        result.push(tmp[i].split(","));
    }
    return result;
}

values = getCSV();

function fillTable(){
    for(var i=0; i<20; i++){
        for(var k=0; k<2; k++){
            for(var j=0; j<8; j++){
                var id = "table-1-";
                id += String(i+1);
                id += "-";
                id += String(k+1);
                id += "-";
                id += String(j+1);

                if(k+1 == 1){
                    document.getElementById(id).innerHTML = values[0][j+1];
                }
                else{
                    document.getElementById(id).innerHTML = values[i+1][j+1];
                }
            }
        }
        id = "table-1-";
        id += String(i+1);
        id += "-caption";
        document.getElementById(id).innerHTML = values[i+1][0];
    }
}

fillTable();

/*==============================*/

$("#solar-system").click(function(){
    $("#table1").addClass("view");
    $("#table2").removeClass("view");
    $("#solar-system").addClass("view");
    $("#compare").removeClass("view");
})

$("#compare").click(function(){
    $("#table1").removeClass("view");
    $("#table2").addClass("view");
    $("#solar-system").removeClass("view");
    $("#compare").addClass("view");
})


/*==============================*/

//フォームからの値取得
function updateTable() {
    const planet1_form = document.planetChoice.planet1;
    const planet2_form = document.planetChoice.planet2;

    var planet1 = planet1_form.value;
    var planet2 = planet2_form.value;

    if(planet1 == planet2){
        alert("Chosen Planets Are the Same.\nPlease Fill it again");
        return;
    }

    document.getElementById("table-2-0-1").innerHTML = values[0][planet1];
    document.getElementById("table-2-0-2").innerHTML = values[0][planet2];

    for(var i=0; i<18; i++){
        id = "table-2-"
        id += String(i+1);
        id += "-0";
        
        document.getElementById(id).innerHTML = values[i+1][0];
    }

    for(var i=0; i<18; i++){
        id = "table-2-"
        id += String(i+1);
        id += "-1";
        
        document.getElementById(id).innerHTML = values[i+1][planet1];
    }

    for(var i=0; i<18; i++){
        id = "table-2-"
        id += String(i+1);
        id += "-2";
        
        document.getElementById(id).innerHTML = values[i+1][planet2];
    }
    
    for(var i=0; i<18; i++){
        id = "table-2-"
        id += String(i+1);
        id += "-3";

        var n = 2;
        document.getElementById(id).innerHTML = Math.floor(Math.abs(values[i+1][planet1]-values[i+1][planet2])*Math.pow(10, n))/Math.pow(10, n);
    }
}

updateTable();