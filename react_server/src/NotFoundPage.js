import React, { useEffect } from 'react';
import NotFound_pixabay from '../src/404NotFound_pixabay.png';

import { useHistory } from 'react-router-dom';

function NotFoundPage() {
  const history = useHistory();

  useEffect(() => {
    alert('존재하지 않는 페이지입니다.');
    history.push('/');

    return () => {};
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={NotFound_pixabay}
        width='100%'
        height='100%'
        alt='404NoutFound'
      />
    </div>
  );
}

export default NotFoundPage;
