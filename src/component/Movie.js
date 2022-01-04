// import './App.css';

export default function Movie() {
  const movieDetails = [
    {
      name: "Venom",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_.jpg",
      rating: "4.5",
      summary:
        "While trying to take down Carlton, the CEO of Life Foundation, Eddie, a journalist, investigates experiments of human trials. Unwittingly, he gets merged with a symbiotic alien with lethal abilities",
      releaseYear: 2018
    },
    {
      name: "Captain Marvel",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg",
      rating: "4.5",
      summary:
        "Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent",
      releaseYear: 2019
    },
    {
      name: "Doctor Strange",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg",
      rating: "4.5",
      summary:
        "In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage",
      releaseYear: 2016
    },
    {
      name: "Ant-Man",
      poster: "http://www.movienewsletters.net/photos/208057R1.jpg",
      rating: "4.5",
      summary:
        "Scott, a master thief, gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements",
      releaseYear: 2015
    },
    {
      name: "Captain America: The First Avenger",
      poster: "https://m.media-amazon.com/images/I/61GV+Az3LzL._AC_SY741_.jpg",
      rating: "4.5",
      summary:
        "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation",
      releaseYear: 2011
    }
  ];
  return (
    <div>
      <h2>Movie Details</h2>
      <div className="movie-container">
        {movieDetails.map((movieDetails) => {
          return (
            <div>
              <img
                className="inside-container"
                src={movieDetails.poster}
                alt="movieimage"
              />
              <h3 className="inside-container"> Name: {movieDetails.name}</h3>
              <h3 className="inside-container">
                Rating: {movieDetails.rating}
              </h3>
              <h3 className="inside-container">
                Releaase Year: {movieDetails.releaseYear}
              </h3>
              <h3 className="inside-container">
                Summary: {movieDetails.summary}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
