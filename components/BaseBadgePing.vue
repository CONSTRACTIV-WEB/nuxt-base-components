<template>
  <span
    :class="`relative block ${wrapper()}`"
  >
    <span
      :class="`animate-ping absolute inline-flex h-full w-full rounded-full ${ping()}`"
    ></span>
    <span
      :class="`flex items-center justify-center relative ${label()}`"
      >{{ props.label }}</span
    >
  </span>
</template>
<script setup>
import { tv } from 'tailwind-variants'
  const props = defineProps({
    label: {
      type: [Number, String],
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  })

  const { theme } = useAppConfig()
  const tc = tv(theme?.badgePing ? theme.badgePing : {
    base: 'lg:w-[1.2rem] lg:h-[1.2rem] w-[1.8rem] h-[1.8rem] bg-blue-500 rounded-full text-xs lg:text-[1rem] flex items-center justify-center text-white relative z-10',
  });

  const { wrapper, ping, label } = tc({ theme: props.theme })
</script>