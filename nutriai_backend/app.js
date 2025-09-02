import express from 'express'

const app=express()

app.get('/',(req,res)=>{
    console.log('hey')
    res.send('okiie')
})

const PORT=5000

app.listen(PORT,()=>{
    console.log('done....')
})