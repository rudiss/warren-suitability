import axios from 'axios';

const BASE_API = 'https://api.dev.oiwarren.com/';
const url = BASE_API;
export const suitabilityConversation = (
  data = { context: 'suitability', id: '', answers: {} }
) => {
  return axios.post(`${url}api/v2/conversation/message`, data);
};

export const finishSuitability = (data) => {
  return axios.post(`${url}suitability/finish`, data);
};
