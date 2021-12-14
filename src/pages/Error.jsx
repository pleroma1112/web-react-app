import { useLocation } from "react-router"

function Error(){

    let pathname = useLocation().pathname

    return(
        <div>
            <h1>Error Unknown Page {pathname}</h1>
        </div>
    )
}

export default Error