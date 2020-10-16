<template>
  <div class="signup">
    <section class="section">
      <div class="container">
        <div class="signup__logo">
          <nuxt-link to="/login">
            <img src="/img/logo.png" width="180" alt="Concept-nova Logo"/>
          </nuxt-link>
        </div>

        <div class="signup__text">
          <h1>Sign In</h1>
        </div>

        <div class="signup__field">
          <div class="notification" v-if="auth.toggle" :class="auth.type">
            <div class="columns is-mobile align-center">
              <div class="column is-1">
                <i class="mdi" :class="auth.icon"/>
              </div>
              <div class="column has-text-centered">
                {{ auth.message }}
              </div>
            </div>
          </div>

          <form>
            <b-field :type="errors.has('email') ? 'is-danger': ''" :message="errors.first('email')">
              <b-input
                name="email"
                v-validate="'required|email'"
                v-model="form.email"
                placeholder="Email"
              />
            </b-field>

            <b-field
              :type="errors.has('password') ? 'is-danger': ''"
              :message="errors.first('password')"
            >
              <b-input
                type="password"
                name="password"
                v-validate="'required'"
                id='passwordInput'
                password-reveal
                v-model="form.password"
                placeholder="Password"
              />
            </b-field>
          </form>

        </div>

        <div class="signup__action">
          <button
            class="button"
            @click="login"
            :class="loading">
            Sign In
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapState, mapMutations } from 'vuex';

export default {
  layout: 'register',

  async asyncData({ query }) {
    const { reason } = query;
    return { reason };
  },

  data() {
    return {
      auth: {
        toggle: false,
        message: '',
        type: '',
        icon: '',
      },
      form: {},
      loading: '',
    };
  },

  computed: {
    ...mapState('userAuth', ['user']),
  },

  methods: {
    async login() {
      const result = await this.$validator.validateAll();
      if (result) {
        this.loading = 'is-loading';
        this.auth = {
          type: '', toggle: false, message: '', icon: '',
        };
        try {
          const { code, message = 'Could not connect to the server. please check your connection and try again.' } = await this.$store.dispatch('userAuth/login', this.form);
          if (code === 200) {
            this.auth = {
              type: 'success',
              toggle: true,
              message: 'Successfully logged in',
              icon: 'mdi-check-outline',
            };
            this.loading = '';
            setTimeout(() => this.$router.push('/sites'), 2000);
          } else {
            this.auth = {
              type: 'error',
              toggle: true,
              message,
              icon: 'mdi-alert-outline',
            };
            this.loading = '';
          }
        } catch (error) {
          this.auth = {
            type: 'error',
            toggle: true,
            message: 'Could not connect to the server. please check your connection and try again.',
            icon: 'mdi-alert-outline',
          };
          this.loading = '';
        }
      }
    },
  },
};
</script>

<style>
</style>
