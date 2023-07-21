<script setup>
	// import process from "process";
	const runtimeConfig = useRuntimeConfig()

	const { slug } = useRoute().params;

	const path = slug && slug.length > 0 ? slug.join("/") : "home";

	const story = await useAsyncStoryblok(`products/${path}`, { version: runtimeConfig.public.storyblokAppMode });
</script>

<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>
