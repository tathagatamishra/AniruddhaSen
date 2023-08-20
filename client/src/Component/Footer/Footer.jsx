import React from 'react'
import './Footer.scss'

import { useDarkMode } from '../../assets/DarkModeContext';

export default function Footer() {

  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? 'dark-footer' : 'Footer'}>© 2023 Aniruddha Sen</div>
  )
}
