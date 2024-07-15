import './App.css';
import Background from './Background.js';
import InputFunc from './InputFunc.js';
import ToggleTextColor from './ToggleTextColor.js';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('')
  const [isHardlyVisible, setIsHardlyVisible] = useState(true);
  const [textcolor, setTextColor] = useState('black');

  return (
    <main>
      <Background
        color={color}
        textcolor={textcolor}
      />
      <InputFunc
        color={color}
        setColor={setColor}
        textcolor={textcolor}
      />
      <ToggleTextColor
        isHardlyVisible={isHardlyVisible}
        setIsHardlyVisible={setIsHardlyVisible}
        setTextColor={setTextColor}
      />
    </main >
  );
}

export default App;
