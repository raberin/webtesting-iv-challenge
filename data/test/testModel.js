const db = require("../dbConfig.js");

module.exports = {
  insert,
  remove,
  getAll,
  findById
};

async function insert(nameObj) {
  const [id] = await db("test").insert(nameObj);
  return findById(id);
}

function remove() {
  return db("test").truncate();
  // .where({ id: id })
  // .del();
}

function getAll() {
  return db("test");
}

function findById(id) {
  return db("test")
    .where({ id })
    .first();
}
