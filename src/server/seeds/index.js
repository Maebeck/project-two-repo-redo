// const sequelize = require('../config/connection');
// const { User, jets } = require('../models');
// const userData = require('./userData.json');
// const jetSeedData = require('./jetsSeedData.json');
// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });
//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });
//   const jets = await jets.bulkCreate(jetSeedData, {
//     individualHooks: true,
//     returning: true,
//   });
//   for (const jetSeedData of jetSeedData) {
//     await jets.create({
//       ...jets,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }
//   process.exit(0);
// };
// seedDatabase();
const seedJets = require('./jetsSeedData');
const seedUsers = require('./userSeedData');
const sequelize = require('../config/connection');
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedJets();
  console.log('--------------');
  await seedUsers();

  process.exit(0);
};
seedAll();
