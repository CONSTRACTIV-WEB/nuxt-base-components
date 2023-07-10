<template>
  <component
    :is="tag"
    ref="tweenTarget"
    :class="`opacity-0 ${tc(props.theme)} ${
      isVisible === true ? 'animate-reveal' : ''
    } `"
    ><slot
  /></component>
</template>

<script setup>
  import { tv } from 'tailwind-variants'
  import { useIntersectionObserver } from '@vueuse/core'

  const props = defineProps({
    tag: {
      type: String,
      required: true,
      default: 'span',
    },
    theme: {
      type: String,
      required: true,
    },
  })

  const tweenTarget = ref(null)
  const isVisible = ref(false)

  useIntersectionObserver(tweenTarget, ([{ isIntersecting }]) => {
    isVisible.value = isIntersecting
  })

  const { theme } = useAppConfig()
  const tc = tv(
    theme?.tween
      ? theme.tween
      : {
          base: 'block',
        }
  )
</script>
