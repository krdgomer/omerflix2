import Header from "../../Components/Shared/Header/Header";
import "./tvpage.css";
import { getTvByID } from "../../util/api";
import { useEffect, useState } from "react";
import { Tv } from "../../util/interface";
import { useParams } from "react-router-dom";
import TVSummary from "../../Components/TVPage/TVSummary";
import ReviewsTV from "../../Components/TVPage/RewievsTV/RewievsTV";

function TVPage() {
  const [tv, setTv] = useState<Tv | null>(null);

  const { tvId } = useParams();

  console.log(tvId);

  useEffect(() => {
    async function fetchTv() {
      const tvData = await getTvByID(tvId);
      console.log(tvData);
      setTv(tvData);
    }
    fetchTv();
  }, []);

  if (!tv) {
    return (
      <div>
        <Header />
        Loading
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="containerdiv">
        <TVSummary tv={tv} />
      </div>
      <ReviewsTV series_id={tv.id.toString()} />
    </div>
  );
}

export default TVPage;
