<template lang="pug">

  .container
    .nav-panel__content
      .nav-panel__col(v-for="(item, index) in navItems")
        .nav-panel__title {{item.title}}
        ul.naw-panel__list
          li.nav-panel__item
            a.nav-panel__link(href="#" onclick="return false") {{item.text1}}
          li.nav-panel__item
            a.nav-panel__link(href="#" onclick="return false") {{item.text2}}
          li.nav-panel__item
            a.nav-panel__link(href="#" onclick="return false") {{item.text3}}
          li.nav-panel__item
            a.nav-panel__link(href="#" onclick="return false") {{item.text4}}
          li.nav-panel__item
            a.nav-panel__link(href="#" onclick="return false") {{item.text5}}

      .nav-panel__col
        .nav-panel__title contacts details
        ul.naw-panel__list
          li.nav-panel__item
            span.nav-panel__strong Teephone: &nbsp;
            a.nav-panel__link(href="#" onclick="return false") {{contactItems.telephone}}
          li.nav-panel__item
            span.nav-panel__strong Email: &nbsp;
            a.nav-panel__link(href="#" onclick="return false") {{contactItems.email}}
          li.nav-panel__item
            span.nav-panel__strong Head Office: &nbsp;
            a.nav-panel__link(href="#" onclick="return false") {{contactItems.office}}

</template>

<script>

  import './index.sass'

  export default {
      props: ["navItems", "contactItems"]
  }

</script>
