import React from "react";
import user from "../data/user";
import Links from "./links"
function About({ bio, github, linkedin }){
  return (
    <div id="about">
    <h2>About Me</h2>
    {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      < Links user={user}/>;
    </div>
  );
}

export default About;
