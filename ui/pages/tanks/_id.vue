<template>
  <section class="custom-section page">
    <div class="container">
      <div class="page__section">
        <h3 class="page__heading">General</h3>

        <div class="page__form">
          <b-field
            horizontal
            label="Name*"
            :type="errors.has('name') ? 'is-danger': ''"
            :message="errors.first('name')"
          >
            <b-input
              name="name"
              expanded
              disabled
              v-validate="'required'"
              v-model="form.tank_name"
            />
          </b-field>

          <b-field
            horizontal
            label="Capacity"
            :type="errors.has('capacity') ? 'is-danger': ''"
            :message="errors.first('capacity')"
          >
            <b-input
              name="capacity"
              expanded
              type="number"
              disabled
              v-validate="'required'"
              v-model="form.tank_capacity"
            />
          </b-field>

          <b-field
            horizontal
            label="Volume"
            :type="errors.has('volume') ? 'is-danger': ''"
            :message="errors.first('volume')"
          >
            <b-input
              name="volume"
              expanded
              type="number"
              disabled
              v-validate="'required'"
              v-model="form.tank_current_volume"
            />
          </b-field>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import { mapState } from 'vuex';
import { Toast } from '../../utils/helpers';

export default {
  async asyncData({ store, params, query }) {
    store.commit('setPageTitle', 'View a tank');
    const { token } = store.state.userAuth;
    const form = await store.dispatch('api/getResource', {
      route: `api/v1/sites/${query.site_id}/${params.id}?token=${token}`,
    });

    return { form };
  },

  data() {
    return {
      loading: '',
    };
  },

  computed: {
    ...mapState('userAuth', ['token']),
  },

  methods: {
  },
};
</script>

<style>

</style>
