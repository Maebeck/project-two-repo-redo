const sequelize = require('../config/connection');
const { User, jets } = require('../models');
const userData = require('./userData.json');
const jetsSeedData = require('./jetsSeedData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  for (const jetSeedData of jetSeedData) {
    await jets.create({
      ...jets,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};
seedDatabase();