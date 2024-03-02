const Feedback = ({ good, neutral, bad, positive }) => {
  return (
    <div>
      <div>{`Good: ${good}`}</div>
      <div>{`Neutral: ${neutral}`}</div>
      <div>{`Bad: ${bad}`}</div>
      <div>{`Positive: ${positive}%`}</div>
    </div>
  );
};

export default Feedback;
