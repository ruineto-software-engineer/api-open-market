import connection from '../db.js';

export async function registerCategory(req, res) {
  const user = res.locals.user;
  const category = req.body;
  if(!user){
    res.sendStatus(401);
    return;
  }

  try {
    await connection.query(`
      INSERT INTO categorias (nome)
      VALUES ($1)
    `, [category.nome]);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}