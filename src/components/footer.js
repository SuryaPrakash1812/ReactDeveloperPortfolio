import React from "react"

import { FaLinkedin } from "react-icons/fa"
import{FaGithub} from "react-icons/fa"
import{FaInstagram} from "react-icons/fa"

export default function Footer()
{
    return(
<div className="profile">
<a  href="https://in.linkedin.com" ><FaLinkedin  className="linkedin"/></a>
<a  href="https://www.github.com" ><FaGithub className="github" /></a>
<a  href="https://www.instagram.com" ><FaInstagram className="instagram"  /></a>

</div>
    )

   
}