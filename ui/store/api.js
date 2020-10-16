/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import {
  getsession,
  removesession,
} from '../utils/auth';

export const state = () => ({
  error: null,
  token: getsession('token'),
  isAuthenticated: getsession('isAuthenticated') || false,
});

export const mutations = {
  removeAuth(state) {
    state.isAuthenticated = false;
    removesession('isAuthenticated');
    removesession('token');
  },
};

export const actions = {
  async getResource({ commit }, params) {
    try {
      const { route = '' } = params;
      const { code, message } = await this.$axios.get(`${route}`);
      if (code === 200) {
        return message;
      }
    } catch (error) {
      console.log('An error occured');
    }
  },

  async getSite({ state, commit }, params) {
    try {
      const {
        message, code
      } = await this.$axios.$get(`api/v1/sites/?token=${state.token}`);
      console.log(code);
      if (code === 200) {
        commit('setAuth', true);
        commit('setToken', message.token);
        return {
          code, message,
        };
      }
      return {
        code, message,
      };
    } catch (error) {
      const { response: { message } } = error;
      return message;
    }
  },

};
