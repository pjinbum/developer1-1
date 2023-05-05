
import './App.css';
import Header from './Header';
import ReactPage from './ReactPage';
import { Routes , Route } from 'react-router-dom';
import Sentence from './Sentence';
import Book from './Book';
import Word from './Word';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <ReactPage></ReactPage>


      <Routes>
        <Route path='/'></Route>
        <Route path='/word' element={<Word></Word>}></Route>
        <Route path='/sentence' element={<Sentence></Sentence>}></Route>
        <Route path='/book' element={<Book></Book>}></Route>
      </Routes>

    </div>
  );
}

export default App;
