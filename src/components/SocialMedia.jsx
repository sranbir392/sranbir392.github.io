import React from 'react';
import {BsLinkedin,BsGithub} from "react-icons/bs"
import {MdEmail} from "react-icons/md"

const SocialMedia = () => {
  return (
    <div className='app__social'>
<div>
  <a href="mailto:sranbir392@gmail.com"> <MdEmail/></a>
</div>
<div>
 <a target="_blank" href="https://www.linkedin.com/in/sranbir392"><BsLinkedin/></a>
</div>
<div>
 <a target="_blank" href="https://github.com/sranbir392"><BsGithub/></a>
</div>
    </div>
  )
}

export default SocialMedia