export const handleWheel = (
  event: React.WheelEvent<HTMLDivElement>,
  scrollTimeoutRef: React.MutableRefObject<number | null>,
  containerRef: React.RefObject<HTMLDivElement>
) => {
  if (containerRef.current) {
    containerRef.current.scrollLeft += event.deltaY;
    event.preventDefault();

    // Debounce scroll events
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      scrollTimeoutRef.current = null;
    }, 10); // Adjust debounce delay as needed
  }
};

export const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};
