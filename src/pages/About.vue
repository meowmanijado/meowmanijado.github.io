<template>
  <Layout>
    <main>
      <header class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto text-center px-6 pt-24">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">About</h1>
        <p class="text-grey-dark text-lg sm:text-3xl">Creatively writing code with a dash of adventure. ✨</p>
      </header>
      <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
        <g-link to="/" class="text-gray-900 border-gray-400 text-sm border opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity duration-300">&larr; Home</g-link>
      </nav>
      <article class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-16 border-b border-gray-300 pb-10 mb-16">
        <div class="markdown text-lg leading-normal text-gray-700">
          <p>Hello! I'm Meow :3 I am web developer based from Manila.</p>
          <p>I write apps using <strong>Laravel</strong> and <strong>Vue JS</strong>. I started in this field 8 years ago, after I graduated I got the job from my internship as a WordPress Developer. From then I jumped to creating ecommerce sites using WooCommerce, Prestashop and Magento. Early last year, I've landed a job that creates apps that can extends my knowledge in LAMP stack.</p>
          <hr>
          <p><strong>About this blog</strong></p>
          <p>I write becuase this is my weakness, I'm not good in communicating, always stuttered talking to someone in english. And as other bloggers said, this is my way to express my dump of thoughts, learnings and share the lessons from the books, if it's worth sharing!</p>
          <p><strong>Stuffs~</strong></p>
          <p>Aside from writing codes and stuffs I also love mountain climbing, running, planting and reading books. My favorite genre is classic! Other stuffs that pique my interest are coffee brewing, building gunpla, watching a lot of movies and series. I also serve in Technical Ministry in our local church. And also involved in environmental activities like tree planting and nurturing, and doing outreach to Indigenous People.</p>
          <p>I am currently learning sign language and TDD Testing in PHP.</p>
        </div>
      </article>
      <site-footer class="pb-8 sm:pb-10" />
    </main>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import SiteFooter from '@/components/Footer'

export default {
  components: {
    SiteFooter
  },
  metaInfo () {
    return {
      title: 'About',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.ogDescription
        },

        { property: "og:type", content: 'article' },
        { property: "og:title", content:'About' },
        { property: "og:description", content: this.ogDescription },
        { property: "og:url", content: `${this.config.siteUrl}/about/` },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: 'About' },
        { name: "twitter:description", content: this.ogDescription },
        { name: "twitter:site", content: "@meowmanijado" },
        { name: "twitter:creator", content: "@meowmanijado" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
  computed: {
    config () {
      return config
    },
    ogDescription () {
      return 'Introduction to the Bleda blog starter for Gridsome.'
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/meow-card.png`
    }
  },
}
</script>
