<template lang='pug'>
.v-app
  Header
  .v-app__cont
    VceSample

</template>
<script>
import Header from '@/layouts/header.vue';
import VceSample from '@c/vce-sample/vce-sample.vue';
export default {
  components: {
    Header,
    VceSample,
  },
};
</script>
<style lang='sass'>
.v-app
  &__cont
    padding: 30px
</style>
