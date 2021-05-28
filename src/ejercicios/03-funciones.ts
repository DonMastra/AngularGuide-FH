/*
    ===== Código de TypeScript =====
*/

function sumar( a: number, b: number ): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => a + b;

function multiplicar( numero: number, otroNumero?: number, base: number = 2 ): number {
    return numero * base;
}

interface personajeLOR {
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}

function curar( personaje: personajeLOR, curarX: number ): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: personajeLOR = {
    nombre: 'Stryder',
    pv: 50,
    mostrarPv() {
        console.log( 'Puntos de vida: ', this.pv );
    }
}

curar( nuevoPersonaje, 20);
nuevoPersonaje.mostrarPv();