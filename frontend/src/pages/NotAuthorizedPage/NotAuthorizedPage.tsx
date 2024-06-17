// not authorized page

import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthorized = () => {
  return (
    <div>
      <h1>Not Authorized</h1>
      <p>
        You are not authorized to view this page. Please <Link to="/login">login</Link> or <Link to="/register">register</Link>.
      </p>
    </div>
  );
};

export default NotAuthorized;