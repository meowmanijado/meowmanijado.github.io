<template>
  <article class="lg:flex items-center border-b h-screen">
    <div class="w-full lg:w-1/2 article-img">
      <img :src="post.cover" />
    </div>
    <div class="w-full lg:w-1/2 px-6">
      <div class="py-8 sm:py-20">
        <header class="text-center mb-8">
          <h2 class="leading-tight font-sans mb-1 sm:mb-2 text-lg uppercase">
            <g-link :to="`${post.path}/`" class="text-black font-bold">{{ post.title }}</g-link>
          </h2>
          <p class="text-gray-700 leading-normal text-sm sm:text-base">
            <span v-if="post.tags && post.tags.length > 0"> in <g-link :to="`${post.tags[0].path}/`" class="text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-colors duration-300">{{ titleCase(post.tags[0].title) }}</g-link></span>
            <span v-if="post.author || (post.tags && post.tags.length > 0)"> · </span>
            <span class="text-xs">{{ post.timeToRead }} min read</span>
          </p>
        </header>
        <p class="leading-normal text-gray-700 px-2 sm:px-4 md:px-10" v-html="excerpt(post, 280, ' ...')"></p>
      </div>
    </div>
  </article>
</template>

<script>
import moment from 'moment'

export default {
  props: ['post'],
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format('DD MMMM, YYYY');
    },
  },
  methods: {
    formatPublishDate(date) {
      return moment(date).format('DD MMMM, YYYY');
    },
    excerpt(post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt
      }

      length = length || 280
      clamp = clamp || ' ...'
      let text = post.content.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')

      return text.length > length ? `${ text.slice(0, length)}${clamp}` : text
    },
    titleCase(str) {
      return str.replace('-', ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    }
  },
}
</script>
<style>
.article-img img {
  @apply shadow-2xl
}
</style>
