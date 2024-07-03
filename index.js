import express, { response } from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'

configDotenv({
    path:'./.env'
})
const app = express()

app.use(cors({ origin:*, credentials: true }))

const sentences = [
    "The sky is blue because it's a reflection of the ocean.",
    "Have you ever tried turning it off and on again?",
    "Why do birds suddenly appear, every time you are near?",
    "The mitochondrion is the powerhouse of the cell.",
    "To be or not to be, that is the question.",
    "42 is the answer to life, the universe, and everything.",
    "I can haz cheezburger?",
    "Did you know that the Eiffel Tower can be 15 cm taller during the summer?",
    "Computers make very fast, very accurate mistakes.",
    "Why is a raven like a writing desk?"
  ];


const server = app.listen(process.env.PORT || 8000,() => {
    console.log(`Random chat app listening on port ${process.env.PORT}`)
})

app.get('/api/random-response',(req,res) => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return res
    .status(200)
    .json(
        {
            statusCode:200,
            message:"success",
            response:sentences[randomIndex]
        }
    )
})



export {app,server}

