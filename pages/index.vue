<template lang="pug">
Header.font-inco
main.px-4.py-4.font-inco
  section#about.h-auto.w-full.mb-8
    h1.font-noto.font-bold.text-xl.text-primary.mb-4 About Me.
    p.mb-8
      | Hello, I'm
      |
      span.text-primary.underline Arthur Lefevre
      | , a junior web developer from Belgium.
      | I completed a training course at
      |
      a.text-primary.underline.linkhover(href='https://becode.org/') Becode.org
      |
      | to hone my skills.
      | My expertise lies in front-end development, using
      |
      a.text-primary.underline.linkhover(href='https://vuejs.org/') Vue.js framework.
      |
      | I have a strong understanding of HTML, CSS and JavaScript.
      | I'm passionate about creating interactive and user-friendly web applications.
    ul.grid.grid-cols-2.mb-8
      li.flex.items-center
        Icon.text-primary(name='ic:baseline-arrow-right')
        p JavaScript (ES6+)
      li.flex.items-center
        Icon.text-primary(name='ic:baseline-arrow-right')
        p TypeScript
      li.flex.items-center
        Icon.text-primary(name='ic:baseline-arrow-right')
        p Nuxt.js
      li.flex.items-center
        Icon.text-primary(name='ic:baseline-arrow-right')
        p Node.js
      li.flex.items-center
        Icon.text-primary(name='ic:baseline-arrow-right')
        p Vue.js
      li.flex.items-center
        Icon.text-primary(name='ic:baseline-arrow-right')
        p Tailwind CSS
      li.flex.items-center
        Icon.text-primary(name='ic:baseline-arrow-right')
        p MongoDB
      li.flex.items-center
        Icon.text-primary(name='ic:baseline-arrow-right')
        p Git & Github
    picture.flex.justify-center
      source(
        type='image/webp'
        src='/assets/img/me.webp'
        width='500'
        height='500'
      )
      img.rounded-3xl.w-52(
        src='/assets/img/me.jpg'
        alt='me'
        width='500'
        height='500'
      )
  section#experience.h-auto.w-full.mb-8
    h1.font-noto.font-bold.text-xl.text-primary.mb-4 Experience
    .flex.w-full.py-2.gap-2
      a.btn.btn-sm(href='#slide1') Altab
      a.btn.btn-sm(href='#slide2') Becode
    .carousel.w-full
      #slide1.carousel-item.relative.w-full.flex.flex-col
        p.font-inco.text-primary.font-bold.text-lg
          | Internship
          |
          span.font-noto.font-bold.text-secondary @ Altab
        p.font-inco.text-sm.mb-4 December 2022 - February 2023
        ul
          li.flex.mb-4
            Icon.text-primary(name='ic:baseline-arrow-right' size='1.5rem')
            p.w-4of5 
              | I did a 3 months internship at
              |
              a.text-primary.underline.linkhover(href='https://www.altab.be/') Altab
              |
              | it's a web development company, during this internship I did the front-end integration of the new website of
              |
              a.text-primary.underline.linkhover(href='https://www.verdin.be/') Verdin.be
          li.flex.mb-4
            Icon.text-primary(name='ic:baseline-arrow-right' size='1.5rem')
            p.w-4of5 I learned to use Nuxt.js, i18n, Vuelidate, Pugjs

      #slide2.carousel-item.relative.w-full.flex.flex-col
        p.font-inco.text-primary.font-bold.text-lg
          | Internship
          |
          span.font-noto.font-bold.text-secondary @ Becode.org
        p.font-inco.text-sm.mb-4 May 2022 - December 2022
        ul
          li.flex.mb-4
            Icon.text-primary(name='ic:baseline-arrow-right' size='1.5rem')
            p.w-4of5 
              | I followed the web development training of
              |
              a.text-primary.underline.linkhover(href='https://becode.org/') Becode.org
              | , this training lasts 7 months and its goal is to teach us the basics of web development, with a learning pedagogue called "Active Methodology": learn by doing
          li.flex.mb-4
            Icon.text-primary(name='ic:baseline-arrow-right' size='1.5rem')
            p.w-4of5 I learned to use HTML, CSS, Javascript, Vue.js, Node.js, MongoDB, Tailwind

  section#projects.h-auto.w-full.mb-8
    h1.font-noto.font-bold.text-xl.text-primary.mb-4 Projects
  section#contact.h-auto.w-full.mb-8
    h1.font-noto.font-bold.text-xl.text-primary.mb-4 Contact
Footer
</template>

<script setup lang="ts"></script>
