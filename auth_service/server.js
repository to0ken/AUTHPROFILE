import express from 'express'
import {initDatabase} from "./database/database.js"

import apiRoutes from "./routes/api.js"
import pageRoutes from "./routes/pages.js"

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.AUTH_PORT || 3000;

await initDatabase();


app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/api",apiRoutes)
app.use("/",pageRoutes)


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
})

// для создания бс - npm install sqlite sqlite3 bcrypt
