<script lang="ts" setup>
import htmlIcon from '@icons/html-icon.webp';
import expressIcon from '@icons/express-icon.webp';
import mongooseIcon from '@icons/mongoose-icon.webp';
import nestIcon from '@icons/nest-icon.webp';
import nodeIcon from '@icons/node-icon.webp';
import reactIcon from '@icons/react-icon.webp';
import scssIcon from '@icons/scss-icon.webp';
import typeormIcon from '@icons/typeorm-icon.webp';
import vue3Icon from '@icons/vue-icon.webp';

const repositories = [
    {
        path: 'https://github.com/kimt0t0/devmo',
        title: 'Front-end with Vue 3',
        text: 'This website\'s repository',
        icons: [
            {
                path: vue3Icon,
                name: 'Vue 3'
            },
            {
                path: htmlIcon,
                name: 'HTML5'
            },
            {
                path: scssIcon,
                name: 'Scss'
            },
        ]
    },
    {
        path: 'https://github.com/kimt0t0/Role-Mates',
        title: 'Mobile First Full-Stack School Project',
        text: 'Textual Roleplay, Unachieved',
        icons: [
            {
                path: reactIcon,
                name: 'React'
            },
            {
                path: scssIcon,
                name: 'Scss'
            },
            {
                path: nodeIcon,
                name: 'Node'
            },
            {
                path: expressIcon,
                name: 'Express'
            },
            {
                path: mongooseIcon,
                name: 'Mongoose'
            },
        ]
    },
    {
        path: 'https://github.com/kimt0t0/Havrepaire',
        title: 'Full-Stack Personal Project',
        text: 'Literary Blog, Work In Progress',
        icons: [
            {
                path: vue3Icon,
                name: 'Vue 3'
            },
            {
                path: scssIcon,
                name: 'Scss'
            },
            {
                path: nestIcon,
                name: 'Nest.js'
            },
            {
                path: mongooseIcon,
                name: 'Mongoose'
            },
            {
                path: typeormIcon,
                name: 'TypeOrm'
            },
        ]
    }
]
</script>

<template>
    <section class="classic-section repository-gallery-section">
        <h3 class="title-ter repositories-gallery-title" id="repositories">Repositories</h3>
        <ol class="repositories-list">
            <li class="rl-card" v-for="(repository, index) of repositories" :key="index">
                <a :href="repository.path" :title="repository.title" target="_blank" class="card-link">
                    <div class="card-icons">
                        <img v-for="(icon, index) of repository.icons" class="card-icon" :key="index" :src="icon.path"
                            :alt="icon.name" />
                    </div>
                    <div class="card-contents">
                        <h4 class="title-fourth fl-card-title">{{ repository.title }}</h4>
                        <p class="fl-card-text">{{ repository.text }}</p>
                    </div>
                </a>
            </li>
        </ol>
        <div class="more-container">
            <p class="more-text">I am also used to bind Nest.js projects with <strong>MySQL</strong> databases at work, but
                not
                to deploy them
                online.</p>
        </div>
    </section>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.repositories-gallery-title {
    margin: $space-m 0;
}

.repositories-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.rl-card {
    box-sizing: border-box;
    margin: $space-m 0 $space-m 0;
    border: 5px double $primary;
    border-radius: $radius-xs;
    width: 370px;
    height: 220px;
    display: flex;
    flex-direction: column;
    color: $primary;
    transition: all 300ms ease-in;

    &:hover {
        background-color: lighten($primary, 72%);
        transform: translateY(-8px);
    }

    @media (max-width: $bp-xs) {
        width: 100%;
        height: 300px;
    }

    @media (max-width: $bp-xxs) {
        height: fit-content;
    }

}

.card-link {
    text-decoration: none;
}

.card-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 140px;

    @media (max-width: $bp-xs) {
        height: 200px;
    }

    @media (max-width: $bp-xxs) {
        height: fit-content;
    }

    .card-icon {
        width: 60px;
        max-height: 60px;
        border-radius: $radius-xs;
        margin: $space-s;
    }
}

.card-contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $primary;

    .fl-card-title,
    .fl-card-text {
        text-align: center;
    }
}

.more-text {
    font-weight: 400 !important;

    strong {
        font-weight: 600;
    }
}
</style>