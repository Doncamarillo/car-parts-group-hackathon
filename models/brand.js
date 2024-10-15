const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Brand = new Schema(
    {
        name: { type: String, required: true },
        yearFounded: { type: Number, required: true },
        region: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('brands', Brand)