const titulo1 = document.getElementById('titulo');
const boton = document.getElementById('cambiar')
const lista1 = document.getElementsByClassName('atributos')
const parrafo = document.getElementsByTagName('p');

const seleccionI = document.querySelector('#titulo');
const seleccionT = document.querySelector('p');
const seleccionC = document.querySelector('.atributos');
const selectorAll = document.querySelectorAll ('.atributos');

const crear = document.getElementById('lista');

boton.addEventListener('click',()=>{
    const nuevo = document.createElement('li');
    nuevo.textContent ="Ardilla";
    nuevo.style.color = "blue";
    crear.appendChild(nuevo);
})


/*console.log(seleccionI);
console.log(seleccionC);
console.log(seleccionT);*/

//selectorAll.forEach((all)=>console.log(all.textContent));

/*boton.addEventListener('click', ()=>{
    titulo1.textContent = "Titulo manipulado";
    titulo1.style.color = "red";
    titulo1.style.fontSize = "40px";
    titulo1.style.transition = "all 2s ease-out";
})*/

/*boton.addEventListener('click', ()=>{
    lista1[1].style.color = "yellow";
    lista1[2].style.fontSize = "50px";
})*/

/*boton.addEventListener('click',()=>{
    parrafo[0].textContent = "Ejemplo modificado";
    parrafo[0].style.backgroundColor = "blue";
    parrafo[0].style.color = "white";

    parrafo[1].textContent = "Ahora soy un ganador";
    parrafo[1].style.backgroundColor ="rgb(118, 167, 227)";
    parrafo[1].style.color ="rgb(210, 24, 223)";
})*/

/*boton.addEventListener('click', ()=>{
    seleccionI.textContent = "Titulo modificado por selector";
    seleccionC.style.color ="rgb(12, 12, 12)";
    seleccionC.style.fontSize = "15px";
    seleccionC.style.fontWeight = "bold";
    seleccionT.style.color ="rgb(26, 41, 243)";
    seleccionT.style.fontSize = "30px";
    //seleccionT.style.fontWeight = "bold";
})*/
/*
boton.addEventListener('click',()=>{
    selectorAll.forEach((all)=>{
        all.style.backgroundColor = "orange"; 
    })
   selectorAll[0].style.color = "green";
   selectorAll[2].style.backgroundColor = "red";
})*/

