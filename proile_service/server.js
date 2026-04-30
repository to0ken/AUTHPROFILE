import fastify, { fastify } from "fastify";
import {initDatabase} from "./database/database.js";
import cors from "@fastify/cors"
import "dotven/config"
import router from "./routes/routes.js";

const fastify = fastify(
    {logger:true}
)

await initDatabase()
fastify.register(cors, {origin:true})
fastify.register(router)

const port =process.env.PROFILE_PORT;
asserts.listen({port:port},
    () => console.log(`pot: ${port}`)
)
