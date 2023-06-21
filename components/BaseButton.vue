<template>
    <component
      :is="to ? NuxtLink : 'button'"
      :class="tc(props.theme)"
      :to="to"
    >
    <slot />
</component>
</template>
<script setup>
import { tv } from 'tailwind-variants'
import { NuxtLink } from '#components'

const props = defineProps({
    to: {
    type: [String, Object],
    },
    theme: {
    type: String,
    required: true,
    },
})

const { theme } = useAppConfig()
const tc = tv(theme.btn ? theme.btn : {
    base: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
});
</script>
