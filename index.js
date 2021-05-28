const enfermos = [
    {
        paciente: {
            nombre: 'Manuel',
            edad: 25,
            sexo: 'H'
        },
        diasIngresado: 3,
        dieta: 'Baja en fibra'
    },
    {
        paciente: {
            nombre: 'Marta',
            edad: 56,
            sexo: 'M'
        },
        diasIngresado: 5,
        dieta: 'Diabetes'
    },
    {
        paciente: {
            nombre: 'Julia',
            edad: 38,
            sexo: 'M'
        },
        diasIngresado: 1,
        dieta: 'Sin sal'
    },
    {
        paciente: {
            nombre: 'Esteban',
            edad: 40,
            sexo: 'H'
        },
        diasIngresado: 3,
        dieta: 'Diabetes'
    },
    {
        paciente: {
            nombre: 'Arturo',
            edad: 19,
            sexo: 'H'
        },
        diasIngresado: 2,
        dieta: 'Baja en fibra'
    },
    {
        paciente: {
            nombre: 'Isabel',
            edad: 63,
            sexo: 'M'
        },
        diasIngresado: 6,
        dieta: 'Sin sal'
    }
];


const numeroEnfermos = enfermos.length;

const mayoresGordos = enfermos.filter((paciente) => paciente.paciente.edad >= 18);

const diabeticos = enfermos.filter((enfermos)=> enfermos.paciente.sexo === "H" && enfermos.dieta === "Diabetes");

const mediaDias = enfermos.reduce((acumulador, enfermos) => acumulador + enfermos.diasIngresado, 0);


const edadMujeres = enfermos
.filter((enfermos) => enfermos.paciente.sexo === "M")
.reduce((acumulador, enfermos)=> acumulador + enfermos.paciente.edad, 0 )



const arrayFinal = {
    nPacientes: numeroEnfermos,
    nMayores: mayoresGordos,
    nDiabetico: diabeticos,
    nDiasMedia: mediaDias,
    sumaEdadMujeres: edadMujeres
}
console.log(arrayFinal);