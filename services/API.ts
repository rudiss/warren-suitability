import axios from 'axios';

const BASE_API = 'https://api.dev.oiwarren.com/';
export const suitabilityConversation = (
  data = { context: 'suitability', id: '', answers: {} }
) => {
  return axios.post(`${BASE_API}api/v2/conversation/message`, data);
};

export const finishSuitability = (data) => {
  return axios.post(`${BASE_API}api/v2/suitability/finish`, data);
};
