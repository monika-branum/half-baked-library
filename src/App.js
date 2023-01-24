import BookList from './components/book/BookList';
import './App.css';
import Main from './components/main/Main.js';
import { Switch, Route } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <>
      <Switch>
        <Route path="/books" component={BookList} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
}

export default App;
