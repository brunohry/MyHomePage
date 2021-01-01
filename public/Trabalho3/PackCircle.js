

// --------------- Functions Zone ---------------


const ponto_aleatorio = (xmax, ymax)=>{
    return {'x': Math.floor(Math.random() * xmax), 'y': Math.floor(Math.random() * ymax)};
}

const raio_aleatorio = (x, y, xmax, ymax, rmin, rmax) =>{
    let raio = Math.floor(Math.random() * (rmax) + rmin);
    if(x + raio > xmax){
        raio = xmax - x;
    }
    if(y + raio > ymax){
        raio = ymax - y;
    }
    if( x - raio < 0){
        raio = x;
    }
    if(y - raio < 0 ){
        raio = y;
    }
    
    return raio
}

const distancia_lista = (p,l, wsize) =>{
    let minDistance = 0;
    if(l.length > 0){
        l.map(element => {
            let distancia = Math.floor(Math.sqrt( Math.pow(p['x'] - element['x'], 2) +  Math.pow(p['y'] - element['y'], 2)))
            if(distancia <=  element['r']){
                minDistance = -1;
            }else{
                distancia = distancia - element['r'];
                if( minDistance == 0 ||  distancia < minDistance){
                    minDistance = distancia
                }
            }
            
        });    
    }
    else{
        return wsize * 2;
    }
    return minDistance;
}

const getRandomColor = () => {

    var letters = '0123456789ABCDEF'.split('');
    var color = '#';

    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const desenha_circulo = (p)=>{
    var canvas = document.getElementById("canvas");
    var circle = document.createElement('div');
    canvas.appendChild(circle);

    circle.style.borderRadius = "50%";
    circle.style.top = (p['y'] - p['r'])+ "px";
    circle.style.left = (p['x'] - p['r']) + "px";
    circle.style.width = (p['r'] * 2 - 2) + "px";
    circle.style.height = (p['r'] * 2 - 2) + "px";
    circle.style.borderStyle = "solid"
    circle.style.borderWidth = "1px"
    circle.style.display = "block";
    circle.style.position = "absolute"
    circle.style.backgroundColor = getRandomColor();
}

const clean = () =>{
    pausepoll();
    var canvas = document.getElementById("canvas");
    isRunning = false;
    canvas.innerHTML = "";
    circles = [];
    writeCounter();
}
const writeCounter = () =>{
    var element = document.getElementById("counter");
    element.innerHTML = "<p> " +circles.length + " circulos desenhados </p>";
}

const draw = () => {
    p = ponto_aleatorio(wsize, wsize);
    d = distancia_lista(p, circles, wsize);
    if( d > 5){
        r = raio_aleatorio(p['x'], p['y'], wsize, wsize, 2 , d)
        p = { ...p, 'r': r};
        desenha_circulo(p);
        circles.push(p);
    }
    writeCounter()   
}

const poll = () => {
    if(!isRunning){
        isRunning = true;
        interval = setInterval(draw, 33);
    }
}

const pausepoll = () => {
    if(interval && isRunning){
        isRunning = false;
        clearInterval(interval);
    }
}
// --------------- Global Zone ---------------
let interval = null;
let circles = [];
let wsize = 700;
let isRunning = false
var canvas = document.getElementById("canvas");
canvas.style.borderRadius = "0%";
canvas.style.backgroundColor = "#D3D3D3";
canvas.style.width = wsize + "px";
canvas.style.height = wsize + "px";
canvas.style.margin = "0";
canvas.style.position = "relative"
document.getElementById("start").onclick = poll;
document.getElementById("pause").onclick = pausepoll;
document.getElementById("clean").onclick = clean;




