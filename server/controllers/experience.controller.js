const db = require('../models/index')

const allExperiences = async (req, res) => {
  console.log("allExperiences");
  try {
    const experiences = await db.Experience.findAll();
    console.log('allExperiences: I found a total of ', experiences.length);
    
    res.status(201).json(experiences);
  } catch (err) {
    console.log("allExperiences: err => ", err);
    res.status(400).json({
      err: err.message,
    });
  }
}

const addExperience = async (req, res) => {
  console.log("allExperiences: addExperience: ", req.body);
  try {
    const experience = await db.Experience.create(req.body);
    console.log('allExperiences: addExperience:', " updated with ", experience.dataValues)
    res.status(201).json(experience);
  } catch (err) {
    console.log("allExperiences: err => ", err);
    res.status(400).json({
      err: err.message,
    });
  }
};

module.exports = { addExperience, allExperiences }
