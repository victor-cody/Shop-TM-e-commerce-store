<template>
	<header
		class="flex flex-col lg:flex-row items-center lg:justify-between mt-10 lg:mt-6 mb-14 lg:mb-10 px-6"
	>
		<h1
			class="relative text-5xl md:text-[82px] font-semibold tracking-tighter leading-tight pr-7 lg:pr-8 mb-4 lg:mb-0"
		>
			<NuxtLink to="/"> Shop </NuxtLink>
			<span
				class="absolute top-0 -right-1 text-lg font-bold tracking-wide"
				>TM</span
			>
		</h1>
				<button
			class="relative flex justify-between items-center text-xl px-12 py-5 border-solid border-[1.5px] border-black snipcart-checkout"
		>
			<span
				class="absolute bottom-[53%] left-[30%] text-sm tracking-wide snipcart-items-count"
				>0</span
			>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				class="bi bi-cart4 mr-2.5"
				viewBox="0 0 16 16"
			>
				<path
					d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
				/>
			</svg>
			<p class="snipcart-total-price">$&nbsp;0.00</p>
		</button>
	</header>
</template>

<script setup>
</script>
