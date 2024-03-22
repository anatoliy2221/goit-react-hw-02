import { useEffect, useState } from 'react';
import Description from './components/description/Description';
import Options from './components/options/Options';
import Feedback from './components/feedback/Feedback';
import './App.css';
import Notification from './components/notification/Notification';

const App = () => {
  const [values, setVelues] = useState(() => {
    const saveValues = JSON.parse(window.localStorage.getItem('saved-values'));
    if (saveValues !== null) {
      return saveValues;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-values', JSON.stringify(values));
  }, [values]);

  const updateFeedback = feedbackType => {
    setVelues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const resetFeedback = () => {
    setVelues({ good: 0, neutral: 0, bad: 0 });
  };

  const percentPositivReviews = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          percentPositivReviews={percentPositivReviews}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
