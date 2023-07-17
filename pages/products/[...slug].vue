<script setup>
	import process from "process";

	const { slug } = useRoute().params;

	const path = slug && slug.length > 0 ? slug.join("/") : "home";

	const story = await useAsyncStoryblok(`products/${path}`, { version: process.env.NUXT_PUBLIC_STORYBLOK_APP_MODE });
</script>

<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>
