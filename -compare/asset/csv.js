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

                console.log(id);
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
        console.log(id);
        document.getElementById(id).innerHTML = values[i+1][0];
    }
}

fillTable();