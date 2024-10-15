const clientId = 'TU_CLIENT_ID';
const redirectUri = 'http://localhost:8080/callback';
const authEndpoint = 'http://localhost:3000/oauth/authorize';

export const login = () => {
   window.location.href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;
};
