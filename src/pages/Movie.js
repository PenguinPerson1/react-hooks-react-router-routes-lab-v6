import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const params = useParams();
  const [movieData,setMovieData] = useState({
    title: "",
    time: "",
    genres: []
  });
  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${params.id}`)
    .then(r=>r.json())
    .then(data => setMovieData(data))
  },[])
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movieData.title}</h1>
        <p>{movieData.time}</p>
        {movieData.genres.map((genre, i) => <span key={i}>{genre}</span>)}
      </main>
    </>
  );
};

export default Movie;
