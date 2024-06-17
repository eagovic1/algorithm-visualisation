// not found page

import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>
        The page you are looking for does not exist. Please <Link to="/home">go back</Link>.
      </p>
    </div>
  );
};

export default NotFoundPage;
