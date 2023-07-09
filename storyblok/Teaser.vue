<template>
	<div
		v-editable="blok"
		class="relative w-[98%] mx-auto flex flex-row pt-4 lg:pt-0 pb-16 text-5xl font-bold min-h-[82vh]"
	>
		<div
			class="absolute bottom-28 right-0 z-20 text-center lg:text-left py-2 lg:w-[50%] text-white"
		>
			<div>
				<h2
					class="w-full mb-4 text-3xl font-semibold lg:text-6xl tracking-[0.15em]"
				>
					{{ blok.headline }}
				</h2>
				<div class="text-xl font-light lg:text-2xl">
					{{ blok.intro_text }}
				</div>
				<div class="flex justify-center lg:justify-start mt-3">
					<NuxtLink
						class="px-4 py-4 w-[80%] lg:w-2/5 border-solid border-[3px] border-white text-xl font-thin flex justify-center items-center text-white bg-transparent focus:outline-none rounded"
						to="#"
					>
						{{ blok.button_text }}
					</NuxtLink>
				</div>
			</div>
		</div>
		<div
			v-for="block in blok.teaser_image"
			:key="block.id"
			class="w-full lg:w-1/3"
		>
			<div
				class="h-full bg-no-repeat bg-cover bg-bottom"
				:style="`
          background-image: url(${block.filename});
        `"
			></div>
		</div>
	</div>
</template>
 <script setup>
	defineProps({ blok: Object });
</script>
