<template>
  <section>
      <div class="max-w-screen-lg mx-auto post-list">
        <post-item v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node" />
      </div>
      <pagination :base="`${$page.tag.path}`" :info="$page.tag.belongsTo.pageInfo" v-if="$page.tag.belongsTo.pageInfo.totalPages > 1" />
  </section>
</template>

<script>
import moment from 'moment'
import config from '~/.temp/config.js'
import PostItem from '@/components/PostItem'
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
