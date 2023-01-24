import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <main className="main">
      <h1> Alchemy's Library Catalog</h1>
      <p>
        {' '}
        Discover what worlds await you <Link to="books"></Link>
      </p>
    </main>
  );
}
