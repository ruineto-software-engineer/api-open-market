import connection from '../db.js';

export async function resgisterProduct(req, res) {
  const user = res.locals.user;
  const product = req.body;
  if(!user){
    res.sendStatus(401);
    return;
  }

  try {
    await connection.query(`
      INSERT INTO produtos (nome, preco, "idUsuario")
      VALUES ($1, $2, $3)
    `, [product.nome, product.preco, user.idUsuario]);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function deleteProduct(req, res) {
  const user = res.locals.user;
  const productId = req.params.id;
  if(!user || !productId){
    res.sendStatus(401);
    return;
  }

  try {
    await connection.query(`
      DELETE FROM produtos 
      WHERE id=$1 AND "idUsuario"=$2
    `, [productId, user.idUsuario]);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getProduct(req, res) {
  const user = res.locals.user;
  if(!user){
    res.sendStatus(401);
    return;
  }

  try {
    const products = await connection.query(`
      SELECT * FROM produtos
      WHERE "idUsuario"=$1
    `, [user.idUsuario]);

    res.send(products.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function updateProduct(req, res) {
  const user = res.locals.user;
  const productId = req.params.id;
  const product = req.body;
  if(!user || !productId || !product){
    res.sendStatus(401);
    return;
  }

  try {
    await connection.query(`
      UPDATE produtos
      SET nome=$1, preco=$2
      WHERE id=$3 AND "idUsuario"=$4
    `, [product.nome, product.preco, productId, user.idUsuario]);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}