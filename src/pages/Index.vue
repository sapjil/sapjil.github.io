<template>
  <Layout>
    
    <section class="posts">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
      <div class="pagenav">
        <Pager :info="$page.allPost.pageInfo"/>
      </div>
    </section>

  </Layout>
</template>

<script>
import PostList from "@/components/PostList";
import { Pager } from "gridsome";

export default {
  components: {
    PostList,
    Pager
  },
  metaInfo: {
    title: "웹 사이트 제작에 필요한, 삽질을 줄일 수 있는 정보를 공유하고자 합니다."
  }
};
</script>

<page-query>
query Posts ($page: Int) {
  allPost(perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "YYYY/MM/DD")
        path
      }
    }
  }
}
</page-query>
