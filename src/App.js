import BookList from './components/book/BookList';
import './App.css';
import Main from './components/Main.js';
import { Switch, Route } from 'react-router-dom';

import BookDetail from './components/book/BookDetail.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <>
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path="/books" component={BookList} />
        <Route exact path="/books/:id" component={BookDetail} />
        <Route exact path="/" component={Main} />
      </Switch>
    </>
  );
}

export default App;
