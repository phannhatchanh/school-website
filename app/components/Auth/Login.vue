<script setup lang="ts">
useHead({
	title: "Đăng nhập",
});

const { $bus } = useNuxtApp();

const { signIn } = useAuth();

const router = useRouter();

const data = reactive({
	username: "",
	password: "",
	loading: false,
});

const handleLogin = async () => {
	data.loading = true;
	try {
		await signIn({ username: data.username, password: data.password });
		router.push("/");
	} catch (error) {
		console.error(error);
		($bus as any).$emit("toast", { message: error, type: "error" });
	} finally {
		data.loading = false;
	}
};

const handleRegisterPage = () => {
	($bus as any).$emit("auth:form", { page: "register" });
};
</script>

<template>
	<VForm @submit="handleLogin" class="min-h-screen flex flex-col items-center justify-center bg-white">
		<div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
			<div class="font-bold self-center text-xl sm:text-2xl uppercase text-gray-800">
				Đăng nhập vào tài khoản
			</div>
			<button class="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
				<span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
					<Icon name="bxl:facebook" size="25" />
				</span>
				<span>Đăng nhập bằng Facebook</span>
			</button>
			<div class="relative mt-10 h-px bg-gray-300">
				<div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
					<span class="bg-white px-4 text-xs text-gray-500 uppercase">Hoặc đăng nhập bằng Email</span>
				</div>
			</div>
			<div class="mt-10">
				<div class="flex flex-col mb-6">
					<label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 font-bold">
						Địa chỉ E-Mail:
					</label>
					<div class="relative">
						<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
							<Icon name="bi:at" class="h-6 w-6" />
						</div>

						<VField v-model="data.username" id="email" type="text" name="username" rules="required" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Địa chỉ E-Mail" />
					</div>
					<VErrorMessage name="username" class="text-red-500" />
				</div>
				<div class="flex flex-col mb-6">
					<label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 font-bold">
						Mật khẩu:
					</label>
					<div class="relative">
						<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
							<Icon name="octicon:lock-24" class="h-5 w-5" />
						</div>

						<VField v-model="data.password" id="password" type="password" name="password" rules="required" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Mật khẩu" />
					</div>
					<VErrorMessage name="password" class="text-red-500" />
				</div>

				<div class="flex items-center mb-6 -mt-4">
					<div class="flex ml-auto">
						<a href="#" class="inline-flex text-xs sm:text-sm font-bold text-blue-500 hover:text-blue-700">Quên mật khẩu?</a>
					</div>
				</div>

				<div class="flex items-center justify-center w-full" v-if="data.loading">
					<UISpinner />
				</div>

				<div class="flex w-full" v-else>
					<UIButton label="Đăng nhập" type="submit" />
				</div>

				<div class="flex justify-center items-center mt-6">
					<a href="#" @click="handleRegisterPage" class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs sm:text-sm text-center">
						<Icon name="octicon:person-add-16" class="h-5 w-5" />
						<span class="ml-2">Bạn chưa có tài khoản?</span>
					</a>
				</div>
			</div>
		</div>
	</VForm>
</template>
