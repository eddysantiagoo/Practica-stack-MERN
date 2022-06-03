import { Loader } from "react-bulma-components";

export const Loading = () => {
    return(

    <div className="columns is-centered">
        <Loader style={{
            width: 200,
            height: 200
        }}/>
    </div>
    )
}

export default Loading