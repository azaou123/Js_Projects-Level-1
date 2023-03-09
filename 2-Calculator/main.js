

//function show term to calculate caractere by caractere : number or operator 
function showCaracter (toShow){
    let exist = document.getElementById("result"); 
    exist.value += toShow;
}

//Fonction of cleaning to restart the operation
function restartOper(){
    document.getElementById("result").value = "";
}

//Function that will change the mode of the page 
function changeMode (){
    var col = document.body.style.backgroundColor;
    if (col == "black"){
        document.body.style.backgroundColor = "rgb(148, 220, 238)";
        document.body.style.color = "black";
        document.getElementsByClassName('input').classList.add("hov");
    }
    else {
        document.body.style.backgroundColor = "black" ;
        document.body.style.color = "white";
    }
}