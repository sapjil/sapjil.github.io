<template>
  <Layout>
    
    <section>
      
      <div class="archive-outer">
        <h1>Archive</h1>

        <ul>
          <li v-for="edge in $page.allPost.edges" :key="edge.node.id">
            {{ edge.node.date }} <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
          </li>
        </ul>
      </div>

      <div class="pagenav">
        <Pager :info="$page.allPost.pageInfo"/>
      </div>

    </section>

  </Layout>
</template>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager
  },
  metaInfo: {
    title: 'Archive'
  }
};
</script>

<page-query>
query ($page: Int) {
  allPost(perPage: 40, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "YYYY-MM-DD")
        path
      }
    }
  }
}
</page-query>

<style scoped>
.archive-outer {
  background-color: #fff;
  border-radius: .4em;
  padding: 1.5em;
  margin-bottom: 1em;
}

.archive-outer li {
  font-size: 16px;
  color: #444;
}
</style>