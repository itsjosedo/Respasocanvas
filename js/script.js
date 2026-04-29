

var canvases = document.getElementsByClassName("grupo1") 

for(var i = 0; i<canvases.length; i++){
    const canvas = canvases[i];
    const ctx = canvas.getContext("2d");

    /** 
    //Forma 1 de dibujar en cada uno
    if(ctx){

        //Se cambia el color segun el canvas
        ctx.fillStyle = ["red", "blue", "green", "orange"][i];

        //Dibuja el rectangulo dentro de cada canvas
        ctx.fillRect(10,10,100,50);

        //dibuja texto
        ctx.fillStyle = "black";
        ctx.fillText("Canvas" + i, 40, 100);
    }else{
         alert("Canvas: "+i+", no tiene contexto")
    }
    */
    //Forma2
    if(i === 0 ) {ctx.fillRect(19,20,50,50);}
    if(i === 1) {ctx.fillStyle = ("green"); ctx.fillRect(40,40,50,60);}
    if(i === 2) {ctx.strokeStyle = "pink"; ctx.lineWidth = 3; ctx.strokeRect(0,0, canvas.width, canvas.height); ctx.fillStyle = "pink"; ctx.fillText("Hola", 100, 100);}
    if(i === 3) {ctx.beginPath(); ctx.arc(80, 50, 30, 0, Math.PI * 2); ctx.fillStyle = "red";ctx.fill();}
}