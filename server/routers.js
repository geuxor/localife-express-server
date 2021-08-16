const router = require('express').Router();

console.log('routes:                       💫 importing routes');
//auth routes
const userController = require('./controllers/user.controller')
router.post('/register', userController.addUser);
router.post('/login', userController.loginUser);
router.get('/logout', userController.logoutUser);

//product routes
const ExperienceController = require('./controllers/experience.controller')
router.post("/experiences", ExperienceController.allExperiences);
router.post("/experiences/new", ExperienceController.addExperience);

module.exports = router;
