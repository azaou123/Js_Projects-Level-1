
//Function that changes the color of the screen text depending on the value 
function color(){
    var nbr = eval (document.getElementById("result").innerText);
    if(nbr>0){
        document.getElementById("result").style.color = "rgb(63, 196, 63)";
    }
    else if (nbr<0){
        document.getElementById("result").style.color = "rgb(177, 55, 55)";
    }
    else {
        document.getElementById("result").style.color = "black";
    }
}


//Function increment() to increment the value on screen 
function increment() {
    var nbr = document.getElementById("result").innerText; 
    document.getElementById("result").innerHTML = eval(nbr)+1;
    color();
}

//Function increment() to decrement the value on screen 
function decrement() {
    var nbr = document.getElementById("result").innerText; 
    document.getElementById("result").innerHTML = eval(nbr)-1;
    color();
}

//Function increment() to reset the value on screen 
function reset() {
    var nbr = document.getElementById("result").innerHTML = 0;
    color();
}

