
document.getElementById("numero").innerHTML=localStorage.length-1;


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




let precio=localStorage.getItem("preciototal")

document.querySelector(".preciototal").innerHTML=`$ ${precio}.00`;

if(precio==0){
  document.querySelector(".preciofee").innerHTML=`$0.00`;
  let final= parseFloat(precio);
document.querySelector(".preciofinal").innerHTML=`$ ${final}.00`;
}else{
  document.querySelector(".preciofee").innerHTML=`$ 10.00`;
  let final= parseFloat(precio)+10;
document.querySelector(".preciofinal").innerHTML=`$ ${final}.00`;
}


