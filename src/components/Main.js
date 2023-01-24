import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <main className="main">
      <h1> Alchemys Library Catalog</h1>
      <p>Discover what worlds await you</p>
      <Link to="/books">books</Link>
    </main>
  );
}
