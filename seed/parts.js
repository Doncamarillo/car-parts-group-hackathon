const db = require('../db')
const  Brand  = require('../models/brand')
const Part = require('../models/part')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Brands = [
        {
            name: 'Bosch',
            yearFounded: 1886,
            region: 'Gerlingen, Baden-Württemberg, Germany',
        },
        {
            name: 'Dayco',
            yearFounded: 1905,
            region: 'Birmingham, Michigan, United States'
        },
        {
            name: 'Holley',
            yearFounded: 1896,
            region: 'Bowling Green, Kentucky, United States'
        },
    ]
    const Parts = [
        {
            name: 'Fuel Pump',
            partNumber: 66800,
            brandFrom: Brands[0].name ,
            price: 200
        },
        {
            name: 'Windshield Wiper',
            partNumber: 64325,
            brandFrom: Brands[0].name ,
            price: 6
        },
        {
            name: 'Distributor Cap',
            partNumber: 67231,
            brandFrom: Brands[0].name ,
            price: 56
        },
        {
            name: 'Accessory Belt Tensioner',
            partNumber: 89390,
            brandFrom: Brands[1].name ,
            price: 122
        },
        {
            name: 'Radiator Hose',
            partNumber: 70081,
            brandFrom: Brands[1].name ,
            price: 18
        },
        {
            name: 'Engine Harmonic Balancer',
            partNumber: 17301,
            brandFrom: Brands[1].name ,
            price: 180
        },

        {
            name: 'Carburetor',
            partNumber: 80457,
            brandFrom: Brands[2].name ,
            price: 456
        },
        {
            name: 'Intake Manifold',
            partNumber: 19024,
            brandFrom: Brands[2].name ,
            price: 1042
        },
        {
            name: 'Fuel Tank and Pump Assembly',
            partNumber: 91048,
            brandFrom: Brands[2].name ,
            price: 800
        },
    ]
    await Brand.insertMany(Brands)
    await Part.insertMany(Parts)
    console.log("Created brands with car parts")
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()