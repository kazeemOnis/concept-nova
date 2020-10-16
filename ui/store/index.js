/* eslint-disable global-require */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import {
  getsession,
  savesession,
} from '../utils/auth';

export const state = () => ({
  pageTitle: '',
});

export const mutations = {
  setPageTitle(state, data) {
    state.pageTitle = data;
  },
};

export const actions = {

};
