import React from "react";
import user from "../data/user";

function links(){
return(
    <div id="links">
        <h3>Links</h3>
        <a href={user.links.linkedin}>{user.links.linkedin}</a>
        <a href={user.links.github}>{user.links.github}</a>
    </div>
)
}
export default links;