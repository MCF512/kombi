import {Schema, model} from 'mongoose'

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    tagRU: {
        type: String,
        required: true
    },
    tagEN: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }

})

export default model("product", productSchema)