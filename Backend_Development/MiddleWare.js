import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("api successfull");
});

app.post("/add-user", (req, res) => {
  let data = req.body;
  console.log(data);
  res.send("data added");
});

app.get("/get-user",(req,res)=>{
    res.send("data added");
})

app.put("/edit-user", (req, res) => {
  let data = req.body;
  console.log(data);
  res.send("data added");
});

app.delete("/delete-user", (req, res) => {
  let data = req.body;
  console.log(data);
  res.send("data deleted");
});

app.listen(7000, () => {
  console.log("Server running at port 7002");
});