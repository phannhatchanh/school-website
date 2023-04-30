<script setup lang="ts">
const data = await getNavData();
const schoolname = await getSetting();
const expanded = ref(false);
const hidden = ref(true);

const toggleExpanded = (val?: boolean) => {
	expanded.value = typeof val !== "undefined" ? val : !expanded.value;
	document.body.setAttribute("scrollable", expanded.value.toString());

	if (expanded.value) {
		hidden.value = false;
	} else {
		setTimeout(() => (hidden.value = true), 200);
	}
};
</script>

<template>
	<nav :expanded="expanded">
		<div class="nav-toggle">
			<Icon
				:name="expanded ? 'mdi:close' : 'mdi:menu'"
				size="35"
				@click="() => toggleExpanded()"
			/>
			<div v-for="(item, index) in schoolname" :key="index">
				{{ item.name }} {{ item.district }}
			</div>
		</div>
		<div class="content" :hidden="hidden">
			<div class="top">
				<div class="nav-menu">
					<NuxtLink
						v-for="item in data.menu"
						:key="item.title"
						:to="'/' + item.path"
						class="btn"
						@click="() => toggleExpanded(false)"
						:class="item.path == $route.path.split('/')[1] ? 'active' : null"
						:title="item.title"
					>
						<Icon :name="item.icon" size="23" />&nbsp;&nbsp;{{ item.title }}
					</NuxtLink>
				</div>
			</div>
			<div class="bottom">
				<div class="socials-menu">
					<Button
						v-for="(item, index) in data.socials"
						:key="index"
						:to="item.url"
						:target-blank="true"
					>
						<Icon :name="item.icon" size="30" />
					</Button>
				</div>
			</div>
		</div>
		<div
			class="click-outside-handler"
			@click="() => toggleExpanded(false)"
		></div>
	</nav>
</template>

<style scoped lang="scss">
nav {
	position: fixed;
	left: 0px;
	top: 0px;
	bottom: 0px;

	font-size: 20px;
	color: white;
	z-index: 10;

	.nav-toggle {
		user-select: none;
		display: none;
	}

	.content {
		width: 250px;
		background-color: var(--blue);

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;

		.logo {
			max-width: 100%;
			height: auto;
		}

		.top {
			overflow-y: auto;

			&::-webkit-scrollbar {
				background-color: transparent;
				width: 12px;
			}

			&::-webkit-scrollbar-thumb {
				background-color: #0003;
				border-radius: 50px;

				&:hover {
					background-color: #0005;
				}
			}

			.nav-menu {
				padding-top: 1em;
				display: flex;
				flex-direction: column;
				gap: 8px;
				overflow-x: hidden;

				.btn {
					color: white;
					text-decoration: none;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow-x: hidden;
					min-height: 1.94em;

					padding: 0.35em 0.8em 0.35em 1em;
					border-top-right-radius: 7px;
					border-bottom-right-radius: 7px;
					margin-right: 1em;

					transition: background-color 0.2s, color 0.1s;

					&.active,
					&:hover {
						background-color: var(--yellow);
						color: #252525;
					}

					&.active {
						font-weight: 500;
					}
				}
			}
		}

		.socials-menu {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			align-items: center;

			padding: 1em 0;
		}
	}
}

@media (max-width: 800px) {
	nav {
		width: 100%;
		bottom: initial;

		.nav-toggle {
			color: white;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: var(--blue);
			padding: 0.35em 0.5em;
		}

		.content {
			z-index: 1;
			transform: translateX(-100%);
			transition: transform ease-out 0.2s;

			position: fixed;
			top: 49px;
			bottom: 0px;
			left: 0px;
			height: initial;

			&[hidden="true"] {
				display: none;
			}
		}

		.click-outside-handler {
			background-color: #0000;
			transition: background-color 0.2s;
		}

		&[expanded="true"] {
			z-index: 10;

			.content {
				display: flex;
				transform: translateX(0%);
			}

			.click-outside-handler {
				background-color: #0003;
				z-index: -1;
				position: fixed;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
			}
		}
	}
}
</style>
