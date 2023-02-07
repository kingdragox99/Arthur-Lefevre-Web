<template lang="pug">
header.flex.flex-col.items-center.px-4.py-4.md_text-xl
  a.flex.justify-center(href='#about' aria-label='go to about')
    img.mb-3.px-4(
      src='/assets/svg/logo-w.svg'
      alt='logo'
      width='75%'
      height='100%'
    )
  nav.w-full.md_w-96
    ul.flex.justify-around
      li
        a.linkhover.m-2(href='#about' aria-label='go to about') About
      li
        a.linkhover.m-2(href='#experience' aria-label='go to experience') Experience
      li
        a.linkhover.m-2(href='#projects' aria-label='go to projects') Projects
      li
        a.linkhover.m-2(href='#contact' aria-label='go to contact') Contact
</template>

<script lang="ts" setup></script>
