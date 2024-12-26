<template>
	<div class="auth flex flex-col items-center justify-between h-[100%] px-[30px]">
		<header class="flex justify-between w-full py-[20px]">
		</header>
		<div class="w-full max-w-[500px] rounded-[16px] p-[30px] md:p-[50px]">
			<slot />
		</div>
		<footer class="py-[20px]">
			<p class="text-slate-500">© Портал биржи грузоперевозок {{ new Date().getFullYear() }}</p>
		</footer>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'AuthLayout' });
</script>

<style scoped lang="scss">
.auth {
    background: 
        radial-gradient(49.98% 52.41% at 44.18% 118.79%, rgb(250, 250, 250) 0%, rgba(255, 255, 255, 0.97) 100%),
        radial-gradient(38.18% 50.85% at 43.11% -7.92%, rgba(24, 144, 255, 0.1) 0%, rgba(64, 120, 202, 0.3) 100%),
        radial-gradient(32.39% 65.68% at 101.26% 36.34%, rgb(240, 242, 245) 0%, rgba(140, 170, 230, 0.2) 100%),
        radial-gradient(25.84% 56.13% at -7.92% 73.21%, rgba(240, 242, 245, 0.1) 0%, rgba(22, 119, 255, 0) 100%), 
        #ffffff;
}
</style>
