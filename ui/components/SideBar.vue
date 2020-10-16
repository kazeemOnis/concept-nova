<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <nuxt-link to="/" class="logo-mini simple-text">
        <div class="sidebar__logo-img">
          <img src="/img/logo.png" alt="Concept-Nova Logo">
        </div>
      </nuxt-link>
      <nuxt-link to="/" class="simple-text sidebar__logo-text">Concept-Nove</nuxt-link>
    </div>
    <div class="sidebar__menu">
      <div class="container-scroll">
        <div class="sidebar__user">
          <div class="sidebar__user-photo">
            <img src="/img/logo.png" alt="Concept-Nova Logo">
          </div>

          <div class="sidebar__user-info">
            <div class="collapse-button">
              <p>Concept Nova</p>
            </div>
          </div>
        </div>

        <ul class="nav">
          <li>
            <nuxt-link to="/sites" class="nav-link">
              <i class="mdi mdi-web"/>
              <p class="nav-text">Sites</p>
            </nuxt-link>
          </li>

          <li>
            <a class="nav-link" @click="logout">
              <i class="mdi mdi-logout"/>
              <p class="nav-text">Logout</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */

import { mapGetters } from 'vuex';

export default {
  props: {
    user: {
      type: Object,
      default() {
        return {};
      },
    },

    business: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
  },

  methods: {
    logout() {
      this.$emit('logout');
    },
  },
};
</script>

<style>

</style>
