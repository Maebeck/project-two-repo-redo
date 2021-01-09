const jets= require("../models/jets")

const jetsData = [
    {
      jetsType: "private",
      name: "Cessna Citation Mustang",
      description: "a",
      prices: "1500",
      crew: "3"
    },
  {
    jetsType: "private",
      name: "a Phenom 100",
      description: "b",
      prices: "2500",
      crew: "3"
    },
    {
    jetsType: "private",
      name: "HondaJet",
      description: "c",
      prices: "2500",
      crew: "3"
    },
    {
    jetsType: "private",
      name: "Cessna Citation M2",
      description: "d",
      prices: "2500",
      crew: "3"
    }
  ]

  const seedJets = () => jets.bulkCreate(jetsData);
  module.exports = seedJets