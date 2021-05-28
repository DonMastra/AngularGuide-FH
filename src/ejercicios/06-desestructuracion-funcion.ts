/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}


const tablet: Producto = {
    desc: 'iPad Air',
    precio: 350
}

export function calculaISV( productos: Producto[] ): [number, number] {

    let total = 0;

    //Desestructuracion de la var callback 'producto: Producto', se extrae 'precio'
    productos.forEach( ( {precio} ) => {
        total += precio;
    });

    //retorna un arreglo de tipo [number, number]
    return [total, total * 0.15];
}

const articulos = [ telefono, tablet ];

//Desestructuracion de la funcion 'calculaISV' que retorna un arreglo
const [total, isv] = calculaISV( articulos );

/* console.log( 'Total: ', total );
console.log( 'ISV: ', isv ); */

