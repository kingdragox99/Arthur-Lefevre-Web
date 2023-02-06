<template lang="pug">
Header.font-inco.bg-background
main.px-6.py-4.font-inco
  section#about.h-auto.w-full.mb-8
    h1.font-noto.font-bold.text-xl.text-primary.mb-4 About Me.
    p.mb-8
      | Hello, I'm
      |
      span.text-primary.underline Arthur Lefevre
      | , a junior web developer from Belgium.
      | I completed a training course at
      |
      a.text-primary.underline.linkhover(
        href='https://becode.org/'
        target='_blank'
      ) Becode.org
      |
      | to hone my skills.
      | My expertise lies in front-end development, using
      |
      a.text-primary.underline.linkhover(
        href='https://vuejs.org/'
        target='_blank'
      ) Vue.js framework.
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
  section#experience.h-auto.w-full
    h1.font-noto.font-bold.text-xl.text-primary.mb-4 Experience
    .carousel.w-full
      #experience1.carousel-item.relative.w-full.flex.flex-col
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
              a.text-primary.underline.linkhover(
                href='https://www.altab.be/'
                target='_blank'
              ) Altab
              | , it's a web development company, during this internship I did the front-end integration of the new website of
              |
              a.text-primary.underline.linkhover(
                href='https://www.verdin.be/'
                target='_blank'
              ) Verdin.be
          li.flex.mb-4
            Icon.text-primary(name='ic:baseline-arrow-right' size='1.5rem')
            p.w-4of5 I learned to use Nuxt.js, i18n, Vuelidate, Pugjs

      #experience2.carousel-item.relative.w-full.flex.flex-col
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
              a.text-primary.underline.linkhover(
                href='https://becode.org/'
                target='_blank'
              ) Becode.org
              | , this training lasts 7 months and its goal is to teach us the basics of web development, with a learning pedagogue called "Active Methodology": learn by doing
          li.flex.mb-4
            Icon.text-primary(name='ic:baseline-arrow-right' size='1.5rem')
            p.w-4of5 I learned to use HTML, CSS, Javascript, Vue.js, Node.js, MongoDB, Tailwind
  .flex.w-full.py-2.gap-2.mb-8
    a.btn.btn-sm(href='#experience1') Altab
    a.btn.btn-sm(href='#experience2') Becode

  section#projects.h-auto.w-full.mb-8
    h1.font-noto.font-bold.text-xl.text-primary.mb-4 Projects
    .carousel.space-x-4.w-full
      #project1.carousel-item.relative.w-full.flex.flex-col
        figure.bg-white.rounded-t-3xl.flex.justify-center
          img.h-64.w-64(
            src='/assets/img/verdin.png'
            alt='verdin.be'
            width='500'
            height='500'
          )
        .card-body.bg-background.rounded-b-3xl
          a.card-title.font-inco.font-bold.text-xl.text-primary.linkhover(
            href='https://www.verdin.be/'
            target='_blank'
          ) Verdin.be
          p Verdin.be is an accounting company, I did the front-end integration on this project.
          .flex.gap-2.text-white
            a.flex.group.gap-1(href='https://www.verdin.be/' target='_blank')
              Icon.group-hover_text-primary(name='mdi:web-box' size='1.5rem')
              h3.group-hover_text-primary.hover_underline Website
          .card-actions.justify-start
            .badge.badge-outline Nuxt.js
            .badge.badge-outline Tailwind
            .badge.badge-outline i18n
            .badge.badge-outline Vuelidate
        .absolute.flex.justify-between.transform.left-2.right-2(
          class='-translate-y-1/2 top-1/4'
        )
          a.btn.btn-circle.w-8.h-8(href='#project3')
            Icon.text-primary(name='ic:outline-arrow-back-ios' size='1rem')
          a.btn.btn-circle.w-8.h-8(href='#project2')
            Icon.text-primary(name='ic:outline-arrow-forward-ios' size='1rem')
      #project2.carousel-item.relative.w-full.flex.flex-col
        figure.bg-white.rounded-t-3xl.flex.justify-center
          img.h-64.w-64(
            src='/assets/img/jh.png'
            alt='Joyce Huberty'
            width='500'
            height='500'
          )
        .card-body.bg-background.rounded-b-3xl
          a.card-title.font-inco.font-bold.text-xl.text-primary.linkhover(
            href='http://5.196.7.243:3000/'
            target='_blank'
          ) Joyce Huberty portfolio
          p Joyce Huberty is an engraving artist, I created the back-end, front-end and design on this project, this site is no longer maintained or updated
          .flex.gap-2.text-white
            a.flex.group.gap-1(href='http://5.196.7.243:3000/' target='_blank')
              Icon.group-hover_text-primary(name='mdi:web-box' size='1.5rem')
              h3.group-hover_text-primary.hover_underline Website
          .card-actions.justify-start
            .badge.badge-outline Vue.js
            .badge.badge-outline MongoDB
            .badge.badge-outline Express
            .badge.badge-outline Node.js
        .absolute.flex.justify-between.transform.left-2.right-2(
          class='-translate-y-1/2 top-1/4'
        )
          a.btn.btn-circle.w-8.h-8(href='#project1')
            Icon.text-primary(name='ic:outline-arrow-back-ios' size='1rem')
          a.btn.btn-circle.w-8.h-8(href='#project3')
            Icon.text-primary(name='ic:outline-arrow-forward-ios' size='1rem')
      #project3.carousel-item.relative.w-full.flex.flex-col
        figure.bg-white.rounded-t-3xl.flex.justify-center
          img.h-64.w-64(
            src='/assets/img/BOTDS.png'
            alt='Vac Ban Checker'
            width='500'
            height='500'
          )
        .card-body.bg-background.rounded-b-3xl
          a.card-title.font-inco.font-bold.text-xl.text-primary.linkhover(
            href='https://github.com/kingdragox99/Steam-Ban-Checker-Discord-Bot'
            target='_blank'
          ) Vac Ban Checker Discord Bot
          p I created a bot discord, which checks if a player of "Counter-Strike: Global Offensive" suspected of cheating has received a ban by the anti-cheat, it sends a notification when a player receives one, I created the Bot from A to Z
          .flex.gap-2.text-white
            a.flex.group.gap-1(
              href='https://github.com/kingdragox99/Steam-Ban-Checker-Discord-Bot'
              target='_blank'
            )
              Icon.group-hover_text-primary(name='mdi:web-box' size='1.5rem')
              h3.group-hover_text-primary.hover_underline Website
            a.flex.group.gap-1(
              href='https://github.com/kingdragox99/Steam-Ban-Checker-Discord-Bot'
              target='_blank'
            )
              Icon.group-hover_text-primary(
                name='mdi:github-box'
                size='1.5rem'
              )
              h3.group-hover_text-primary.hover_underline Github
          .card-actions.justify-start
            .badge.badge-outline Vue.js
            .badge.badge-outline MongoDB
            .badge.badge-outline Express
            .badge.badge-outline Node.js
        .absolute.flex.justify-between.transform.left-2.right-2(
          class='-translate-y-1/2 top-1/4'
        )
          a.btn.btn-circle.w-8.h-8(href='#project2')
            Icon.text-primary(name='ic:outline-arrow-back-ios' size='1rem')
          a.btn.btn-circle.w-8.h-8(href='#project1')
            Icon.text-primary(name='ic:outline-arrow-forward-ios' size='1rem')

  section#contact.h-auto.w-full.mb-8
    h1.font-noto.font-bold.text-xl.text-primary.mb-4 Contact
    p.mb-4 If you have a question or a project you can contact me via email or directly on malt.com
    .flex.flex-col.w-full.border-opacity-50
      .grid.grid-cols-2.card.place-items-center.mb-2
        img.w-32(
          src='/assets/img/malt.png'
          alt='malt.com'
          height='400'
          width='400'
        )
        button.btn Send me a mission
      .grid.card
        a.btn(href='mailto:arthur.lefevre.dev@gmail.com') Email
Footer.font-inco.bg-background
</template>

<script setup lang="ts"></script>
