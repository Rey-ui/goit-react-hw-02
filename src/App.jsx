import "./App.css";
import Feedback from "./components/Feedback.jsx";
import Options from "./components/Options.jsx";
import Notification from "./components/Notification.jsx";
import Description from "./components/Description.jsx";
import { useEffect, useState } from "react";

const reviewType = {
  good: 0,
  neutral: 0,
  bad: 0,
};
function App() {
  const [clicks, setClicks] = useState(() => {
    const storedClicks = localStorage.getItem("clicks");
    return storedClicks ? JSON.parse(storedClicks) : reviewType;
  });
  useEffect(() => {
    localStorage.setItem("clicks", JSON.stringify(clicks));
  }, [clicks]);
  const updateFeedback = (feedbackType) => {
    setClicks((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const handleDelete = () => {
    localStorage.removeItem("clicks");
    setClicks({ ...reviewType });
  };

  console.log(totalFeedback);
  return (
    <div>
      <Description />
      <Options
        handleClick={updateFeedback}
        totalFeedback={totalFeedback}
        handleDelete={handleDelete}
      />
      {totalFeedback ? (
        <Feedback
          good={clicks.good}
          neutral={clicks.neutral}
          bad={clicks.bad}
          positive={Math.round(
            ((clicks.good + clicks.neutral) / totalFeedback) * 100
          )}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
