<template lang="pug">
  .header__content
    .header__content-left
      a(href="/").header__logo
        h1.header__title fashion
        h3.header__subtitle tagline here
      nav.header__nav
        ul.header__list
          li.header__item
            a(href="#" onclick="return false").header__link home
          li.header__item
            a(href="#" onclick="return false").header__link shop
          li.header__item
            a(href="#" onclick="return false").header__link women
          li.header__item
            a(href="#" onclick="return false").header__link men
          li.header__item
            a(href="#" onclick="return false").header__link  find stores
    .header__content-right
      .header__icons
        a(href="#" onclick="return false").header__icon
          include shopping.svg
        a(href="#" onclick="return false").header__icon
          include search.svg
        a(href="#" onclick="return false").header__icon
          include menu.svg
</template>

<script>

  import './index.sass'

  export default {
    data(){
      return {
      }
    }
  }

</script>
