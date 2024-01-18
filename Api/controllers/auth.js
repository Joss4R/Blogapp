import {db} from "../db"

export const register = (req, res) => {
    //check existing user

    const q = "SELECT * FROM users WHERE email = ? OR userName = ?"

    db.query(q, [req.body.email, req.body.name], (err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exists!")

        //Hash the 
    })

}
export const login = (req, res) => {

}
export const logout = (req, res) => {

}

