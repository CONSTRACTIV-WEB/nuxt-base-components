<template>
  <NuxtLink :class="tc(props.theme)" :to="tel(props.phoneNumber)">{{ props.phoneNumber }}</NuxtLink>
</template>
<script setup>
import { tv } from 'tailwind-variants'
  const props = defineProps({
    phoneNumber: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
    }
  })

  const { tel } = useHref()

  const { theme } = useAppConfig()
  const tc = tv(theme?.phoneLink ? theme.phoneLink : {
    base: 'hover:underline',
  });
</script>