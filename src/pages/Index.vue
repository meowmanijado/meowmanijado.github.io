<template>
  <Layout class="bg-white">
    <main class="max-w-screen-lg mx-auto">
        <div class="flex items-center flex-col-reverse lg:flex-row md:flex-row lg:mx-0 mx-10">
          <div class="lg:w-3/5 md:w-3/5 w-full">
            <h1 class="logo">
              <g-link to="/" class="no-underline">@meowmanijado</g-link>
            </h1>

            <p>Web Developer based from Manila. I love building solutions and  
                solving things together with code and design. Most of my <g-link to="/projects" >projects</g-link> are  primarily focused on Laravel and Vue JS. In my spare time I enjoy doing <a href="/projects">side projects</a> and <g-link to="/writings">write</g-link> about coding, daily learnings & musings.</p>
            <p>Outside programming, I also love running, mountain climbing  and reading books.</p>
                
            <p>Formerly Senior Developer at Traxion Tech. Inc. && Frontend Web Engineer at Wishland Software Technology Inc. </p>

            <h4 class="font-bold mt-16 text-gray text-xs">ELSEWHERE</h4>
            <div class="text-sm mt-3">
              <a href="https://github.com/meowmanijado" target="_blank">GitHub</a> · <a href="https://twitter.com/meowmanijado" target="_blank">Twitter</a> · <a href="https://www.linkedin.com/in/sharmaine-manijado/" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
    </main>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import SiteFooter from '@/components/Footer'
import PostItem from '@/components/PostItem'
import Pagination from '@/components/Pagination'

export default {
  components: {
    PostItem,
    Pagination,
    SiteFooter,
  },
  metaInfo () {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        { property: "og:type", content: 'website' },
        { property: "og:title", content: this.$static.metadata.siteName },
        { property: "og:description", content: this.$static.metadata.siteDescription },
        { property: "og:url", content: this.$static.metadata.siteUrl },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$static.metadata.siteName },
        { name: "twitter:description", content: this.$static.metadata.siteDescription },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
  computed: {
    config () {
      return config
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/bleda-card.png`
    }
  },
}
</script>

<page-query>
  query Home ($page: Int) {
    posts: allPost (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          timeToRead
          datetime: date (format: "YYYY-MM-DD HH:mm:ss")
          content
          excerpt
          description
          path
          cover
          tags {
            id
            title
            path
          }
          author {
            id
            title
            path
          }
        }
      }
    }
  }
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>
