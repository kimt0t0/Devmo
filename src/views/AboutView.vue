<script lang="ts" setup>
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';
import { CursorArrowRippleIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <HeroParticle title="Kim Robert, dev web" id="index-title" />
  <!-- French contents -->
  <section class="classic-section" v-if="useLanguageStore().language === Language.FR">
    <div class="classic-container">
      <div class="horizontal-group">
        <div class="picture-frame">
          <img src="@images/me.jpg" class="about-me-picture" alt="Photographie de Kim Robert" />
          <CursorArrowRippleIcon class="about-cursor-icon" />
        </div>
        <div class="about-content">
          <p class="about-text __me">
            Salutations ! Âgé·e de 30 ans, non-binaire (il / iel) et neuro-atypique, je suis <strong>développeur·e
              web</strong> depuis
            environ un
            an.<br />Après
            une
            expérience en agence, je crée ma propre entreprise afin de travailler de la façon qui me convient et de
            pouvoir
            choisir les projets qui me plaisent:
          </p>
          <ul class="about-list">
            <li class="al-item">
              Pour des <strong>petites / moyennes entreprises, associations ou
                particuliers.</strong>
            </li>
            <li class="al-item">
              En lien avec mes centres d'intérêts: sports, arts et artisanat, culture, informatique, droits
              des minorités...
            </li>
            <li class="al-item">Touchant idéalement à mes centres d'intérêts et partageant des valeurs telles que
              <strong>la
                bienveillance, la qualité, la coopération, l'accessibilité, la diversité, le respect d'autrui ou encore le
                respect de
                l'environnement.</strong>
            </li>
          </ul>
        </div>
        <p class="about-text">Passionné·e de <strong>développement front-end</strong>
          j'ai à coeur de mettre en place dans mes projets personnels et pour mes client·e·s des interfaces graphiques
          pratiques, élégantes et simples à utiliser. Curieus·e de nombreux sujets, j'aime étendre la palette de mes
          savoir-faires. Également
          compétent·e pour de petits projets en <strong>full-stack</strong>, je peux aussi gérer l'authentification et le
          paramétrage des droits de vos utilisateur·ice·s.
        </p>
        <div class="horizontal-group  __details">
          <div class="about-content">
            <p class="about-text  __details">Ayant toujours à coeur de bien faire (parfois trop), <strong>je m'engage à
                toujours
                rechercher les
                solutions les plus adaptées à votre projet.</strong> Si mes compétences ne conviennent pas à votre
              demande,
              je
              vous orienterai vers des spécialistes en fonction de vos besoins.</p>
          </div>
          <img src="@images/detail.webp" class="detail-illustration"
            alt="Photographie de recherche de détail à l'aide d'une loupe" />
        </div>
      </div>
    </div>
  </section>
  <!-- English contents -->
  <section class="classic-section" v-else>
    <div class="classic-container">
      <div class="horizontal-group">
        <div class="picture-frame">
          <img src="@images/me.jpg" class="about-me-picture" alt="A picture Kim Robert" />
          <CursorArrowRippleIcon class="about-cursor-icon" />
        </div>
        <div class="about-content">
          <p class="about-text __me">
            Hi ! I am 30 years-old, non-binary (he / they ) and neuro-atypical and I've been working as a <strong>web
              developer</strong> for about a year now.
            <br />After a job at a web agency, I am starting my own business. I want to work in ways that fit me better
            and choose projects I enjoy more:
          </p>
          <ul class="about-list">
            <li class="al-item">With
              <strong>small / medium size businesses, charitable organizations or
                individuals.</strong>
            </li>
            <li class="al-item">
              Related to my hobbies: sports, arts and craftmanship, culture, computering, minorities rights, and many
              others.
            </li>
            <li class="al-item">Ideally sharing values or ideals such as
              <strong>benevolence, quality, cooperation, accessibility, diversity, respecting others as well as the
                environment.</strong>
            </li>
          </ul>
        </div>
        <p class="about-text">I am captivated by <strong>front-end development</strong>, and I do care about displaying
          qualitative, elegant and easy-to-use web interfaces for my clients and in my personal projects. As I am curious
          about lots of things, I also like to broaden my professional skills. Hence I can also work on small / medium
          <strong>full-stack</strong> web applications and handle authentication, user rights, etc.
        </p>
        <div class="horizontal-group  __details">
          <div class="about-content">
            <p class="about-text  __details">I deeply care about doing things rights (even too much sometimes), so
              <strong>I will always search the better-fitting solution for your project.</strong> If it is not in my
              skills area I will let you know and direct you to someone who better fits to your needs.
            </p>
          </div>
          <img src="@images/detail.webp" class="detail-illustration"
            alt="Picture of a magnifying glass looking for details" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.horizontal-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: $bp-m) {
    justify-content: center;
  }

  &.__details {
    align-items: flex-start;

    @media (max-width: $bp-m) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }

  }

}

.about-content {
  width: 60%;
  max-width: 860px;
  white-space: pre-line;

  @media (max-width: $bp-m) {
    width: initial;
    max-width: initial;
  }

}

.about-text {

  &.__details {
    padding-top: $space-l;
  }

  >strong {
    font-weight: 500;
  }

}

.about-list {
  max-width: 860px;

  .al-item {
    margin: $space-s 0 $space-s $space-xxl;
    list-style-type: circle;
    white-space: pre-line;

    >strong {
      font-weight: 500;
    }
  }

}

.detail-illustration {
  max-width: 250px;
  margin-left: $space-xxxl;
  border-radius: $radius-s;
  border: 1px solid color($dark, 45);
  box-shadow: 2px 2px 3px color($dark, 45);

  @media (max-width: $bp-m) {
    max-width: initial;
    max-height: 320px;
    margin: $space-m 0;
  }

}

.picture-frame {
  border-radius: $radius-circle;
  border: 4px solid color($danger, 50);
  width: fit-content;
  height: fit-content;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 3px color($dark, 45);
  margin: 0 $space-xxl $space-l 0;
}

.about-me-picture {
  max-width: 420px;
  max-height: 240px;
  border-radius: $radius-circle;
  border: 5px double color($danger, 50);
  position: relative;
  filter: blur(2px) sepia(30%);
  cursor: pointer;
  transition: all 300ms ease-in;

  &:hover,
  &:focus {
    filter: none;
  }
}

.about-cursor-icon {
  position: absolute;
  bottom: $space-s;
  right: $space-xxl;
  width: $txt-l;
  height: $txt-l;
  color: color($dark, 50);
  background-color: color($dark, 110);
  border-radius: $radius-circle;
  padding: $space-s;
  box-shadow: 0 0 2px 2px color($dark, 110);
  animation: moveCursor 5s linear infinite;
}

@keyframes moveCursor {
  0% {
    transform: translate(0, 0);
  }

  10% {
    transform: translate($space-s, $space-m);
  }

  15% {
    transform: translate(0, 0);
  }
}
</style>