import React from 'react';
import Clock from './components/Clock.jsx'
import starIcon from './assets/star.svg';
import './styles/Landing.css';

function Landing() {
  const city = 'Toronto, ON';
  const status = 'Open to work';
  const positions = [
    'ui/ux designer @ civiconnect',
    '4th year student @ wilfrid laurier university',
    'president @ laurier computing society',
    'vice president, design @ hawkhacks'
  ];

  return (
    <>
      <div className='spacer' />
      <div className='header'>
        <div className='location'>
            <p>Based in {city} &rarr;</p>
            <Clock />
        </div>
        <div className='status'>
            <img src={starIcon} alt='Star Icon' />
            <p>Status &rarr;</p>
            <p className='bold'>{status}</p>
        </div>
      </div>
      <hr className='divider' />
      <h1>JACQUELINE TRUONG</h1>
      <div className="quick-info">
        <div className='info'>
          <p>Currently &rarr;</p>
          <div className='current'>
            {positions.map((position, index) => (
              <p key={index}>
                {position}{index < positions.length - 1 ? ',' : ''}
              </p>
            ))}
          </div>
        </div>
        <div className='info'>
          <p>Studying &rarr;</p>
          <p className='bold'>computer science</p>
        </div>
        <div className='info'>
          <p>Creating &rarr;</p>
          <p className='bold'>memories</p>
        </div>
      </div>
    </>
  )
}

export default Landing
