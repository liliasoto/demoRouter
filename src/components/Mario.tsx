import { useNavigate } from "react-router-dom";

function Mario(){
    const navigate = useNavigate();
    return(
        <div>
            <h2>It's a me! Mario!</h2>
            <button onClick={()=>navigate("/")}>
                Go to main page
            </button>
        </div>
    );
}

export default Mario;