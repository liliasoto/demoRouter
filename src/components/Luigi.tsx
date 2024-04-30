import { useNavigate } from "react-router-dom";

function Luigi(){
    const navigate = useNavigate();
    return(
        <div>
            <h2>Hi I'm Luigi!</h2>
            <button onClick={()=>navigate("/")}>
                Go to main page
            </button>
        </div>
    );
}

export default Luigi;