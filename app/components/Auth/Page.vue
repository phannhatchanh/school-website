<script setup lang="ts">
const { $bus } = useNuxtApp();

const currentPage = ref("login");
const AuthLogin = resolveComponent("AuthLogin");
const AuthRegister = resolveComponent("AuthRegister");

($bus as any).$on("auth:form", (data: any) => {
	currentPage.value = data.page;
});
</script>

<template>
	<div class="container flex items-center justify-center">
		<component :is="currentPage === 'login' ? AuthLogin : AuthRegister" />
	</div>
</template>
