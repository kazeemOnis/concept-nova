<template>
  <section class="custom-section page">
    <div class="container">
      <notification :data="auth"/>

      <div class="card">
        <b-table :data="data" striped hoverable :mobile-cards="false">
          <template slot-scope="props">
            <b-table-column label="#" filed="#" width="50" centered>
              {{ props.index+1 }}
            </b-table-column>

            <b-table-column label="ID">
              <span>{{ props.row.site_id }}</span>
            </b-table-column>

            <b-table-column label="Name">
              <span>{{ props.row.site_name }}</span>
            </b-table-column>

            <b-table-column label="Tank Count" numeric>
              <span>{{ props.row.site_tank_count }}</span>
            </b-table-column>

            <b-table-column label="Actions" numeric>
              <div class="table-action">
                <nuxt-link class="action-button" :to="'/sites/'+ props.row.site_id">
                  <i class="mdi mdi-pencil" />
                </nuxt-link>
              </div>
            </b-table-column>
          </template>

          <template slot="empty">
            <section class="section">
              <div class="content has-text-grey has-text-centered">
                <p>
                  <i class="mdi mdi-information-outline mdi-48px" />
                </p>
                <p class="is-size-5">No Sites(s) Available</p>
              </div>
            </section>
          </template>
        </b-table>

      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */

import { mapMutations, mapState, mapGetters } from 'vuex';
import { Toast } from '../../utils/helpers';
import Notification from '../../components/widgets/Notification.vue';

export default {
  async asyncData({ store }) {
    const { token } = store.state.userAuth;
    store.commit('setPageTitle', 'Sites');
    const { message: data } = await store.dispatch('api/getSite');

    return { data };
  },

  components: {
    Notification,
  },

  data() {
    return {
      auth: {
        toggle: false,
        message: '',
        type: '',
        icon: '',
      },
      loading: '',
    };
  },

  computed: {
    ...mapState('userAuth', ['token']),
  },

  methods: {
    ...mapMutations(['setPageTitle']),
  },
};
</script>

<style>

</style>
