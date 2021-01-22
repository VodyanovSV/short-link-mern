import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    from: {type: String, required: true},
    to: {type: String, required: true, unicue: true},
    code: {type: String, required: true, unicue: true},
    date: {type: Date, default: Date.now},
    clicks: {type: Number, default: 0},
    owner: [{type: mongoose.Types.ObjectId, ref: 'User'}]
})

export default mongoose.model('Link', schema)