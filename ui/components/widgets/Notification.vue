<template>
<div class="notification" v-if="data.toggle" :class="data.type">
    <div class="columns is-mobile align-center">
      <div class="column is-1">
        <i class="mdi" :class="data.icon"/>
      </div>
      <div class="column has-text-centered" v-html="data.message" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>

</style>
