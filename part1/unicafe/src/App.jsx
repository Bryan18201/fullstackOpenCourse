/* eslint-disable react/prop-types */

import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <>
        <tr>
          <td> {text}</td>
          <td>{value}</td>
        </tr>
      </>
    );
  }

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad;
  let average = (good - bad) / total;
  let positive = (good / total) * 100;

  if (total === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <h1>Give a feedback</h1>
      <button onClick={() => handleClickGood()}>Good</button>
      <button onClick={() => handleClickNeutral()}>Neutral</button>
      <button onClick={() => handleClickBad()}>Bad</button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
