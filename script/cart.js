
document.getElementById("cantidad").innerHTML=localStorage.length-1;
document.getElementById("numero").innerHTML=localStorage.length-1;




function adiccion(id){
    let numero=id.replace('btnsuma','')
    document.getElementById(`piezas${numero}`).innerHTML++;

    let preciobtn=document.getElementById(`costo${numero}`).innerHTML;
    let piezabtn=document.getElementById(`piezas${numero}`).innerHTML;
    let precio2= preciobtn.replace('$','')


    let resultado=parseFloat(precio2)*Number(piezabtn);
    document.getElementById(`total${numero}`).innerHTML=resultado +",00";
    document.getElementById("preciototal").innerHTML=precios+ resultado;
 }
 


 function sustraccion(id){
    let numero=id.replace('btnresta','')

    if(document.getElementById(`piezas${numero}`).innerHTML==0){
        document.getElementById(`piezas${numero}`).innerHTML=0;
    }else{

        let preciobtn=document.getElementById(`costo${numero}`).innerHTML;
        let piezabtn=document.getElementById(`piezas${numero}`).innerHTML;
        let precio2= preciobtn.replace('$','')

        document.getElementById(`piezas${numero}`).innerHTML--;
        let resultado=parseFloat(precio2)*Number(piezabtn);
        document.getElementById(`total${numero}`).innerHTML=resultado +",00";
        document.getElementById("preciototal").innerHTML=precios- resultado;
    }
 }


 function borrar(id){
    let con=document.querySelector(`.contenedor-${id}`);
    document.body.removeChild(con);
    let k= localStorage.key(id);
    localStorage.removeItem(k)
        
 
 }


let precios=0;



if(localStorage.length!=0){



  for(i=0;i<localStorage.length;i++){

    let key= localStorage.key(i)
    
   if(key!="preciototal"){
    let data = localStorage.getItem(key);
    let img = JSON.parse(data).img;
    let nombre= JSON.parse(data).nombre;
    let precio=JSON.parse(data).precio;
  
  
    precios=precios+parseFloat(precio);
  
     
    let articuloopcion= document.querySelector(".articulo-opcion");
    let creardiv= document.createElement("div");
    creardiv.classList.add("cotenedor-articulo");
    creardiv.classList.add(`contenedor-${i}`)
    
    text=` <div class="articulo">
    <div class="articulo-img">
        <img src="" id="imagen${i}" width="100%" height="100%" alt="">
    </div>
    <div class="articulo-titulo">
        <h3 id="titulo${i}"></h3>
        <p id="costo${i}"></p>
        <div class="calculador">
            <div class="resta" onclick="sustraccion(this.id)"  id="btnresta${i}">
                <a >-</a>
            </div>
            <p id="piezas${i}">1</p>
            <div class="suma" onclick="adiccion(this.id)"  id="btnsuma${i}">
                <a  >+</a>
            </div>
            <span id="total${i}">0</span>
        </div>
    </div>
    </div>
    <div class="articulo-eliminar" id="${i}" onclick="borrar(this.id)">
    <a  id="eliminar">X</a>
    </div>`;
    creardiv.innerHTML=text;
    document.body.insertBefore(creardiv,articuloopcion);
  
  
    let titulo= document.getElementById(`titulo${i}`).innerHTML=nombre;
    let costo= document.getElementById(`costo${i}`).innerHTML="$"+precio;
    let imagen= document.getElementById(`imagen${i}`).setAttribute("src",img);
    let total= document.getElementById(`total${i}`).innerHTML=costo;
    let piezas= document.getElementById(`piezas${i}`);
  
  
   }else{
       console.log(key)
   }
  
 
     
  
  }


   document.getElementById("preciototal").innerHTML=precios;
   localStorage.setItem("preciototal",precios);


}







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



document.getElementById("cantidad").innerHTML=localStorage.length;
document.getElementById("numero").innerHTML=localStorage.length;








if(localStorage.length!=0){



  let data = localStorage.getItem("producto3");
  let img = JSON.parse(data).img;
  let nombre= JSON.parse(data).nombre;
  let precio=JSON.parse(data).precio;


  

   
  let articuloopcion= document.querySelector(".articulo-opcion");
  let creardiv = document.createElement("div");
  creardiv.classList.add("cotenedor-articulo");
  
  text=` <div class="articulo">
  <div class="articulo-img">
      <img src="" id="imagen" width="100%" height="100%" alt="">
  </div>
  <div class="articulo-titulo">
      <h3 id="titulo"></h3>
      <p id="costo"></p>
      <div class="calculador">
          <div class="resta">
              <a href="">-</a>
          </div>
          <p id="piezas">1</p>
          <div class="suma">
              <a href="">+</a>
          </div>
          <span id="total">0</span>
      </div>
  </div>
  </div>
  <div class="articulo-eliminar">
  <a href="" id="eliminar">X</a>
  </div>`;
  creardiv.innerHTML=text;
  document.body.insertBefore(creardiv,articuloopcion);


  let titulo= document.getElementById("titulo").innerHTML=nombre;
  let costo= document.getElementById("costo").innerHTML=precio;
  let imagen= document.getElementById("imagen").setAttribute("src",img)

  let total= document.getElementById("total").innerHTML=costo;
  let piezas= document.getElementById("piezas");
  let suma= document.querySelector(".suma");
  let resta= document.querySelector(".resta");


 
   




    
 let precio2= precio.replace('$','')


 suma.addEventListener("click",(e)=>{
    e.preventDefault();
    piezas.innerHTML++;
    let resultado=parseFloat(precio2)*Number(piezas.innerHTML);
    document.getElementById("total").innerHTML=resultado +",00";
  
})

resta.addEventListener("click",(e)=>{
    e.preventDefault();
    if(piezas.innerHTML==0){
        piezas.innerHTML=0;
    }else{
            piezas.innerHTML--;
            let resultado=parseFloat(precio2)*Number(piezas.innerHTML);
        document.getElementById("total").innerHTML=resultado +",00";
    }
})




let articuloeliminar=document.querySelector(".articulo-eliminar");

articuloeliminar.addEventListener("click",(e)=>{
    e.preventDefault();

    document.body.removeChild(creardiv);
    localStorage.clear();
})







}



*/