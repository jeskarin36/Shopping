let seccion2 = document.querySelector(".seccion-slider")// terget class or id
 // hear is  scroll logic
window.addEventListener('scroll', () => {
    window.scrollY >2300 ? seccion2.classList.add("seccion-slider-fixed") : seccion2.classList.remove("seccion-slider-fixed")
    
    window.scrollY >4620 ? seccion2.classList.add("seccion-slider-absolute") : seccion2.classList.remove("seccion-slider-absolute")

   
})



seccionkids= document.querySelector(".seccion-contenedor-galeria-contenedor-kids");
 seccionlaptos= document.querySelector(".seccion-contenedor-galeria-contenedor-laptos");
 seccionmens= document.querySelector(".seccion-contenedor-galeria-contenedor-mens");
 seccionmobiles= document.querySelector(".seccion-contenedor-galeria-contenedor-mobiles");
 seccionsmartwacht= document.querySelector(".seccion-contenedor-galeria-contenedor-smartwatc");

 seccionall=document.querySelector(".seccion-contenedor-galeria-contenedor-n1");
 
 


 kids= document.querySelector(".kids");
 kids.addEventListener("click",(e)=>{
     e.preventDefault();
     seccionkids.style.opacity=1;
     seccionkids.style.visibility= "visible";


     seccionlaptos.style.opacity=0;
     seccionlaptos.style.visibility= "hidden";

     seccionmens.style.opacity=0;
     seccionmens.style.visibility= "hidden";

     seccionmobiles.style.opacity=0;
     seccionmobiles.style.visibility= "hidden";

     seccionsmartwacht.style.opacity=0;
     seccionsmartwacht.style.visibility= "hidden";

     laptos.style.background="none";
     kids.style.background="#125688";
     mens.style.background="none";
     smartwach.style.background="none";
     mobiles.style.background="none";

     seccionkids.style.animation="up .8s 1";
 
     setInterval(()=>{
         seccionkids.style.animation="none";
     },2000)
 
 })



 laptos= document.querySelector(".laptos");
 laptos.addEventListener("click",(e)=>{
     e.preventDefault();
     seccionlaptos.style.opacity=1;
     seccionlaptos.style.visibility= "visible";


     seccionkids.style.opacity=0;
     seccionkids.style.visibility= "hidden";

     seccionmens.style.opacity=0;
     seccionmens.style.visibility= "hidden";

     seccionmobiles.style.opacity=0;
     seccionmobiles.style.visibility= "hidden";

     seccionsmartwacht.style.opacity=0;
     seccionsmartwacht.style.visibility= "hidden";

    laptos.style.background="#125688";
    kids.style.background="none";
    mens.style.background="none";
    smartwach.style.background="none";
    mobiles.style.background="none";

    seccionlaptos.style.animation="up .8s";
 
    setInterval(()=>{
        seccionlaptos.style.animation="none";
    },1000)

 })



 mens= document.querySelector(".mens");
 mens.addEventListener("click",(e)=>{
     e.preventDefault();
     seccionmens.style.opacity=1;
     seccionmens.style.visibility= "visible";


     seccionkids.style.opacity=0;
     seccionkids.style.visibility= "hidden";

     seccionlaptos.style.opacity=0;
     seccionlaptos.style.visibility= "hidden";

     seccionmobiles.style.opacity=0;
     seccionmobiles.style.visibility= "hidden";

     seccionsmartwacht.style.opacity=0;
     seccionsmartwacht.style.visibility= "hidden";

     laptos.style.background="none";
     kids.style.background="none";
     mens.style.background="#125688";
     smartwach.style.background="none";
     mobiles.style.background="none";

     seccionmens.style.animation="up .8s";
 
     setInterval(()=>{
         seccionmens.style.animation="none";
     },1000)
 })



 mobiles= document.querySelector(".mobiles");
 mobiles.addEventListener("click",(e)=>{
     e.preventDefault();
     seccionmobiles.style.opacity=1;
     seccionmobiles.style.visibility= "visible";



     seccionkids.style.opacity=0;
     seccionkids.style.visibility= "hidden";

     seccionmens.style.opacity=0;
     seccionmens.style.visibility= "hidden";

     seccionlaptos.style.opacity=0;
     seccionlaptos.style.visibility= "hidden";

     seccionsmartwacht.style.opacity=0;
     seccionsmartwacht.style.visibility= "hidden";

     laptos.style.background="none";
     kids.style.background="none";
     mens.style.background="none";
     smartwach.style.background="none";
     mobiles.style.background="#125688";


     seccionmobiles.style.animation="up .8s 1";
 
     setInterval(()=>{
         seccionmobiles.style.animation="none";
     },2000)
 })




 smartwach= document.querySelector(".smartwatch");
 smartwach.addEventListener("click",(e)=>{
     e.preventDefault();
     seccionsmartwacht.style.opacity=1;
     seccionsmartwacht.style.visibility= "visible";


     seccionkids.style.opacity=0;
     seccionkids.style.visibility= "hidden";

     seccionmens.style.opacity=0;
     seccionmens.style.visibility= "hidden";

     seccionmobiles.style.opacity=0;
     seccionmobiles.style.visibility= "hidden";

     seccionlaptos.style.opacity=0;
     seccionlaptos.style.visibility= "hidden";

     laptos.style.background="none";
     kids.style.background="none";
     mens.style.background="none";
     smartwach.style.background="#125688";
     mobiles.style.background="none";

     seccionsmartwacht.style.animation="up .8s 1";
 
     setInterval(()=>{
         seccionsmartwacht.style.animation="none";
     },2000)
 })
 





  let array=["url('./imagen/muebles-multifuncionales-para-el-hogar-1170x740.jpg')","url('./imagen/58-589461_office-wallpaper-hd-dark.jpg')",
  "url('./imagen/840_560.jpg')","url('./imagen/Kasha-mockup5963.jpg')","url('./imagen/xqCx7gsT4NPBnnUdsX9x5i-1200-80.jpg')"];

  let titulos=["Todo para tu hogar", "Todo para tu Estudio", "Todo para tu Pc","Todo para sentirte bien","Todo para trabajar"];

 seccionmenu=document.querySelector(".seccion-menu-bloque-2");
 titu=document.querySelector("#titulo");
 seccionmenu.style.backgroundImage=array[0];
 titu.innerHTML=titulos[0];
 i=0;



 seccionatras=document.querySelector(".seccion-menu-bloque-2-atras");
 seccionsiguiente=document.querySelector(".seccion-menu-bloque-2-siguiente");

 seccionatras.addEventListener("click",(e)=>{
    e.preventDefault();
    if(i>0 && i<=5){
        i--;
    }else{
        i=5;
    }
    seccionmenu.style.backgroundImage=array[i];
    titu.innerHTML=titulos[i];
 })

 
 seccionsiguiente.addEventListener("click",(e)=>{
    e.preventDefault();
    if(i<5){
        i++;
    }else{
        i=0;
    }
    seccionmenu.style.backgroundImage=array[i];
    titu.innerHTML=titulos[i];

  
 })

 

/

  setInterval(()=>{
    seccionmenu.style.backgroundImage=array[i];
    titu.innerHTML=titulos[i];
    if(i<5){
        i++;
    }else{
        i=0
    }
  },5000)



  let numero= document.getElementById("numero").innerHTML=localStorage.length-1;



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
        contenedornav.style.height="55%";
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










  /*
  for( let i=0; i<1000; i++){
      
    if(screenX<i){
    
        contenedorarticulos.classList.remove(".contenedor-li-articulos");
    }else{
        contenedorarticulos.classList.add(".contenedor-li-articulos");
      
    }

    if(i==999){
        i=0;
    }
    console.log(i)
     
  }
  */
