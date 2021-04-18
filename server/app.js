import express from 'express'
import mongoose from 'mongoose'
import config from 'config'
import path from 'path'
import authRouter from './routes/auth.routes.js'
import linkRouter from './routes/link.routes.js'
import linkRedirect from './routes/link.routes.js'

const app = express()

app.use(express.json({extended: true}))

app.use('/api/auth', authRouter)
app.use('/api/link', linkRouter)
app.use('/t', linkRedirect)

if(process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()





