import React from 'react';
import Home from './pages/Home';
import FetchPriority from './pages/FetchPriority';
import Override from './pages/Override';

export default {
  logo: {             
    img: void 0,      
    title: 'Chrome117',
  },
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
    {
      key: 'override',
      title: '篡改请求',
      icon: 'AndroidOutlined',
      url: '/override',
      routes: [
        {
          path: '/override',
          element: <Override />,
        },
      ],
    },
    {
      key: 'fetchPriority',
      title: '请求优先级',
      icon: 'AndroidOutlined',
      url: '/fetch-priority',
      routes: [
        {
          path: '/fetch-priority',
          element: <FetchPriority />,
        },
      ],
    },
  ],
};