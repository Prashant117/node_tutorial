const db = require("./db")
const { userTable } = require("./drizzle/schema")
require("dotenv/config")

async function getAllUsers() {
    const users = await db.select().from(userTable);
    console.log(`Users in DB:`, users);
    return users;
}

async  function createUser({ id, name, email }) {
    await db.insert(userTable).values({
        id, name, email,
    })
}


// createUser({ id: 1, name: 'Prashant', email: 'prashant@aikenist.com'})
// createUser({ id: 2, name: 'Aman', email: 'aman@aikenist.com'})
getAllUsers();