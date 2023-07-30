function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


var loader = document.getElementById("preload")
window.addEventListener("load" , async function(){
    await sleep(3000);
    loader.style.background = "none"
    loader.addEventListener("transitionend" , function(){
        document.body.removeChild(loader)
    })
})
