import React from 'react';
import '../css/icons-collection.css';

export const Card = ({ icon }) => (
  <div className='icons-collection__card'>
    <div className='icons-collection__card-icon'>
      <i className={`a-icon a-icon__${icon} a-icon--size-big`} />
    </div>
    <p className='icons-collection__card-description'>{icon}</p>
  </div>
);

const IconsCollection = ({ icons }) => (
  <div className='icons-collection'>
    {icons &&
      icons.map(icon => {
        return <Card key={icon} icon={icon} />;
      })}
  </div>
);

export default IconsCollection;
