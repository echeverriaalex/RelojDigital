/*(function(){

    var actualizarHora = function(){

        var fecha = new Date(),
            horas = fecha.getHours(), ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        var pHoras = document.getElementById('horas'),
            pAMPM= document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDisaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');
            
        var seamana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        pDisaSemana.textContent = semana[diaSemana];
    }

    setInterval(actualizarHora, 1000);
    
}())
*/

function definirAmPm(hora){

    if(hora > 12)
        return "PM";
    else
        return "AM";
}

function actualizarReloj(){

    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var AmPm = definirAmPm(hour);
    document.getElementById("ampm").innerHTML = AmPm;

    if(hour < 10)
        hour = "0" + hour;
    document.getElementById("hour").innerHTML = hour + ":";

    if(minutes < 10)
        minutes = "0" + minutes;
    document.getElementById("minutes").innerHTML =  minutes+ ":";

    if(seconds < 10)
        seconds = "0" + seconds;
    document.getElementById("seconds").innerHTML = seconds;
}

function actualizarFecha(){    
    
    var days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Septiembre",
                "Octubre", "Noviembre", "Diciembre"];
    
    var date = new Date();
    var day = date.getDay();
    var dayNumber = date.getDate();

    document.getElementById("day").innerHTML = days[day];    
    document.getElementById("dayNumber").innerHTML = dayNumber + " de ";

    var month = date.getMonth();
    document.getElementById("month").innerHTML = months[month] + " del ";

    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;

    return date;
}

function nombreUsuario(){

    var nombre = prompt("Ingresa tu nombre: ");
    
    //var nombre = document.getElementById("userName");

    if(nombre.value != null)
        document.getElementById("name").innerHTML = "Bienvenido/a " + nombre;
    else
        document.getElementById("name").innerHTML = "Bienvenido/a " + nombre;    
    return false;
}

/*
var formulario = document.getElementsByName("userName")[0],
    elementos = formulario.element

console.log(formulario);
console.log(elementos);
*/
//var nombre = prompt("Ingresa tu nombre: ");



/*
var jsondate = actualizarFecha();
    jsondate.toString();
console.log(jsondate);
document.write(jsondate);
*/

var tiempoReloj = 1000; // cada 1 segundo se actualiza
var tiempoFecha = 1000;

nombreUsuario();
setInterval(actualizarReloj, tiempoReloj);
setInterval(actualizarFecha, tiempoFecha);