export function useLightbox() {
  const indexRef = ref(0)
  const visibleRef = ref(false)

  function showImg(index: number) {
    indexRef.value = index
    visibleRef.value = true
  }

  function onHide() {
    visibleRef.value = false
  }

  return {
    visibleRef,
    indexRef,
    showImg,
    onHide,
  }
}
