const alumnos = [
  {
    nombre: 'pepe',
    apellido: 'perez'
  },
  {
    nombre: 'juan',
    apellido: 'gomez'
  }
]

// obtener todos los alumnos que se llamen pepe
// usare la funcion filter, que recibe una función como parámetro
// que se ejecutará para cada uno de los elementos del array

const losPepe = alumnos.filter(
  (alumno) => { return alumno.nombre === 'pepe' }
)
console.log(losPepe)

// otra vuelta de tuerca...
const filtradoPorNombre = (alumnos) => alumnos.filter(
  (alumno) => { return alumno.nombre === 'pepe' }
)

// otra vuelta de tuerca...
const filtradoPorNombre = (alumnos, item) => alumnos.filter(
  (alumno) => { return alumno[item] === 'pepe' }
)
