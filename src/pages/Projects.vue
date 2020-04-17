<template>
  <Layout>
    <main class="max-w-screen-lg mx-auto px-10 lg:px-0">
      <site-header />
      <p class="text-center my-16 uppercase tracking-widest text-sm">Selected Projects.</p>
      <section class="max-w-screen-lg mx-auto post-list">
        <post-item v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node" />
      </section>
      <pagination :base="`${$page.tag.path}`" :info="$page.tag.belongsTo.pageInfo" v-if="$page.tag.belongsTo.pageInfo.totalPages > 1" />
      <site-footer class="py-8 sm:py-16" />
    </main>
  </Layout>
</template>

<script>
import moment from 'moment'
import config from '~/.temp/config.js'
import PostItem from '@/components/ProjectItem'
import SiteHeader from '@/components/Header'
import SiteFooter from '@/components/Footer'
import Pagination from '@/components/Pagination'

export default {
  components: {
    PostItem,
    Pagination,
    SiteHeader,
    SiteFooter,
  },
  metaInfo () {
    return {
      title: `${this.titleCase(this.$page.tag.title)}`,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: `Browse posts tagged "${this.titleCase(this.$page.tag.title)}"`
        },

        { property: "og:type", content: 'website' },
        { property: "og:title", content: `Posts tagged "${this.titleCase(this.$page.tag.title)}"` },
        { property: "og:description", content: `Browse posts tagged "${this.titleCase(this.$page.tag.title)}"` },
        { property: "og:url", content: `${this.config.siteUrl}${this.$page.tag.path}` },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Posts tagged "${this.titleCase(this.$page.tag.title)}"` },
        { name: "twitter:description", content: `Browse posts tagged "${this.titleCase(this.$page.tag.title)}"` },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
  methods: {
    titleCase(str) {
      return str.replace('-', ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
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
query Tag ($page: Int) {
  tag (path: "/tag/projects/") {
    id
    title
    path
    belongsTo (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            id
            title
            cover
            datetime: date (format: "YYYY-MM-DD HH:mm:ss")
            path
            content
            excerpt
            description
            timeToRead
            author {
              id
              title
              path
            }
          }
        }
      }
    }
  }
}
</page-query>
