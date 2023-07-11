<template>
  <component :is="props.tag" :class="tc({ theme: props.theme })">
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
    }
  })

  const { theme } = useAppConfig()
  const tc = tv(theme?.heading ? theme.heading : {
    base: 'font-primary text-bold text-xl',
  });
</script>
