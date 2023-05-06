<script setup lang="ts">
const { $bus } = useNuxtApp();

useHead({
	title: "Tạo tài khoản của bạn",
});

const { signUp } = useAuth();

const data = reactive({
	name: "",
	username: "",
	email: "",
	profileImage: "",
	password: "",
	repeatPassword: "",
	loading: false,
});

// redirect to login page
const handleLoginPage = () => {
	($bus as any).$emit("auth:form", { page: "login" });
};

// handle register
const handleRigister = async () => {
	data.loading = true;
	try {
		await signUp(data);
		handleLoginPage();
		($bus as any).$emit("toast", {
			message: "Tài khoản được tạo thành công!",
			type: "success",
		});
	} catch (error) {
		($bus as any).$emit("toast", {
			message: error,
			type: "error",
		});
	} finally {
		data.loading = false;
	}
};
</script>

<template>
	
	<VForm @submit="handleRigister" class="min-h-screen flex flex-col items-center justify-center bg-white">
		<div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
			<div class="font-bold self-center text-xl sm:text-2xl uppercase text-gray-800">
				Tạo một tài khoản
			</div>
			<div class="mt-10">
				<div class="flex flex-col mb-6">
					<label for="fullname" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 font-bold">
						Tên hiển thị
					</label>
					<div class="relative">
						<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
							<Icon name="octicon:person-24" class="h-5 w-5" />
						</div>
						<VField
							v-model="data.name"
							type="text"
							name="name"
							rules="required|minMax:5,20"
							placeholder="Tên hiển thị"
							class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
						/>
					</div>
					<VErrorMessage name="name" class="text-red-500" />
				</div>
				<div class="flex flex-col mb-6">
					<label for="username" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 font-bold">
						Tên đăng nhập
					</label>
					<div class="relative">
						<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
							<Icon name="octicon:sign-in-24" class="h-5 w-5" />
						</div>
						<VField
							v-model="data.username"
							type="text"
							name="username"
							rules="required|minMax:5,20"
							placeholder="Tên đăng nhập"
							class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
						/>
					</div>
					<VErrorMessage name="username" class="text-red-500" />
				</div>
				<div class="flex flex-col mb-6">
					<label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 font-bold">
						Địa chỉ E-Mail
					</label>
					<div class="relative">
						<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
							<Icon name="bi:at" class="h-5 w-5" />
						</div>
						<VField
							v-model="data.email"
							type="email"
							name="email"
							rules="required|email"
							placeholder="Địa chỉ Email"
							class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
						/>
					</div>
					<VErrorMessage name="email" class="text-red-500" />
				</div>
				<div class="flex flex-col mb-6">
					<label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 font-bold">
						Ảnh đại diện (Ví dụ: https://website.com/avatar.jpg)
					</label>
					<div class="relative">
						<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
							<Icon name="octicon:image-24" class="h-5 w-5" />
						</div>
						<VField
							v-model="data.profileImage"
							type="text"
							name="profileImage"
							rules="required|url"
							placeholder="Địa chỉ ảnh đại diện"
							class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
						/>
					</div>
					<VErrorMessage name="profileImage" class="text-red-500" />
				</div>
				<div class="flex flex-col mb-6">
					<label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 font-bold">
						Mật khẩu
					</label>
					<div class="relative">
						<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
							<Icon name="octicon:lock-24" class="h-5 w-5" />
						</div>
						<VField
							v-model="data.password"
							type="password"
							name="password"
							rules="required|minMax:5,16"
							placeholder="Mật khẩu"
							class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
						/>
					</div>
					<VErrorMessage name="password" class="text-red-500" />
				</div>
				<div class="flex flex-col mb-6">
					<label for="repeatPassword" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600  font-bold">
						Xác nhận mật khẩu
					</label>
					<div class="relative">
						<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
							<Icon name="octicon:lock-24" class="h-5 w-5" />
						</div>
						<VField
							v-model="data.repeatPassword"
							type="password"
							name="repeatPassword"
							rules="required|minMax:5,16|confirmed:password"
							placeholder="Nhập lại mật khẩu"
							class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
						/>
					</div>
					<VErrorMessage name="repeatPassword" class="text-red-500" />
				</div>

				<div class="flex items-center justify-center w-full" v-if="data.loading">
					<UISpinner />
				</div>
				<div class="flex w-full" v-else>
					<UIButton label="Tạo tài khoản" type="submit" />
				</div>

				<div class="flex justify-center text-gray-500 font-bold items-center mt-6">
					<div class="inline-flex items-center text-xs sm:text-sm text-center">
						<Icon name="octicon:person-16" class="h-5 w-5 mb-1" />
						<span class="ml-2">Bạn đã có tài khoản? <a href="#" @click="handleLoginPage" class="font-bold text-blue-500 hover:underline">Đăng nhập</a>.</span>
					</div>
				</div>
			</div>
		</div>
	</VForm>
</template>
