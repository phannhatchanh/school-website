<script setup lang="ts">
import { User } from "~/types/user";
const { $bus } = useNuxtApp();

useHead({
	title: "Tạo tài khoản của bạn",
});

const { signUp } = useAuth();

const data = reactive<User>({
	name: "",
	username: "",
	email: "",
	profileImage: "",
	password: "",
	repeatPassword: "",
});

// redirect to login page
const handleLoginPage = () => {
	$bus.$emit("auth:form", { page: "login" });
};

// handle register
const handleRigister = async () => {
	try {
		await signUp(data);
		handleLoginPage();
		$bus.$emit("toast", {
			message: "Usuário criado com sucesso!",
			type: "success",
		});
	} catch (error) {
		console.error(error);
	}
};
</script>

<template>
	<VForm @submit="handleRigister" class="flex flex-col gap-4 p-10 w-2/5">
		<h1 class="text-2xl font-medium text-gray-700">Tạo tài khoản của bạn</h1>
		<div>
			<VField
				v-model="data.name"
				type="text"
				name="name"
				rules="required|minMax:5,20"
				placeholder="Tên hiển thị"
				class="block border border-gray-400 p-2 rounded-md w-full"
			/>
			<VErrorMessage name="name" class="text-red-500" />
		</div>

		<div>
			<VField
				v-model="data.username"
				type="text"
				name="username"
				rules="required|minMax:5,20"
				placeholder="Tên đăng nhập"
				class="block border border-gray-400 p-2 rounded-md w-full"
			/>
			<VErrorMessage name="username" class="text-red-500" />
		</div>

		<div>
			<VField
				v-model="data.email"
				type="email"
				name="email"
				rules="required|email"
				placeholder="Địa chỉ Email"
				class="block border border-gray-400 p-2 rounded-md w-full"
			/>
			<VErrorMessage name="email" class="text-red-500" />
		</div>

		<div>
			<VField
				v-model="data.profileImage"
				type="text"
				name="profileImage"
				rules="required|url"
				placeholder="Địa chỉ ảnh đại diện"
				class="block border border-gray-400 p-2 rounded-md w-full"
			/>
			<VErrorMessage name="profileImage" class="text-red-500" />
		</div>

		<div>
			<VField
				v-model="data.password"
				type="password"
				name="password"
				rules="required|minMax:5,16"
				placeholder="Mật khẩu"
				class="block border border-gray-400 p-2 rounded-md w-full"
			/>
			<VErrorMessage name="password" class="text-red-500" />
		</div>

		<div>
			<VField
				v-model="data.repeatPassword"
				type="password"
				name="repeatPassword"
				rules="required|minMax:5,16|confirmed:password"
				placeholder="Nhập lại mật khẩu"
				class="block border border-gray-400 p-2 rounded-md w-full"
			/>
			<VErrorMessage name="repeatPassword" class="text-red-500" />
		</div>

		<UIButton label="Tạo một tài khoản" type="submit" />
		<UIButton
			label="Tới trang đăng nhập"
			type="button"
			color="secondary"
			@click="handleLoginPage"
		/>
	</VForm>
</template>
