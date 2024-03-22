import css from './Feedback.module.css';

const Feedback = ({
  totalFeedback,
  values: { good, neutral, bad },
  percentPositivReviews,
}) => {
  return (
    totalFeedback > 0 && (
      <ul className={css.feedbackList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {percentPositivReviews}%</li>
      </ul>
    )
  );
};
export default Feedback;
