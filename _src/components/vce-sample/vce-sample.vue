<template lang='pug'>
.vce-sample(v-if="posts")
  .vce-sample__posts
    .card(v-for="i in posts")
      .card-content
        .v-img
          .v-img-bg(v-lazy:background-image="setImg()")
        p.title.is-5 {{ i.title }}
        p {{ i.body }}
      footer.card-footer
        p.card-footer-item
          span
            | View on
            a(href='#') Twitter
        p.card-footer-item
          span
            | Share on
            a(href='#') Facebook

</template>
<script>
import {store, types} from '@vue/store';
import {mapState} from 'vuex';
import Sugar from 'sugar';

export default {
  store,
  props: {
    api: String,
  },
  computed: mapState([
    'posts',
  ]),
  mounted() {
    store.dispatch(types.SET_POSTS, this.api);
  },
  methods: {
    setImg() {
      let w = Sugar.Number.random(400, 800);
      let h = Sugar.Number.random(400, 800);
      return `http://placeimg.com/${w}/${h}/any`;
    },
  },
};
</script>
