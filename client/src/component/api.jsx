export const api = axios.create({
  // baseURL : 'https://lovely-spotty-settee.glitch.me/api'
  baseURL: import.meta.env.VITE_BASE_URL,
});