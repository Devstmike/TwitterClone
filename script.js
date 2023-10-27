// const a = document.querySelector(".leftsidebar");
// let b = a.clientWidth;
// alert(b)

const right = document.querySelector(".mainContent > .column2");
window.onscroll = () => {
    if(window.scrollY > 865){
        right.classList.add("fixed")
        console.log("window = " + window.scrollY)
        console.log("added")
    }else{
        right.classList.remove("fixed")
        console.log("remove")
    } 

}
// 1265