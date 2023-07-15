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
		:data-api-key="runtimeConfig.public.snipcartApiKey"
		data-config-modal-style="side"
	></div>
</template>

<script setup>
//  import process from "process";
//  const SNIPCART_API_KEY = process.env.NUXT_PUBLIC_SNIPCART_API_KEY;
 const snipcartAPiKey = useRuntimeConfig().public.snipcartApiKey;
 	const runtimeConfig = useRuntimeConfig()

</script>
