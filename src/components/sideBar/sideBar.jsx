import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './sideBar.scss';

const sideBar = () => {
  // TODO: Placeholder! Replace with props
  const items = [
    {
      name: 'one',
      icon: 'columns',
      url: 'myurl',
    },
    {
      name: 'two',
      icon: 'question',
      url: 'myurl',
    },
  ];

  return (
    <div className="SideBar">
      {
        items.map(item => (
          <div className="Item">
            <FontAwesomeIcon icon={item.icon} />
            <a href="#">{item.name}</a>
          </div>
        ))
      }
    </div>
  );
};

export default sideBar;
