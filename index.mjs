import { registrar } from './operaciones.mjs'

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)

if(operacion === 'registrar') {
    registrar(nombre, edad, tipo, color, enfermedad)
}