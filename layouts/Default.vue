<template>
	<div class="flex justify-center bg-gray-50">
		<div class="flex flex-col min-h-screen w-full">
			<Header />
			<main class="">
				<slot />
			</main>
			<Footer />
		</div>
	</div>
	<div
		hidden
		id="snipcart"
		:data-api-key="process.env.NUXT_PUBLIC_SNIPCART_API_KEY"
	></div>
</template>

<script setup>
 import process from "process";
</script>
