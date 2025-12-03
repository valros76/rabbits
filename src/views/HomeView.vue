<script setup lang="ts">
import { useSeoMeta } from "@unhead/vue";

useSeoMeta({
  title: "Le royaume des lapins",
  description: "Bienvenue sur le royaume des lapins !",
  ogTitle: "Le royaume des lapins",
  ogDescription: "Bienvenue sur le royaume des lapins !",
  ogImage:
    "https://rabbits.webdevoo.com/assets/images/RabbitPortrait.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <section class="main-sections">
    <h1 class="main-sections-title">Rabbit's Land</h1>

    <article class="main-articles">
      <figure class="img-container">
        <img
          src="/assets/images/RabbitPortrait.png"
          alt="Portrait d'un lapin"
        />
      </figure>
      <h2 class="main-articles-title">Foin illimité !</h2>
      <p>
        Flif-flif wigglenose, thumph-thumph diggle-burrow.
        Nibble-scritch pitter-pat, zoom-hop floof-tail.
      </p>
      <p>
        Sniffle-twitch carrot-dream, hunkle-bunkle
        dust-bath. Cheep-whiffle quiet-shadow, bounce-bounce
        sleepy-warren.
      </p>
      <p>
        Pop-ears twitch-whiskers, munch-munch green-leaf.
      </p>
      <blockquote>
        <cite> Smarties, minilope friand de foin. </cite>
      </blockquote>
    </article>

    <article class="main-articles">
      <figure class="img-container">
        <img
          src="/assets/images/RabbitGif.gif"
          alt="Gif lapin"
        />
      </figure>
      <h2 class="main-articles-title">
        Plongée dans les Nuances du "Lapin-Langage" :
        Décrypter le Flif-flif et le Thumph-thumph
      </h2>
      <p>
        Le "lapin-langage" que nous avons exploré
        précédemment n'est, bien sûr, pas une langue
        humaine, mais une interprétation ludique des sons et
        comportements que ces adorables créatures utilisent
        pour communiquer. Chaque "mot" ou onomatopée que
        nous avons inventé tente de capturer une facette de
        leur monde sensoriel et émotionnel.
      </p>
      <p>
        <strong>Décortiquons quelques "termes" :</strong>
      </p>
      <ul>
        <li>
          <strong>Flif-flif wigglenose : </strong> Cette
          expression évoque le mouvement rapide et constant
          du nez du lapin, essentiel pour explorer son
          environnement par l'odorat. C'est le signe de la
          curiosité, de l'exploration, et d'une sorte de
          "bonjour" silencieux au monde. Il pourrait
          signifier "Qu'est-ce que c'est ?", "Intéressant
          !", ou simplement "J'explore.".
        </li>
        <li>
          <strong>Thumph-thumph diggle-burrow : </strong> Le
          "thumph" est le bruit sourd que font les lapins en
          tapant du pied, un signal d'alarme universel chez
          eux. Combiné à "diggle-burrow" (creuser une
          galerie), il suggère une réaction de prudence ou
          de danger imminent lié à leur habitat. Cela
          pourrait se traduire par "Attention, danger !
          Fuyez dans le terrier !".
        </li>
        <li>
          <strong> Nibble-scritch pitter-pat : </strong>
          "Nibble-scritch" fait référence à leur façon de
          manger (grignoter) et de se toiletter (gratter),
          tandis que "pitter-pat" évoque le son de leurs
          petites pattes lorsqu'ils se déplacent rapidement
          mais discrètement. Ces sons dépeignent des
          activités quotidiennes, de confort ou de mouvement
          agile. On pourrait l'interpréter comme "Tout va
          bien, je mange tranquillement," ou "Je me déplace
          doucement."
        </li>
        <li>
          <strong> Zoom-hop floof-tail : </strong> C'est le
          langage de l'énergie et de la joie ! Le "zoom-hop"
          décrit les sauts de joie et les courses folles que
          les lapins font lorsqu'ils sont excités et
          heureux, le "floof-tail" (queue toute douce)
          symbolisant leur apparence duveteuse et leur
          bien-être. C'est leur manière de dire "Je suis
          content !", "Je joue !" ou "La vie est belle !"
        </li>
      </ul>
      <p>
        Le "lapin-langage" est donc moins une suite de mots
        qu'une
        <strong
          >symphonie de sensations et de réactions</strong
        >.
      </p>
      <p>
        Il mélange les sons du corps (tapotements,
        grignotages), les mouvements (nez qui frétille,
        bondissements) et les interactions avec leur
        environnement (creuser, chercher de la nourriture).
      </p>
      <p>
        Pour un lapin, communiquer, c'est être en constante
        résonance avec son monde, une expérience bien plus
        riche que nos simples mots.
      </p>
    </article>
  </section>
</template>
