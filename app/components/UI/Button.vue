<script setup lang="ts">
interface Props {
	label: string;
	color?: string;
}

const props = withDefaults(defineProps<Props>(), {
	label: "hello",
});

const emit = defineEmits<{
	(e: "click"): void;
}>();

const handleClick = () => {
	emit("click");
};

const btnClasses = computed(() => {
	if (props.color === "secondary") {
		return "border-blue-600 hover:bg-blue-600 text-blue-500 rounded py-2 w-full hover:text-white";
	}

	return "bg-blue-600 hover:bg-blue-700 text-white rounded py-2 w-full transition duration-150 ease-in";
});
</script>

<template>
	<button
		@click="handleClick"
		:class="[
			'border transition-colors py-2 font-medium rounded-md min-w-[120px]',
			btnClasses,
		]"
	>
		{{ label }}
	</button>
</template>
