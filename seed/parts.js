const db = require('../db')
const  Brand  = require('../models/brand')
const Part = require('../models/part')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    // const Brands = [
    //     {
    //         name: 'bosch',
    //         yearFounded: 1886,
    //         region: 'Gerlingen, Baden-Württemberg, Germany'
    //     }
    //     {
    //         name: 'Dayco',
    //         yearFounded: 1905,
    //         region: 'Birmingham, Michigan, United States'
    //     },
    //     {
    //         name: 'Holley',
    //         yearFounded: 1896,
    //         region: 'Bowling Green, Kentucky, United States'
    //     },
    // ]
    const bosch = await Brand.find({ name: 'bosch' })
    const dayco = await Brand.find({ name: 'Dayco' })
    const holley = await Brand.find({name: "Holley"})
    const Parts = [
        {
            name: 'Fuel Pump',
            partNumber: 66800,
            brandFrom: bosch[0]._id ,
            price: 200
        },
        {
            name: 'Windshield Wiper',
            partNumber: 64325,
            brandFrom: bosch[0]._id ,
            price: 6
        },
        {
            name: 'Distributor Cap',
            partNumber: 67231,
            brandFrom: bosch[0]._id ,
            price: 56
        },
        {
            name: 'Accessory Belt Tensioner',
            partNumber: 89390,
            brandFrom: dayco[0]._id ,
            price: 122
        },
        {
            name: 'Radiator Hose',
            partNumber: 70081,
            brandFrom: dayco[0]._id ,
            price: 18
        },
        {
            name: 'Engine Harmonic Balancer',
            partNumber: 17301,
            brandFrom: dayco[0]._id ,
            price: 180
        },

        {
            name: 'Carburetor',
            partNumber: 80457,
            brandFrom: holley[0]._id ,
            price: 456
        },
        {
            name: 'Intake Manifold',
            partNumber: 19024,
            brandFrom: holley[0]._id ,
            price: 1042
        },
        {
            name: 'Fuel Tank and Pump Assembly',
            partNumber: 91048,
            brandFrom: holley[0]._id ,
            price: 800
        },
    ]
    //await Brand.insertMany(Brands)
    await Part.insertMany(Parts)
    console.log("Created brands with car parts")
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()