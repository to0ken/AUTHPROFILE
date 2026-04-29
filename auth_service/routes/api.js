import express from 'express'
import { getDatabase } from '../database/database.js';
import bcrypt from "bcrypt"

const router = express.Router();


router.post('/login', async(req, res) => {
    const { login, password } = req.body ?? {}

    const db = await getDatabase();
    const user = await db.query(
        `
        SELECT * FROM users WHERE login=$1
        `, [login])
    const isPasswordvalid = await bcrypt.compare(password, user)


    if (login !== user.login) {
        res.status(401).send({ status: "error" })
    }
    if (!login || !password) {
        res.status(401).send({ status: "error" })
    }
    if (isPasswordvalid) {
        res.status(200).send({ status: "success" })
    }
    else {
        res.status(501).send({ status: "error" })
    }
})

router.post("/register", async (req, res) => {
    const { login, password } = req.body ?? {};

    const db = getDatabase();
    const hashPassword = await bcrypt.hash(password, 12)
    if (password.lenght <= 4){
        res.status(401).send({status:"error"})
    }else{
    db.query(`
    INSERT INTO users (login, password)
     VALUE ('$1', '$2')
  `, [login, hashPassword])
    res.status(200).send({ status: "seccess" });
    }

});


export default router;
