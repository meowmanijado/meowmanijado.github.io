<template>
  <footer class="flex flex-wrap justify-between leading-normal max-w-screen-lg mx-auto px-5 py-8 sm:py-16 text-gray-700 text-sm">
    <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
      <p>Built with <a href="https://gridsome.org" class="border-b border-transparent hover:font-bold transition-colors duration-300">Gridsome</a> &amp; <a href="https://tailwindcss.com/" class="border-b border-transparent hover:font-bold transition-colors duration-300">Tailwind CSS</a>.</p>
    </div>
    <div class="w-full sm:w-1/2">
      <nav>
      <p class="flex sm:justify-end">Contact me at <a href="mailto:sharmainemanijado@gmail.com" class="block ml-2">sharmainemanijado@gmail.com</a></p>
        <ul class="flex sm:justify-end hidden">
          <li class="px-2">
            <g-link to="/" class="border-b border-transparent hover:font-bold transition-colors duration-300">Home</g-link>
          </li>
          <li class="px-2">
            <g-link to="/about/" class="border-b border-transparent hover:font-bold transition-colors duration-300">About</g-link>
          </li>
          <li class="px-2">
            <g-link to="/projects/" class="border-b border-transparent hover:font-bold transition-colors duration-300">Projects</g-link>
          </li>
          <li class="px-2">
            <g-link to="/writings/" class="border-b border-transparent hover:font-bold transition-colors duration-300">Writings</g-link>
          </li>
          <li class="px-2">
            <g-link to="/about/" class="border-b border-transparent hover:font-bold transition-colors duration-300">Contact</g-link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
}
</script>
