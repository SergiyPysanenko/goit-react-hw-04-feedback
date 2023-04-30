import React, {useState} from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // onLeaveFeedback = e => {
  //   this.setState(prevState => {
  //     const { name } = e.target;
  //     return {
  //       [name]: prevState[name] + 1,
  //     };
  //   });
  // };

  const onleaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  // countPositiveFeedbackPercentage = () => {
  //   return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  // };

  const state = {
    good,
    neutral,
    bad,
  };
  const total = countTotalFeedback();
  return (
    <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                fontSize: 25,
                color: '#010101',
                padding: 30,
                gap: 20,
              }}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onleaveFeedback}
        />
      </Section>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percent={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
}


//   render() {
//     const { good, neutral, bad } = this.state;
//     let total = this.countTotalFeedback();
//     return (
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           textAlign: 'center',
//           alignItems: 'center',
//           fontSize: 25,
//           color: '#010101',
//           padding: 30,
//           gap: 20,
//         }}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options="good"
//             onFeedbackButtonClick={this.onLeaveFeedback}
//           />
//           <FeedbackOptions
//             options="neutral"
//             onFeedbackButtonClick={this.onLeaveFeedback}
//           />
//           <FeedbackOptions
//             options="bad"
//             onFeedbackButtonClick={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               percent={this.countPositiveFeedbackPercentage()}
//             />
//           ) : null}
//           {total ? null : <Notification message="No feedback given" />}
//         </Section>
//       </div>
//     );
//   }
// }

export default App;









