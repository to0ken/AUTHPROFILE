import express from 'express'

const router = express.Router();


router.post('/login', (req, res) =>{
    const{login, password} = req.body??{}


    if(!login || !password && (!password && !login)) {
        res.status(401).send({status:"error"})
    }
    if(login === "test" && password === "test"){
        res.status(200).send({status: "seccess"})
    }
    else{
        res.status(401).send({status:"error"})
    }
})

router.post("/register", (req, res) => {
  const { login, password } = req.body ?? {};

  const db = getDatabase();
  db.run(`
    INSERT INTO users (login, password) VALUE ('${login}', '${password}')
  `)
  res.status(200).send({ status: "seccess" });

});

export default router;
