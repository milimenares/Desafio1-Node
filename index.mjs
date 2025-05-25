import fs from 'fs'

const citas = []

fs.writeFileSync('citas.json', JSON.stringify(citas))