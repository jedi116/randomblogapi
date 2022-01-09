import app from './app'

const PORT:number = 5000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})