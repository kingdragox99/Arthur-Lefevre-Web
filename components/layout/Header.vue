<template lang="pug">
header.font-inco.bg-background.flex.flex-col.items-center.px-4.py-4.md_text-xl
  .flex.justify-between.items-center.mb-3.w-full.lg_w-1of2.xl_w-1of3
    label.swap.swap-rotate.w-14.md_w-28
      input(type='checkbox' @click='toggleTheme')
      IconMoon.swap-off.w-6
      IconSun.swap-on.w-6
    Logo.w-1of2.fill-white.md_w-1of2
    .dropdown.dropdown-end.w-14.md_w-28
      label.btn.border-none.flex.justify-center.items-center(tabindex='0')
        Icon(name='majesticons:translate' size='1.5rem')
      ul.dropdown-content.menu.p-2.shadow.bg-neutral.rounded-box.w-52(
        tabindex='0'
      )
        li.hover_bg-background
          NuxtLink(to='/') English
        li.hover_bg-background
          NuxtLink(to='/fr') Français
  nav.w-full.md_w-auto
    ul.flex.justify-around
      li
        a.hover_text-primary.m-2(href='#about' aria-label='go to about') {{ $t('pages.header.about') }}
      li
        a.hover_text-primary.m-2(
          href='#experience'
          aria-label='go to experience'
        ) {{ $t('pages.header.experience') }}
      li
        a.hover_text-primary.m-2(href='#projects' aria-label='go to projects') {{ $t('pages.header.projects') }}
      li
        a.hover_text-primary.m-2(href='#contact' aria-label='go to contact') {{ $t('pages.header.contact') }}
</template>

<script setup>
import Logo from '@@/assets/svg/logo-w.svg';
import IconSun from '@/assets/icons/sun.svg';
import IconMoon from '@/assets/icons/moon.svg';

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>
