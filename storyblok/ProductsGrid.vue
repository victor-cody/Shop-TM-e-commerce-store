<template>
	<div class="container mx-auto font-light" v-editable="blok">
		<h2
			className="font-normal tracking-tighter leading-tight text-4xl lg:text-6xl mb-7 lg:mb-12"
		>
			{{ blok.headline }}
		</h2>
		<div
			className="w-full grid grid-flow-row gap-x-6 lg:gap-y-1.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 lg:mb-8"
		>
			<ProductCard
				v-for="product in blok.products"
				:product="product.content"
				:slug="product.slug"
				:key="product.uuid"
				class="my-6"
			/>
		</div>
	</div>
</template>

<script setup>
	defineProps({ blok: Object });
</script>
