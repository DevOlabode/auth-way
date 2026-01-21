const axios = require('axios');


class voult {
constructor({ baseUrl, clientId, clientSecret }) {
this.http = axios.create({
baseURL: baseUrl,
headers: {
'X-Client-Id': clientId,
'Authorization': `Bearer ${clientSecret}`,
'Content-Type': 'application/json'
}
});
}


async register(email, password) {
const { data } = await this.http.post('/api/auth/register', {
email,
password
});
return data;
}


async login(email, password) {
const { data } = await this.http.post('/api/auth/login', {
email,
password
});
return data;
}


async getMe(endUserToken) {
const { data } = await this.http.get('/api/auth/me', {
headers: {
Authorization: `Bearer ${endUserToken}`
}
});
return data;
}


async logout(endUserToken) {
const { data } = await this.http.post(
'/api/auth/logout',
{},
{
headers: {
Authorization: `Bearer ${endUserToken}`
}
}
);
return data;
}
}


module.exports = voult;