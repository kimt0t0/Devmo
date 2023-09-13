<script lang="ts" setup>
const repositories = [
    {
        path: 'https://github.com/kimt0t0/devmo',
        title: 'Front-end with Vue 3',
        text: 'This website\'s repository',
        icons: [
            {
                path: 'vue-icon.webp',
                name: 'Vue 3'
            },
            {
                path: 'html-icon.webp',
                name: 'HTML5'
            },
            {
                path: 'scss-icon.webp',
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
                path: 'react-icon.webp',
                name: 'React'
            },
            {
                path: 'scss-icon.webp',
                name: 'Scss'
            },
            {
                path: 'node-icon.webp',
                name: 'Node'
            },
            {
                path: 'express-icon.webp',
                name: 'Express'
            },
            {
                path: 'mongoose-icon.webp',
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
                path: 'vue-icon.webp',
                name: 'Vue 3'
            },
            {
                path: 'scss-icon.webp',
                name: 'Scss'
            },
            {
                path: 'nest-icon.webp',
                name: 'Nest.js'
            },
            {
                path: 'mongoose-icon.webp',
                name: 'Mongoose'
            },
            {
                path: 'typeorm-icon.webp',
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
                        <img v-for="(icon, index) of repository.icons" class="card-icon" :key="index"
                            :src="'/src/assets/icons/' + icon.path" :alt="icon.name" />
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