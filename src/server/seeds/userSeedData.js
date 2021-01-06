const User = require('../models')

const userData = [
{
    name: "Israa Beseiso",
    email: "israabeseiso@gmail.com",
    password: "password"
  },
  {
  name: "Isabel Toledo",
    email: "isabeltoledo@gmail.com",
    password: "password12345"
  },
  {
    name: "Corey Smith",
    email: "coreysmith@gmail.com",
    password: "password123456"
  }
  ]

  const seedUsers = () =>User.bulkCreate(userData);

  module.exports= seedUsers