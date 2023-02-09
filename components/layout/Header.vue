<template lang="pug">
.drawer.drawer-end
  input#drawer.drawer-toggle(type='checkbox')

  .drawer-content
    header.px-4.py-4.bg-other.grid.grid-cols-10.mb-3.w-full.place-items-center.bg-other
      label.btn.btn-circle.drawer-button(for='drawer')
        Menu
      Logo.w-full.fill-logo.col-start-5.col-end-7
  .drawer-side
    label.drawer-overlay(for='drawer')
    .bg-other.w-1of5.shadow-lg.mt-10
      nav
        ul.text-center
          li.mb-4.text-xl.bg-neutral.p-2.m-2.rounded-3xl.hover_bg-background
            a.m-2(href='#about' aria-label='go to about') {{ $t('pages.header.about') }}
          li.mb-4.text-xl.bg-neutral.p-2.m-2.rounded-3xl.hover_bg-background
            a.m-2(href='#experience' aria-label='go to experience') {{ $t('pages.header.experience') }}
          li.mb-4.text-xl.bg-neutral.p-2.m-2.rounded-3xl.hover_bg-background
            a.m-2(href='#projects' aria-label='go to projects') {{ $t('pages.header.projects') }}
          li.mb-4.text-xl.bg-neutral.p-2.m-2.rounded-3xl.hover_bg-background
            a.m-2(href='#contact' aria-label='go to contact') {{ $t('pages.header.contact') }}
      .flex.justify-center
        .dropdown.dropdown-end
          label.btn.border-none.flex.justify-center.items-center.hover_text-primary(
            tabindex='0'
          )
            Icon(name='majesticons:translate' size='1.5rem')
          ul.dropdown-content.menu.p-2.shadow.bg-neutral.rounded-box.w-52(
            tabindex='0'
          )
            li.hover_bg-background
              NuxtLink(to='/') English
            li.hover_bg-background
              NuxtLink(to='/fr') Français
        label.swap.swap-rotate.w-14.hover_text-primary(for='mode')
          input#mode(
            type='checkbox'
            @click='toggleTheme'
            aria-label='Change mode'
          )
          IconMoon.swap-off.w-6
          IconSun.swap-on.w-6
</template>

<script setup>
import Logo from '@@/assets/svg/logo-w.svg';
import IconSun from '@/assets/icons/sun.svg';
import IconMoon from '@/assets/icons/moon.svg';
import Menu from '@/assets/icons/menu.svg';

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>
