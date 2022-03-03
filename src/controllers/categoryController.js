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

export async function deleteCategory(req, res) {
  const user = res.locals.user;
  const categoryId = req.params.id;
  if(!user || !categoryId){
    res.sendStatus(401);
    return;
  }

  try {
    await connection.query(`
      DELETE FROM categorias 
      WHERE id=$1
    `, [categoryId]);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getCategories(req, res) {
  const user = res.locals.user;
  if(!user){
    res.sendStatus(401);
    return;
  }

  try {
    const categories = await connection.query(`
      SELECT * FROM categorias
    `);

    res.send(categories.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function updateCategory(req, res) {
  const user = res.locals.user;
  const categoryId = req.params.id;
  const category = req.body;
  if(!user || !categoryId || !category){
    res.sendStatus(401);
    return;
  }

  try {
    await connection.query(`
      UPDATE categorias
      SET nome=$1
      WHERE id=$2
    `, [category.nome, categoryId]);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}