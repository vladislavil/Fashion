<template lang="pug">
.products
  .container
    .products__content
      .products__title featured products
      ul.products__list
        li.products__item(v-for="title in titles")
          a.products__lnk(href="#" onclick="return false") {{ title }}
      .products__row
        .products__card(v-for="item in productsItems")
          a(href="#" onclick="return false").products__wrapper
            .products__img-wrapper
              img.products__img( :src="item.img" )
            .products__text {{ item.text }}
            .products__brend {{ item.brend }}
            .products__prices
              .products__old-price {{ item.oldPrice }}
              .products__new-price {{ item.newPrice }}
</template>

<script>

  import './index.sass'

  export default {
    data() {
      return {

      }
    },
    props: ["titles", "productsItems"]
  }

</script>
