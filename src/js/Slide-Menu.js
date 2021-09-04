
window.onload = function(e){ 
//***************************************  Start Menu in small window **********************************/
    let openElement = document.getElementById("open"),
        closeElement = document.getElementById("close"),
        menu = document.getElementById("menu");
    
    myFunction =(x,y,z)=> {
        x.addEventListener("click",()=>{
            x.classList.toggle("hide");
            y.classList.toggle("hide");
            if (z == "slide-in"){
                menu.classList.toggle("slide");
            }
            if (z == "slide-out"){
                menu.classList.toggle("slide");
            }
        })
    }
    myFunction(openElement,closeElement,"slide-in");
    myFunction(closeElement,openElement,"slide-out");
//***************************************  End Menu in small window **********************************/ 
}
