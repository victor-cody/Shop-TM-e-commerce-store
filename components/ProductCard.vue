<template>
	<div class="relative px-6 py-2">
		<NuxtLink
			:to="`products/${slug}`"
			v-editable="product"
			class="overflow-hidden w-full cursor-pointer py-5"
		>
			<img
				v-if="product?.product_images.length > 0"
				:src="product?.product_images[0].filename"
				:alt="product.product_images[0].alt"
				class="w-full min-h-[34rem] mb-5 object-cover object-top shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out"
			/>
			<span
				class="absolute z-10 top-[1.2%] right-[5.6%] px-4 py-4 max-w-[30%] text-sm font-thin text-white bg-black flex justify-center items-center"
				>{{ product.in_stock ? "For sale" : "Out of sale" }}</span
			>
		</NuxtLink>
		<div
			class="flex flex-col items-start justify-around text-lg text-[#383838]"
		>
			<h3 class="mb-0.5 uppercase py-1">
				{{ product.name }}
			</h3>
			<span class="text-[#777] tracking-wider">
				$&nbsp;{{ product.price }}
			</span>
		</div>
	</div>
</template>

<script setup>
	defineProps({ product: Object, slug: String });
</script>
