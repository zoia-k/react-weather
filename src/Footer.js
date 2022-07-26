import React from 'react';
import './Footer.css';
export default function Footer() {
  return (
    <div className='Footer'>
      <p>
        {' '}
        <a
          href='https://github.com/zoia-k/react-weather'
          target='_blank'
          rel='noreferrer'
        >
          Open-source
        </a>{' '}
        code, by{' '}
        <a
          href='https://zoia-k-responsive-portfolio.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          Zoia_K
        </a>
      </p>
    </div>
  );
}
