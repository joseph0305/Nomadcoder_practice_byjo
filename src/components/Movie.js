import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id ,Img,title ,summary,genres}){

    return (
        <div >
        <img src={Img} alt={title}/>
        <h2>
          <Link to={`/movie/${id}`}>
          {title}
          </Link>
          </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g,index) => (
            <li key={index}> {g}</li>
          ))}
        </ul>
        <hr/>
      </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number,
    Img : PropTypes.string.isRequired,
}
export default Movie;