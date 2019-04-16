<template lang="pug">

  .container
    .offer-banners__content
      .offer-banners__img( :style="{backgroundImage: 'url(' + items[flag].img + ')'}" :class="{'offer-banners__img--left': flag === 1}")
        .offer-banners__wrapper
          .offer-banners__title {{items[flag].title}}
          .offer-banners__subtitle {{ items[flag].subtitle }}
          a(href="#" onclick="return false").offer-banners__button {{ items[flag].text }}


</template>

<script>

  import './index.sass'

  export default {
      props: ["items", "flag"]
  }

</script>
