<template lang="pug">
header.flex.flex-col.items-center.px-4.py-4
  a.flex.justify-center(href='#about')
    img.mb-3.px-4(
      src='/assets/svg/logo-w.svg'
      alt='logo'
      width='75%'
      height='100%'
    )
  nav.w-full
    ul.flex.justify-around
      li
        a.linkhover(href='#about') About
      li
        a.linkhover(href='#experience') Experience
      li
        a.linkhover(href='#projects') Projects
      li
        a.linkhover(href='#contact') Contact
</template>

<script lang="ts" setup></script>
