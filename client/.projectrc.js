import React from 'react';
import Home from './pages/Home';

export default {
  logo: {             
    img: void 0,      
    title: 'Chrome117',
  },
  footer: () => ('footer'),
  header: () => ('header'),
  useHashRouter: true,
  menu: [ 
    {
      key: 'home',
      title: '首页',
      icon: 'AndroidOutlined',
      url: '/',
      routes: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ],
};