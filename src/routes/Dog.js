
import { useEffect, useState  } from "react";

function Dog(){
    const [url , setUrl] = useState();
    const [id , setId] = useState();
    const [btn , setBtn] = useState(false);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://api.thedogapi.com/v1/images/search`)
        ).json();
        console.log(json[0].url)
        setUrl(json[0].url)
        setId(json[0].id)
    }
    function Click(){
        setBtn((current)=> !current)
    }
    useEffect( () => {
        getMovie();
    },[btn]);
    return (
        <div>
            <div>
            <button onClick={Click}>refresh to get a new dog img</button>
            </div>
            <img src={url} alt={id}/>
        </div>
    );
}

export default Dog;