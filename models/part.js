const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Part = new Schema(
    {
        name: { type: String, required: true },
        partNumber: { type: Number, required: true },
        brandFrom: { type: Schema.Types.ObjectId , ref: 'brand_name'  },
        price: { type: Number , required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('parts', Part)