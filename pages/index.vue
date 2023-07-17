<script setup>
	import process from "process";

	const { slug } = useRoute().params;

	const path = slug && slug.length > 0 ? slug.join("/") : "home";

	const resolveRelations = ["products-grid.products", "featured_product.product"];

	const sbParams = {
		version: process.env.NUXT_PUBLIC_STORYBLOK_APP_MODE,
		resolve_relations: resolveRelations,
	};

	const story = await useAsyncStoryblok(path, sbParams, { resolveRelations });
</script>
 
<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>
