import { apis } from "service";

const COMMON_URL = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/`;

const API_URLS = { GET_USERS: `${COMMON_URL}users` };

export const getUsers = (payload) => apis.get(API_URLS.GET_USERS, payload);
