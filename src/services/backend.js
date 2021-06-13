import request from "../utils/request";

export const ENDPOINTS = {
  LOGIN: `${process.env.REACT_APP_BACKEND_URL}/user/login`,
  COMPANIES: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
  POSTULANT: `${process.env.REACT_APP_BACKEND_URL}/postulant`,
  OFFRES: `${process.env.REACT_APP_BACKEND_URL}/offre`,
  CHAT: `${process.env.REACT_APP_BACKEND_URL}/chat/conversation`,
  MESSAGE: `${process.env.REACT_APP_BACKEND_URL}/chat/message`,
  USERS : `${process.env.REACT_APP_BACKEND_URL}/user`,
  COMPETENCES: `${process.env.REACT_APP_BACKEND_URL}/competence/postulant`,
  FORMATIONS: `${process.env.REACT_APP_BACKEND_URL}/formation/postulant`,
  LANGUES: `${process.env.REACT_APP_BACKEND_URL}/langue/postulant`,
  SEJOURS: `${process.env.REACT_APP_BACKEND_URL}/langue/sejours`,
  SOFTSKILLS: `${process.env.REACT_APP_BACKEND_URL}/softskill/postulant`,
  EXPERIENCES: `${process.env.REACT_APP_BACKEND_URL}/experience/postulant`
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
  postulants: async function () {
    return request(ENDPOINTS.POSTULANT);
  },

  getOffres: async function () {
    return request(ENDPOINTS.OFFRES);
  },

  getMessages: async function (id1, id2) {
    return request(ENDPOINTS.MESSAGE+"/"+ id1 + "/" + id2);
  },
  getChat: async function (id) {
    return request(ENDPOINTS.CHAT+"/"+ id);
  },
  getEntreprise: async function(id) {
    return request(ENDPOINTS.COMPANIES+"/"+ id);
  },
  getPostulant: async function(id) {
    return request(ENDPOINTS.POSTULANT+"/"+ id);
  },

  getCompetence: async function(id) {
    return request(ENDPOINTS.COMPETENCES+"/"+id);
  },

  getFormation: async function(id) {
    return request(ENDPOINTS.FORMATIONS+"/"+id);
  },

  getLangue: async function(id) {
    return request(ENDPOINTS.LANGUES+"/"+id);
  },

  getSejours: async function(id) {
    return request(ENDPOINTS.SEJOURS+"/"+id);
  },

  getSoftskills: async function(id) {
    return request(ENDPOINTS.SOFTSKILLS+"/"+id);
  },

  getExperience: async function(id) {
    return request(ENDPOINTS.EXPERIENCES+"/"+id);
  },

  getUser: async function() {
    return request(ENDPOINTS.USERS);
  },
  getUserConnected: async function(id) {
    return request(ENDPOINTS.USERS+"/"+id);
  }
};
