import Description from './components/description/Description';
import Options from './components/options/Options';
import Feedback from './components/feedback/Feedback';

import './App.css';

const App = () => {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <>
      <Description />
      <Options />
      <Feedback />
    </>
  );
};

export default App;
