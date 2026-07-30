import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js'
import path from "path";

const app = express()
const _dirname = path.resolve();

dotenv.config();

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes)

//make ready for deployment
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(_dirname, "../frontend/dist")))
}

app.get("*", (_,res) => {
    res.sendFile(path.join(_dirname, "../frontend/", "dist", "index.html"))
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})