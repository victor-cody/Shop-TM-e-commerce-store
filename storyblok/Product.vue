<template>
	<section
		class="container mx-auto px-5 lg:py-5 overflow-hidden lg:w-[98%] flex flex-wrap"
		v-editable="blok"
	>
		<!-- <div class=""> -->
			<div class="lg:w-1/2 w-full">
				<img
					v-if="blok?.product_images.length > 0"
					:src="blok?.product_images[0].filename"
					:alt="blok.product_images[0].alt"
					class="w-[88%] lg:w-[80%] lg:max-h-[78vh] mx-auto object-cover object-center rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
				/>
			</div>
			<div
				class="relative lg:w-1/2 w-full my-1 mt-6 flex flex-col items-center lg:items-start lg:top-20 lg:pl-12 lg:mt-0"
			>
				<h3
					class="uppercase break-words font-light text-xl xl:text-3xl mb-6"
				>
					{{ blok.name }}
				</h3>
				<div
					class="mb-8 font-light flex flex-col items-center lg:items-start"
				>
					<div class="text-2xl text-[#666] tracking-wider mb-4">
						$&nbsp;{{ blok.price }}
					</div>
					<p class="text-lg">Shipping calculated at checkout.</p>
					<p
						v-show="!blok.in_stock"
						class="uppercase font-light text-xl mt-4"
					>
						Item is out of stock
					</p>
				</div>
				<button
					class="px-12 py-5 w-4/5 max-w-[30rem] border-solid border-[1px] border-black text-xl font-normal snipcart-add-item flex justify-center items-center text-white bg-black focus:outline-none rounded snipcart-add-item disabled:bg-gray-700"
					:disabled="!blok.in_stock"
				>
					Add to cart
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="22"
						fill="currentColor"
						class="bi bi-cart4 ml-3"
						viewBox="0 0 16 16"
					>
						<path
							d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
						/>
					</svg>
				</button>
			</div>
		<!-- </div> -->
	</section>
</template>
<script setup>
	defineProps({ blok: Object });

	const route = useRoute();
</script>
