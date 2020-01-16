<template>
  <Layout>

    <!-- <div class="back">
      <g-link to="/" class="link">  &larr; Go Back</g-link>
    </div> -->
    
    <div class="post-outer">

      <div class="post-title">
        <h1>{{$page.post.title}}</h1>
        
        <p class="post-date"> {{ $page.post.date}} | {{$page.post.timeToRead}} min read</p>
      </div>
      
      <div class="post-content">
        <section v-html="$page.post.content" />
      </div>

      <Adsense
        class="mb-5"
        ad-client="ca-pub-6250165231176696"
        ad-slot="4113873473"
        ad-style="display:block !important;"
        ad-format="auto">
      </Adsense>
    </div>

    <div class="post-comment">
      <vue-disqus shortname="sapjil" :identifier="$page.post.title"></vue-disqus>
    </div>

  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "YYYY/MM/DD")
    timeToRead
  }
}
</page-query>

<script>
import Adsense from '~/components/Adsense.vue';

export default {
  components: {
    Adsense
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>