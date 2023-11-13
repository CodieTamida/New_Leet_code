import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, Linking} from 'react-native';
import problemslist from '../LeetCodeData/problemslist.json';
import RNShake from 'react-native-shake';
import ButtonLink from './ButtonLink';

const Shake = () => {
  const [randomQuestion, setRandomQuestion] = useState(null);

  useEffect(() => {
    // When the component is mounted, set up the shake listener
    const subscription = RNShake.addListener(() => {
      // Get an array of all question IDs
      const questionIds = problemslist.stat_status_pairs.map(
        pair => pair.stat.question_id,
      );

      // Generate a random index based on the number of questions
      const randomIndex = Math.floor(Math.random() * questionIds.length);

      // Get the random question ID using the random index
      const randomId = questionIds[randomIndex];

      // Find the question data for the random question ID
      const questionData = problemslist.stat_status_pairs.find(
        item => item.stat.question_id === randomId,
      );

      // Set the state with the random question data
      if (questionData) {
        setRandomQuestion(questionData.stat);
      } else {
        console.log('Question not found');
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView>
      {randomQuestion ? (
        <>
          <Text>Question ID: {randomQuestion.question_id}</Text>
          <Text>Question Title: {randomQuestion.question__title}</Text>
          <Text>Question Slug: {randomQuestion.question__title_slug}</Text>
          <ButtonLink
            // style={styles.button}
            url={`https://leetcode.com/problems/${randomQuestion.question__title_slug}`}
            title="Open Your Random Question"
          />
        </>
      ) : (
        <Text>No question selected yet</Text>
      )}
    </SafeAreaView>
  );
};

export default Shake;
