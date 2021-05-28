/*
    ===== Código de TypeScript =====
*/

//ARRAY
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

habilidades.push();


interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

//Object
const personaje: Personaje = {
    nombre: 'Stryder',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table( personaje );