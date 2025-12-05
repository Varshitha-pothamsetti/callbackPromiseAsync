import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello this is from Backend Development");
})
app.listen(4004, () => {
  console.log('Server running at port number 4004');
});