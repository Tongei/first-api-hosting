const homeController = require('../controllers/home.controller');

const home = (app) => {
    app.get('/' , homeController.homepage)
}

module.exports = home;