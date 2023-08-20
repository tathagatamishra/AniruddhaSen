import React from 'react'
import './Skill.scss'

import { useDarkMode } from '../../assets/DarkModeContext';

export default function Skill() {

  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? 'dark-skill' : 'Skill'}>
        <div className='skill-card'>
        Expertise
        </div>
    </div>
  )
}
