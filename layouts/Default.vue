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
</template>

<script setup lang="ts">
</script>
