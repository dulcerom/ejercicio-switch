/* 5) En una escuela la colegiatura de los alumnos se determina según el numero de
materias que cursan. El costo de todas las materias es el mismo.
Se ha establecido un programa para estimular a los alumnos, el cual consiste en
lo siguiente: si el promedio obtenido por un alumno en el ultimo periodo es mayor o
igual que 9, se le hará un descuento del 30% sobre la colegiatura y no se le cobrara
IVA; si el promedio obtenido es menor que 9 deberá pagar la colegiatura completa, la
cual incluye el 10% de IVA.
Obtener cuanto debe pagar un alumno. */

let materias= parseInt(prompt('¿Cuántas materias va a cursar?'));
let costoMateria = parseFloat(prompt('¿Cuál es el costo de cada materia?'));
let promedioAlumno = parseFloat(prompt('Ingrese su promedio.'));
let colegiatura = (materias*costoMateria),colegiaturaTotal;


switch(promedioAlumno)
{
    case 10:
        descuentoColegiatura = parseFloat(colegiatura*0.30);
        colegiaturaTotal= parseFloat(colegiatura-descuentoColegiatura);
        console.log(`Felicidades su promedio ha sido de ${promedioAlumno} y su descuento es de $ ${descuentoColegiatura}, el total a pagar es $ ${colegiaturaTotal} `);
    break;

    case 9:
        descuentoColegiatura = parseFloat(colegiatura*0.30);
        colegiaturaTotal= parseFloat(colegiatura-descuentoColegiatura);
        console.log(`Felicidades su promedio ha sido de ${promedioAlumno} y su descuento es de $ ${descuentoColegiatura}, el total a pagar es $ ${colegiaturaTotal} `);
    break;

    case 8:
        colegiaturaTotal = parseFloat(colegiatura + (colegiatura*0.10));
        console.log(`Tu promedio ha sido de ${promedioAlumno} y el total a pagar es $ ${colegiaturaTotal}`);
    break;

    case 7:
        colegiaturaTotal = parseFloat(colegiatura + (colegiatura*0.10));
        console.log(`Tu promedio ha sido de ${promedioAlumno} y el total a pagar es $ ${colegiaturaTotal}`);
    break;

    case 6:
        colegiaturaTotal = parseFloat(colegiatura + (colegiatura*0.10));
        console.log(`Tu promedio ha sido de ${promedioAlumno} y el total a pagar es $ ${colegiaturaTotal}`);
    break;
   
    default: 
    console.log('sigue estudiando');
}


/*12) Una tienda de helado ofrece un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

Costo del helado $70
Tipo A 10% de descuento
Tipo B 15% de descuento
Tipo C 20% de descuento */
let heladosComp = parseInt(prompt('¿Cuántos helados compró?'));
let tipoMembresia = prompt('¿Cuál es el tipo de su membresia A, B C?');
let A, B, C, subtHelado, descHelado, totalHelado;

switch(tipoMembresia){
    case 'A':
        subtHelado = parseFloat(heladosComp*70);
        descHelado = parseFloat(subtHelado * 0.10);
        totalHelado = parseFloat(subtHelado - descHelado);
        console.log(`Usted compró ${heladosComp} helados, su membresia es tipo ${tipoMembresia}, su descuento es de $ ${descHelado}, el total a pagar es de ${totalHelado}`);
        break;

    case 'B':
        subtHelado = parseFloat(heladosComp*70);
        descHelado = parseFloat(subtHelado * 0.15);
        totalHelado = parseFloat(subtHelado - descHelado);
        console.log(`Usted compró ${heladosComp} helados, su membresia es tipo ${tipoMembresia}, su descuento es de $ ${descHelado}, el total a pagar es de ${totalHelado}`);
    break;

    case 'C':
        subtHelado = parseFloat(heladosComp*70);
        descHelado = parseFloat(subtHelado * 0.20);
        totalHelado = parseFloat(subtHelado - descHelado);
        console.log(`Usted compró ${heladosComp} helados, su membresia es tipo ${tipoMembresia}, su descuento es de $ ${descHelado}, el total a pagar es de ${totalHelado}`);
    break;
    default:
    console.log('No cuenta con membresia')

}







