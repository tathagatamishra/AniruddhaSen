import React from 'react'
import './Blog.scss'

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Blog() {  
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-blog" : "Blog"}>
        <div className='blog-card'>Blog</div>
    </div>
  )
}
