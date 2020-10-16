<template>
  <section class="custom-section page">
    <div class="container">

      <div class="card">
        <b-table :data="data" striped hoverable :mobile-cards="false">
          <template slot-scope="props">
            <b-table-column label="#" filed="#" width="50" centered>
              {{ props.index+1 }}
            </b-table-column>

            <b-table-column label="ID">
              <span>{{ props.row.tank_id }}</span>
            </b-table-column>

            <b-table-column label="Name">
              <span>{{ props.row.tank_name }}</span>
            </b-table-column>

            <b-table-column label="Actions" numeric>
              <div class="table-action">
                <nuxt-link class="action-button" :to="'/tanks/'+ props.row.tank_id + '?site_id=' + id">
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
  async asyncData({ store, params }) {
    const { token } = store.state.userAuth;
    store.commit('setPageTitle', 'Sites');
    const { rows: data } = await store.dispatch('api/getResource', {
      route: `api/v1/sites/${params.id}?token=${token}`,
    });

    return { data, id: params.id };
  },

  components: {
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
