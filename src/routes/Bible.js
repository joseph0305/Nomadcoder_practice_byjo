
import { useEffect, useState  } from "react";

function Bible(){
    const [ jal , setJal] = useState([]);
    const [id , setId] = useState();
    const [btn , setBtn] = useState(false);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yesu.io/bible?lang=kor&doc=ge&start=1:1&end=1:10`)
        ).json();
        console.log(json)
        setJal(json)
        //setUrl(json[0].url)
        //setId(json[0].id)
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
            Bible
            <div>
                {jal.map(item => <div>{item.message}</div>)}
            </div>
            </div>
    
        </div>
    );
}

export default Bible;