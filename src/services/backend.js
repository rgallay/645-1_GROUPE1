import request from "../utils/request";

export const ENDPOINTS = {
  LOGIN: `${process.env.REACT_APP_BACKEND_URL}/user/login`,
  COMPANIES: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
  POSTULANT: `${process.env.REACT_APP_BACKEND_URL}/postulant`,
  OFFRES: `${process.env.REACT_APP_BACKEND_URL}/offre`,
  CHAT: `${process.env.REACT_APP_BACKEND_URL}/chat/conversation`,
  USERS : `${process.env.REACT_APP_BACKEND_URL}/user`
};

export const Backend = {
  login: async function (email, password) {
    return request(ENDPOINTS.LOGIN, {
      method: "POST",
      data: { email, password },
    });
  },

  companies: async function () {
    return request(ENDPOINTS.COMPANIES);
  },

  getOffres: async function () {
    return request(ENDPOINTS.OFFRES);
  },

  getChat: async function (id) {
    return request(ENDPOINTS.CHAT+"/"+ id);
  },
  getEntreprise: async function(id) {
    return request(ENDPOINTS.COMPANIES+"/"+ id);
  },

  getUser: async function() {
    return request(ENDPOINTS.USERS);
  }
};
