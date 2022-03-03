import connection from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export async function signIn(req, res) {
  const userData = req.body;
  const secretKey = process.env.JWT_SECRET;
  const configuration = { expiresIn: 60*60 };

  try {
    const user = await connection.query(`
      SELECT * FROM usuarios 
      WHERE email=$1
    `, [userData.email]);
    if(!user){
      res.sendStatus(401);
      return;
    }

    const isAuthorized = bcrypt.compareSync(userData.senha, user.rows[0].senha);
    if(isAuthorized){
      const token = jwt.sign(userData, secretKey, configuration);

      await connection.query(`
        INSERT INTO sessoes ("idUsuario", token) 
        VALUES ($1, $2)
      `, [user.rows[0].id, token]);

      res.send(token);
      return;
    }

    res.sendStatus(401);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function signUp(req, res) {
  const user = req.body;

  try {
    const passwordHash = bcrypt.hashSync(user.senha, 10);

    await connection.query(`
      INSERT INTO usuarios (nome, email, senha)
      VALUES ($1, $2, $3)
    `, [user.nome, user.email, passwordHash]);
    
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}