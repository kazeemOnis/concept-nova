<template>
  <div :class="[sideBarView, navbarView]">
    <div class="wrapper">
      <side-bar
        @logout="logout"/>
      <div class="main-panel">
        <top-navbar
          :pageTitle="pageTitle"
          @changeSideView="changeSideView"
          @toggleView="toggleView"/>
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import { mapState } from 'vuex';
import TopNavbar from '../components/TopNavbar.vue';
import SideBar from '../components/SideBar.vue';
import { Toast } from '../utils/helpers';

export default {
  components: { TopNavbar, SideBar },

  data() {
    return {
      sideBarView: '',
      navbarView: '',
    };
  },

  computed: {
    ...mapState(['pageTitle']),
  },

  methods: {
    changeSideView() {
      if (_.isEqual(this.sideBarView, '')) {
        this.sideBarView = 'sidebar-mini';
      } else this.sideBarView = '';
    },

    toggleView() {
      this.sideBarView = '';
      if (_.isEqual(this.navbarView, '')) {
        this.navbarView = 'nav-open';
      } else this.navbarView = '';
    },

    async logout() {
      const res = await this.$store.dispatch('userAuth/logout');
      if (res) {
        Toast(this, 'Successfully Logged Out', 'is-success', 'is-top');
        setTimeout(() => this.$router.push(route), 1000);
      }
    },
  },

  watch: {
    $route(to) {
      if (to) {
        if (this.navbarView === 'nav-open') {
          this.navbarView = '';
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/style.scss";
</style>
