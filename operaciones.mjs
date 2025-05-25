import fs from 'fs'

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    try {
        const data = fs.readFileSync('citas.json', 'utf-8')
        const citas = JSON.parse(data)

        citas.push({ nombre, edad, tipo, color, enfermedad })
        fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2))
        console.log('Cita registrada exitosamente')
    } catch (error) {
        console.error('Error al registrar la cita:', error)
    }
}

export { registrar }
