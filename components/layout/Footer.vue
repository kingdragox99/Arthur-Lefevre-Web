<template lang="pug">
footer.px-4.py-4
  nav.w-full.mb-4
    ul.flex.justify-evenly
      li
        a.linkhover(href='https://github.com/kingdragox99' target='_blank')
          Icon(name='mdi:github-box' size='2.5rem')
      li
        a.linkhover(href='https://twitter.com/ArthurLDev' target='_blank')
          Icon(name='mdi:twitter-box' size='2.5rem')
      li
        a.linkhover(
          href='https://www.linkedin.com/in/arthur-lefevre/'
          target='_blank'
        )
          Icon(name='mdi:linkedin' size='2.5rem')
  h2.text-center.font-bold.text-primary.font-inco Designed & Built by Arthur Lefevre
</template>

<script lang="ts" setup></script>
