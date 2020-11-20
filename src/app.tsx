import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './app.css'
import ColorPicker from './components';

const App = () => {
  const [color, setColor] = useState<string>('#000000');

  return (
    <ColorPicker
      color={color}
      onChangeColor={setColor} />
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
