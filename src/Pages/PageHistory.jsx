
import React from "react";
import {Link, useParams} from "react-router-dom";
function PageHistory(){

    const para = useParams()
    const id = para.id
    return(
        <div>
            {id}
        </div>
    );

}
export default PageHistory