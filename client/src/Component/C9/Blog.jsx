import React from 'react'
import './Blog.scss'

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Blog() {  
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark-blog" : "Blog"}>
        <div className='blog-card'>
        <div className="blog-heading">
          <h1>Blog</h1>
        </div>
        </div>
    </div>
  )
}
