import '../css/App.css';
import React from 'react';

import CurrentTime from './CurrentTime';
import Stock from './Stock'
import Chess from './Chess';
import AddNotations from './AddNotations';

class App extends React.Component {
  render() {
    const board = <Chess />
    return (<main>
      <CurrentTime />
      <h2>Задание 2</h2>
      <Stock />
      <h2>Задание 3</h2>
      {board}
      <AddNotations board={board.props} />
    </main>)
  }
  
}

export default App;
