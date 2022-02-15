document.getElementById("numero").innerHTML=localStorage.length-1;


const seccion =document.querySelector(".seccion-post-coment");
const pi= document.querySelector(".contenedor-pie");
const btn= document.querySelector(".bton");
const borde= document.querySelector(".seccion-post-comments")
const se= document.querySelector(".seccion2")

const textarea= document.querySelector(".input");

textarea.addEventListener("click",()=>{
    seccion.classList.add("dd");
    pi.classList.add("pp")
    textarea.style.height="180px";
    textarea.style.width="100%";
    btn.classList.remove("bton");
    btn.classList.add("btn")
    borde.classList.add("bb")
    console.log("hila")
})




img= document.querySelector(".img").getAttribute("src");
productonombre=document.querySelector(".producto-nombre").innerHTML;
productoprecio=document.querySelector(".producto-precio").innerHTML;


cart =document.querySelector(".cart");

cart.addEventListener("click",(e)=>{

    e.preventDefault();
    cart.innerHTML="Agregado";
    cart.style.background="#125688";

    var data = {'img':img,'nombre': productonombre,'precio':productoprecio};
  

    localStorage.setItem("producto25",JSON.stringify(data));
 
})








let w= document.querySelector(".w");
let contenedorli=document.querySelector(".contenedor-li");
let contenedornav=document.querySelector(".contenedor-nav-ul");
let menuhamburguesa=document.querySelector(".menu-hamburguesa");
let presionado=false;
let presionado2=false;

w.addEventListener("click",(e)=>{
    e.preventDefault();
   
    if(presionado==false){
      contenedorli.style.position="relative";
      contenedorli.style.visibility="visible";
      contenedorli.style.opacity=1;
      contenedornav.style.height="58%";
      presionado=true;
    }else{
      contenedorli.style.position="absolute";
      contenedorli.style.visibility="hidden";
      contenedorli.style.opacity=0;
      contenedornav.style.height="40%";
      presionado=false;
    }
})


menuhamburguesa.addEventListener("click",(e)=>{
   e.preventDefault();
   if(presionado2==false){
      contenedornav.style.visibility="visible";
      contenedornav.style.opacity=1;
      presionado2=true;
    }else{
      contenedornav.style.visibility="hidden";
      contenedornav.style.opacity=0;
      presionado2=false;
    }
})