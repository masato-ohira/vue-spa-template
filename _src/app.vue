<template lang='pug'>
.v-app
  Header
  .v-app__cont
    VceSample(api='//jsonplaceholder.typicode.com/posts/')

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
