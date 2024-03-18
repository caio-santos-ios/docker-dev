import express, { Request, Response, json } from "express";

const app = express()

app.use(json())

app.get("/docker", (req: Request, res: Response) => {

    return res.status(200).json({ message: "Desenvolvimento com docker" })
})

app.listen(3333, () => console.log("Server running..."))