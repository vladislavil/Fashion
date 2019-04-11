<template lang="pug">
  .socials
    .socials__content
      ul.socials__list
        li.socials__item
          a(href="#" onclick="return false").socials__link
            include facebook.svg
        li.socials__item
          a(href="#" onclick="return false").socials__link
            include twitter.svg
        li.socials__item
          a(href="#" onclick="return false").socials__link
            include google.svg
        li.socials__item
          a(href="#" onclick="return false").socials__link
            include instagram.svg
      .socials__text follow us

</template>

<script>

  import './index.sass'

  export default {
    data() {
      return {

      }
    },
  }

</script>
