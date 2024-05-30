import React from 'react';
import starIcon from './assets/star.svg';
import './styles/Landing.css';

function Landing() {
  return (
    <>
      <div className='header'>
        <div className='location'>
            <p>Based in Toronto, ON &rarr;</p>
            <p className='bold'>6:14:44 PM EDT</p>
        </div>
        <div className='status'>
            <img src={starIcon} alt='Star Icon' />
            <p>Status &rarr;</p>
            <p className='bold'>open to work</p>
        </div>
      </div>
      <hr className='divider' />
      <h1>JACQUELINE TRUONG</h1>
      <div className="quick-info">
        <div className='info'>
          <p>Currently &rarr;</p>
          <div className='current'>
            <p>ui/ux designer @ civiconnect,</p>
            <p>4th year student @ wilfrid laurier university,</p>
            <p>president @ laurier computing society,</p>
            <p>vice president, design @ hawkhacks</p>
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
