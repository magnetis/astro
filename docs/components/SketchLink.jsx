import React from 'react';
import '../css/sketch-link.css';

const SketchLink = ({ file }) => (
  <div className='sketch-link'>
    <a
      role='button'
      className='a-btn a-btn--earth a-btn--medium'
      tabIndex='0'
      href={`/public/sketches/${file}.sketch`}
      download
    >
      download sketch file
    </a>
  </div>
);

export default SketchLink;
