import { useRef } from "react";
import { Movie, Tv } from "../../../util/interface";
import MediaCard from "../MediaCard/MediaCard";
import "./slidermedia.css";

type TrendingMediaProps = {
  mediaData: Movie[] | Tv[];
  handleWheel: (
    e: React.WheelEvent<HTMLDivElement>,
    scrollTimeoutRef: React.MutableRefObject<ReturnType<
      typeof setTimeout
    > | null>,
    containerRef: React.RefObject<HTMLDivElement>
  ) => void;
  type: string;
  containerRef: React.RefObject<HTMLDivElement>; // Add this line
};

const SliderMedia: React.FC<TrendingMediaProps> = ({
  mediaData,
  handleWheel,
  type,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<any>(null);

  return (
    <div
      className="trending"
      ref={containerRef}
      onWheel={(event) => handleWheel(event, scrollTimeoutRef, containerRef)} // Use the props here
    >
      {mediaData.map((media, index) => (
        <MediaCard key={index} apiResponse={media} type={type} />
      ))}
    </div>
  );
};

export default SliderMedia;
