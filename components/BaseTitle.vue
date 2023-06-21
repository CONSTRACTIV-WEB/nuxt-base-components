<template>
  <component :is="tag" :class="tc({ theme: props.theme })">
    <slot />
  </component>
</template>
<script setup>
  import { tv } from 'tailwind-variants'

  const props = defineProps({
    tag: {
      type: String,
      default: 'h2',
    },
    theme: {
      type: String,
      required: true,
    },
  })

  const { theme } = useAppConfig()
  const tc = tv(theme.heading)
</script>
