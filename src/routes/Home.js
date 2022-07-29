



import { useEffect, useState } from "react"; // useState import
import Movie from ".././components/Movie";

function Home(){
  const [movies , setMovies] = useState([]);
  const [loading , setLoading] = useState(true);
  const getMovies = async() => {
    const json = await (await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )).json();
    //const json = await response.json();
    setMovies(json.data.movies);
    console.log("json",json);
    setLoading(false);
  }
  useEffect(()=> {
    getMovies();
  },[])
  console.log(movies)
/*   useEffect(()=> {
  fetch(
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
  ).then((response)=>response.json())
  .then((json)=> {
    setMovies(json.data.movies)
    setLoading(false);
  })
 }) */
 return (
  <div>
    {/* { [<li>1</li>,<li>2</li>,<li>3</li>,<li>4</li>]} */}
    { loading ? <div>Loading</div> : <div>{movies.map((movie)=> 
      <Movie key = {movie.id} id={movie.id} Img={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres}/>
    
    )}</div>}
  </div>
 );
}
// key는 map안에서 컴포넌트 렌더링할때만 필요하기 때문에 저렇게 props과 따로 해주는 형식이다
export default Home;

// JSX 여러줄 쓸때 ()
//     한줄에서는 () 생략가능