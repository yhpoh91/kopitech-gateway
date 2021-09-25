const { L } = require('kopitech-logger')('Example Router');

const authService = require('../../services/auth');

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const loginResult = await authService.loginUser(username, password);
    if (loginResult == null) {
      res.status(401).send('unauthorized');
      return;
    }

    res.status(200).json(loginResult);
  } catch (error) {
    L.error(error);
    next(error);
  }
};

const loginClient = async (req, res, next) => {
  try {
    const { clientId, clientSecret } = req.body;
    const loginResult = await authService.loginClient(clientId, clientSecret);
    if (loginResult == null) {
      res.status(401).send('unauthorized');
      return;
    }

    res.status(200).json(loginResult);
  } catch (error) {
    L.error(error);
    next(error);
  }
};

module.exports = {
  loginUser,
  loginClient,
};
