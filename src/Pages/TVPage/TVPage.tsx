import Header from "../../Components/Shared/Header/Header";
import "./tvpage.css";
import { getTvByID } from "../../util/api";
import { useEffect, useState } from "react";
import { Tv } from "../../util/interface";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

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
        <div style={{ display: "flex" }}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${tv.poster_path}`}
            alt="poster"
            className="posterImage"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2">{tv.name}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TVPage;
