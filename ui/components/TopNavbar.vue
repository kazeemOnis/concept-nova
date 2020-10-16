<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar__minimize">
        <button class="btn" @click="minimize">
          <i class="mdi" :class="icon"></i>
        </button>
      </div>

      <div class="navbar-brand align-center">
        <a class="navbar-header">
          {{ pageTitle }}
        </a>

        <a
          role="button"
          @click="toggle"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */

import { mapGetters } from 'vuex';

export default {
  props: {
    pageTitle: {
      type: String,
      default: '',
    },
  },

  computed: {
  },

  data() {
    return {
      icon: 'mdi-dots-vertical',
      view: 1,
    };
  },

  methods: {
    minimize() {
      if (this.view === 1) {
        this.icon = 'mdi-format-list-bulleted';
        this.view = 2;
      } else {
        this.icon = 'mdi-dots-vertical';
        this.view = 1;
      }
      this.$emit('changeSideView');
    },

    toggle() {
      this.$emit('toggleView');
    },
  },
};
</script>

<style>

</style>
