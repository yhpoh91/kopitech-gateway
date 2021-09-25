const axios = require('axios');

const tokenClient = require('kopitech-token-client');

const authHost = process.env.AUTHENTICATOR_HOST;

const getConfig = async () => {
  try {
    const token = await tokenClient.getToken();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };

    return Promise.resolve(config);
  } catch (error) {
    return Promise.reject(error);
  }
}

const loginUser = async (username, password) => {
  try {
    const url = `${authHost}/auth/login`;
    const config = await getConfig();
    const body = { username, password };

    const response = await axios.post(url, body, config);
    const { data } = response;
    return Promise.resolve(data);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return Promise.resolve(null);
    }
    return Promise.reject(error);
  }
};

const loginClient = async (clientId, clientSecret) => {
  try {
    const url = `${authHost}/auth/client`;
    const config = await getConfig();
    const body = { clientId, clientSecret };

    const response = await axios.post(url, body, config);
    const { data } = response;
    return Promise.resolve(data);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return Promise.resolve(null);
    }
    return Promise.reject(error);
  }
};

module.exports = {
  loginUser,
  loginClient,
};
