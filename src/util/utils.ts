import { Genre } from "./interface";

export const handleWheel = (
  event: React.WheelEvent<HTMLDivElement>,
  scrollTimeoutRef: React.MutableRefObject<ReturnType<
    typeof setTimeout
  > | null>, // Change here
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

export const getYear = (dateString: string): string => {
  const [year, month, day] = dateString.split("-");
  return ` (${year})`;
};

export const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split("-");
  return ` (${day}/${month}/${year})`;
};

export const formatGenres = (genres: Array<Genre>): string => {
  const genreString = genres.map((genre) => genre.name).join(",");
  return genreString;
};

export const formatRuntime = (runtime: number): string => {
  const runtimeHour = Math.floor(runtime / 60); // Use Math.floor for clarity
  const runtimeMinute = runtime % 60;
  return `${runtimeHour}h ${runtimeMinute}m`;
};
