
const pool = require("./pool");

async function getAllUsernames(){
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}


async function insertUsername(username, password) {
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, password]);
}


module.exports = {
    getAllUsernames,
    insertUsername
}