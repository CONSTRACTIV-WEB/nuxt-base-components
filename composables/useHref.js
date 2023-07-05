export function useHref() {
  const mailto = (mail) => {
    return 'mailto:' + mail
  }

  const tel = (tel) => {
    return 'tel:' + tel.replace(/[^\d+]/g, '')
  }

  return {
    mailto,
    tel,
  }
}