<template>
  <NuxtLink :class="tc(props.theme)" :to="mailto(props.mail)">{{ props.mail }}</NuxtLink>
</template>

<script setup>
import { tv } from 'tailwind-variants'
  const props = defineProps({
    mail: {
      type: String,
      required: true,
    },
    theme: {
      type: String
    }
  })

  const { mailto } = useHref()

  const { theme } = useAppConfig()
  const tc = tv(theme?.mailLink ? theme.mailLink : {
    base: 'hover:underline',
  });
</script>