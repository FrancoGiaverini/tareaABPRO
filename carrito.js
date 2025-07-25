const vino = "botella de vino tinto chileno Reserva";
const precioVino = 12000;

const vodka = "botella vodka importado";
const precioVodka = 25000;

const whisky = "botellas whisky escocés 12 años";
const precioWhisky = 40000;

let totalNeto = 0;
let continuar = true;

while (continuar) {
    let opcion = prompt(`Selecciona un producto:
1. ${vino} ($${precioVino})
2. ${vodka} ($${precioVodka})
3. ${whisky} ($${precioWhisky})
4. Terminar compra`);

    if (opcion == "1") {
        let cantidad = prompt(`¿Cuántas ${vino}s quieres comprar?`);
        totalNeto += precioVino * cantidad;
    } else if (opcion == "2") {
        let cantidad = prompt(`¿Cuántas ${vodka}es quieres comprar?`);
        totalNeto += precioVodka * cantidad;
    } else if (opcion == "3") {
        let cantidad = prompt(`¿Cuántas ${whisky}s quieres comprar?`);
        totalNeto += precioWhisky * cantidad;
    } else if (opcion == "4") {
        continuar = false;
    } else {
        alert("Opción no válida");
    }
}

let iva = totalNeto * 0.19;
let despacho = totalNeto > 50000 ? 0 : 3000;
let totalFinal = totalNeto + iva + despacho;

console.log(`Resumen de tu compra:
Valor neto: $${totalNeto}
IVA (19%): $${iva}
Despacho: $${despacho}
Total final: $${totalFinal}`);