<template>
  <article>
    <g-link :to="`${post.path}/`" class="text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-colors duration-300">{{ post.title }}</g-link> in <span v-if="post.tags && post.tags.length > 0" class="post-category"> <g-link :to="`${post.tags[0].path}/`" class="text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-colors duration-300 no-underline">{{ titleCase(post.tags[0].title) }}</g-link></span> ·
    <time :datetime="post.datetime" class="time">{{ formatPublishDate(post.datetime) }}</time>
    <span class="ml-2">{{ post.timeToRead }} min read</span>
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
