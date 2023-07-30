var loader = document.getElementById("preload")
window.addEventListener("load" , function(){
    loader.style.background = "none"
    loader.addEventListener("transitionend" , function(){
        document.body.removeChild(loader)
    })
})

var reveals = document.querySelectorAll('.reveal')

window.addEventListener('scroll'  , reveal);

function reveal(){
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint){
            reveals[i].classlist.add('active')
        }
        else{
            reveals[i].classlist.remove('active')
        }
    }

}