<template>
    <header class="flex justify-between items-center lg:mx-0 mx-10 pt-16">
        <h1 class="logo-sub">
            <g-link to="/" class="no-underline">@meowmanijado</g-link>
        </h1>
        <nav class="flex justify-center">
            <button @click="toggleMenu()" style="position: absolute; z-index: 999; outline: none; margin-top: -8px;">
                <div class="nav-icon" :class="{open: isOpen}">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div v-visible="isOpen" :class="{active: isOpen}" class="header-menu">
                <ul class="leading-loose">
                    <li><g-link to="/">Home</g-link></li>
                    <li><g-link to="/writings">Writings</g-link></li>
                    <li><g-link to="/projects">Projects</g-link></li>
                    <li><a href="mailto:sharmainemanijado@gmail.com">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>

export default {
  name: 'Header',

  data() {
      return {
          isOpen: false
      }
  },

  methods: {
      toggleMenu() {
          this.isOpen = !this.isOpen
          this.$emit('clicked', this.isOpen)
      }
  },

  directives: {
    visible: {
      function (el, binding) {
        el.style.visibility = !!binding.value ? 'visible' : 'hidden'
      }
    }
  }
}
</script>
<style>
.header-menu {
  @apply w-full absolute left-0 top-0 flex items-center justify-center text-2xl;

  background-color: #1d1d1f;
  height: 0px;
  transition: 0.3s;
}

.header-menu.active {
    @apply h-screen;
}

.header-menu.inactive {
    height: 0px;
}

.header-menu ul li {
    @apply text-center
}

.header-menu ul li a {
    @apply text-white
}

.header-menu ul li a:hover {
    color: #22292f;
    background: #fff;
    text-decoration: none;
    font-weight: normal;
}

.nav-icon {
  width: 34px;
  height: 21px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

.nav-icon span {
  display: block;
  position: absolute;
  height: 3px;
  width: 50%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

.nav-icon span {
    display: block;
    position: absolute;
    height: 3px;
    width: 50%;
    background: #1d1d20;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

.nav-icon.open span {
    background-color: #ffffff;
}

.nav-icon span:nth-child(even) {
  left: 50%;
  border-radius: 0 9px 9px 0;
}

.nav-icon span:nth-child(odd) {
  left: 0px;
  border-radius: 9px 0 0 9px;
}

.nav-icon span:nth-child(1), .nav-icon span:nth-child(2) {
  top: 0px;
}

.nav-icon span:nth-child(3), .nav-icon span:nth-child(4) {
  top: 9px;
}

.nav-icon span:nth-child(5), .nav-icon span:nth-child(6) {
  top: 19px;
}

.nav-icon.open span:nth-child(1),
.nav-icon.open span:nth-child(6) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.nav-icon.open span:nth-child(2),
.nav-icon.open span:nth-child(5) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.nav-icon.open span:nth-child(1) {
  left: 5px;
  top: 7px;
}

.nav-icon.open span:nth-child(2) {
  left: calc(50% - 5px);
  top: 7px;
}

.nav-icon.open span:nth-child(3) {
  left: -50%;
  opacity: 0;
}

.nav-icon.open span:nth-child(4) {
  left: 100%;
  opacity: 0;
}

.nav-icon.open span:nth-child(5) {
    left: 5px;
    top: 15px;
}

.nav-icon.open span:nth-child(6) {
    left: calc(50% - 3px);
    top: 16px;
}
</style>