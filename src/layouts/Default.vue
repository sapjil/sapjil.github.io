<template>
  <div>

    <!-- <h1 class="site-desc">{{ $static.metadata.siteDescription }}</h1> -->

    <div class="layout">
      
      <HeaderPartial/>

      <main>
        <slot/>
      </main>

      <FooterPartial/>

    </div>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from '~/layouts/Header.vue'
import FooterPartial from '~/layouts/Footer.vue'

export default {
  components: {
    HeaderPartial,
    FooterPartial
  }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #eee;
}

mark {
  background-color: #fcf8e3;
}

pre {
  width: 100%;
  overflow-x: auto;
}

pre code {
  display: block;
  padding: .5em;
  border-radius: 0;
}

code {
  border: 1px solid #e2e8f0;
  background-color: #f7fafc;
  border-radius: .3em;
  font-size: .75em;
  display: inline-block;
  padding: 0.25em;
  vertical-align: baseline;
}

blockquote p {
  color: #cc2a41;
}

a {
  text-decoration: none;
  color: #cc2a41;
}

a:hover,
a:focus {
  text-decoration: underline;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
}

.layout iframe {
  border: 1px solid #ddd;
}

.site-desc {
  text-align: center;
}

.header {
  text-align: center;
}

.site__title,
.site__description {
  margin-bottom: 0;
}

.header__innerbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
}

.nav__link {
  /* margin-left: 20px; */
}
</style>
