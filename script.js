function mostrar(){
    let x = document.getElementById("colapsar");
    if (x.className == "colapse colapse-on"){
        x.className = "colapse colapse-off";
    }
    else{
        x.className = "colapse colapse-on";
    }
    console.log(x.className);
}