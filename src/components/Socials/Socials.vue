<template lang="pug">
  .socials
    .socials__content
      ul.socials__list
        li.socials__item(v-for="(social , index) in socials")
          a(href="#" onclick="return false").socials__link
            img(:src="social")
      .socials__text follow us

</template>

<script>

  import './index.sass'

  export default {
    data() {
      return {

      }
    },
    props: ["socials"],
  }

</script>
