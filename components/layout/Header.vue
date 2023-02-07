<template lang="pug">
header.font-inco.bg-background.flex.flex-col.items-center.px-4.py-4.md_text-xl
  a.flex.justify-center(href='#about' aria-label='go to about')
    Logo.w-64.mb-3.fill-white
  nav.w-full.md_w-auto
    ul.flex.justify-around
      li
        a.linkhover.m-2(href='#about' aria-label='go to about') {{ $t('pages.header.about') }}
      li
        a.linkhover.m-2(href='#experience' aria-label='go to experience') {{ $t('pages.header.experience') }}
      li
        a.linkhover.m-2(href='#projects' aria-label='go to projects') {{ $t('pages.header.projects') }}
      li
        a.linkhover.m-2(href='#contact' aria-label='go to contact') {{ $t('pages.header.contact') }}
</template>

<script setup>
import Logo from '@@/assets/svg/logo-w.svg';
</script>
