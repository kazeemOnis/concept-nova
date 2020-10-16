/* eslint-disable no-empty-pattern */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import {
  savesession,
  getsession,
  removesession,
} from '../utils/auth';

import { copy } from '../utils/helpers';

export const state = () => ({
  isAuthenticated: getsession('isAuthenticated') || false,
  token: getsession('token') || '',
});

export const mutations = {
  setAuth(state, data) {
    savesession('isAuthenticated', data);
    state.isAuthenticated = data;
  },

  removeAuth(state) {
    state.isAuthenticated = false;
    removesession('isAuthenticated');
    removesession('token');
  },

  setToken(state, data) {
    savesession('token', data);
    state.token = data;
  },

  removeToken() {
    removesession('token');
    state.token = null;
  },
};

export const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  },

  hasToken(state) {
    return state.token;
  },
};

export const actions = {
  async login({ commit }, params) {
    try {
      const {
        message, code
      } = await this.$axios.$post('api/v1/login', params);
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

  async logout({ commit }) {
    try {
      commit('removeAuth');
    } catch (error) {
      console.log('An error occurred', error);
    }
  },
};
