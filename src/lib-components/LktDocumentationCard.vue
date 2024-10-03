<script setup lang="ts">
const props = withDefaults(defineProps<{
    title?: string
    intro?: string
    icon?: string
    readMoreLink?: string
    npmLink?: string
    packagistLink?: string
    githubLink?: string
    gitlabLink?: string
    bitbucketLink?: string
}>(), {
    title: '',
    intro: '',
    icon: '',
    readMoreLink: '',
    npmLink: '',
    packagistLink: '',
    githubLink: '',
    gitlabLink: '',
    bitbucketLink: '',
});

</script>

<template>
    <div class="lkt-documentation-card">
        <div class="lkt-documentation-card-header">
            <div class="lkt-documentation-card-ribbon" v-if="icon">
                <div class="lkt-documentation-card-icon"><i :class="icon"></i></div>
            </div>

            <div class="lkt-documentation-card-title">{{title}}</div>
        </div>

        <div class="lkt-documentation-card-intro" v-if="intro">{{intro}}</div>

        <div class="lkt-documentation-card-read-more">
            <lkt-anchor :to="readMoreLink" class="lkt-documentation-card-link">Learn more</lkt-anchor>
        </div>

        <div class="lkt-documentation-card-intro">Or check the project pages</div>

        <div class="lkt-documentation-card-links">
            <lkt-anchor target="_blank" :href="npmLink" v-if="npmLink" class="lkt-documentation-card-link npm-link"><i class="lkt-icon-npm"></i></lkt-anchor>
            <lkt-anchor target="_blank" :href="githubLink" v-if="githubLink" class="lkt-documentation-card-link github-link"><i class="lkt-icon-github-circled"></i></lkt-anchor>
            <lkt-anchor target="_blank" :href="packagistLink" v-if="packagistLink" class="lkt-documentation-card-link packagist-link"><i class="lkt-icon-packagist"></i></lkt-anchor>
        </div>
    </div>
</template>