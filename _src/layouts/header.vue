<template lang='pug'>
header.hero.is-primary
  .hero-body
    .container.has-text-centered
      h1.title
        | {{ vars.appName }}
      h2.subtitle
        | Primary subtitle
</template>
<script>
import {mapState} from 'vuex';
export default {
  computed: mapState([
    'vars',
  ]),
};
</script>
<style lang='sass'></style>
