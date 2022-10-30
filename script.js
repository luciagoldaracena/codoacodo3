/* Valor del Ticket */
const valorTicket = 200;

/* Porcentajes de descuento */
let desc_st = 0.2; /* Estudiante */
let desc_tr = 0.5; /* Trainee */
let desc_jr = 0.85; /* Junior */

/* Variables -Ver las restantes en la funcion "Resumen"-*/
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");

/* Variables para botones */
let btn_borrar = document.getElementById("btn_borrar");
let btn_resumen = document.getElementById("btn_resumen");

/* Botones */
btn_borrar.addEventListener("click", borrar);
btn_resumen.addEventListener("click", resumen);


/* Funcion botón 'Borrar' */
function borrar() 
{
let input = document.querySelectorAll('input');
resultado.innerHTML="Total a pagar: $ ";
input.forEach(input =>  input.value = '');
}

/* Función botón 'Resumen' (cálculo) */
function resumen()
{
let total=0
let cantidad = Math.abs(parseInt(document.getElementById("cantidad").value));
let categoria = document.getElementById("categoria").value;
let resultado = document.getElementById("resultado");
const emailv = correo => 
{return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)}

if(nombre.value==="")
{
    nombre.classList.add("is-invalid")
    return
}

else if(apellido.value==="")
{
    apellido.classList.add("is-invalid")
    return
}

else if (!emailv(correo.value)||correo.value==="")
{
    correo.classList.add("is-invalid")
    return
}
else{

    nombre.classList.remove("is-invalid")
    apellido.classList.remove("is-invalid")
    correo.classList.remove("is-invalid")

switch(categoria) 
{
    case "1":
        total=cantidad*valorTicket*desc_st;
        break;
    case "2":
        total=cantidad*valorTicket*desc_tr;
        break;
    case "3":
        total=cantidad*valorTicket*desc_jr;
        break;
    case "4":
        total=cantidad*valorTicket;
        break;   
}

resultado.innerHTML="Total a pagar: $ "+ total.toLocaleString("es-AR");
}}