export default function () {
  const { y } = useWindowScroll();

  const showScrollTop = computed(() => {
    return y.value > 100;
  });

  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return {
    scrollTop,
    showScrollTop,
  };
}
