import express from "express";
import cors from "cors";

import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"


const app = express();
  
app.use(express.json());
app.use(cors({
    
        origin: 'http://localhost:5173',  // or an array of allowed origins
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
      
}));

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);



app.listen(8800, ()=>{
    console.log("connected")
});