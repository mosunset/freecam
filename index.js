window.addEventListener('load',function(){
    setpadding();
});
function resizeWindow(){
    setpadding();
}
window.onresize = resizeWindow;

function setpadding(){
    let h = document.getElementById('video').clientHeight;
    h += 15
    document.getElementById('class').style.marginTop = h+'px';
}

function setclass(){
    document.getElementById('class').innerHTML = ""
}
var i = 0
const sin = setInterval(() => {
    i++
    document.getElementById('class').innerHTML += '<div class="es">'+i+'</div>'
    if(i >= 24){
        clearInterval(sin)
    }
}, 1000);
