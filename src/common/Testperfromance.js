import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';
import * as d3 from 'd3-shape';
import { BLACK, DARKGRAY, GRAY, orange } from '../values/Colors';
import { IsidoraBold, IsidoraLight, IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts';
const { height, width } = Dimensions.get('window');

const TestPerformance = ({
  correctAnswers = 4,
  wrongAnswers = 7,
  totalQuestions = 70,
  allScores = [10, 25, 30, 40, 50, 60, 65], // Example scores of other users
}) => {
  const skippedQuestions = totalQuestions - (correctAnswers + wrongAnswers);
  const userScore = correctAnswers; // Using correct answers as the score

  // Calculate percentages
  const correctPercentage = correctAnswers / totalQuestions;
  const wrongPercentage = wrongAnswers / totalQuestions;
  const skippedPercentage = skippedQuestions / totalQuestions;

  // Calculate angles for each section
  const correctAngle = correctPercentage * Math.PI;  // Correct answers angle
  const wrongAngle = wrongPercentage * Math.PI;      // Wrong answers angle
  const skippedAngle = skippedPercentage * Math.PI;  // Skipped answers angle

  // We will start the pie chart at -90 degrees (left side) and go clockwise
  const data = [
    { key: 'correct', value: correctAngle, color: orange },
    { key: 'wrong', value: wrongAngle, color: GRAY },
    { key: 'skipped', value: skippedAngle, color: DARKGRAY },
  ];

  // Generate the arcs manually by calculating the path for each segment
  const arcGenerator = d3.arc().outerRadius(100).innerRadius(70);

  // We manually set the start angle for each segment
  let currentStartAngle = -Math.PI / 2; // Start from left ( -90 degrees )
  const arcs = data.map((segment) => {
    const endAngle = currentStartAngle + segment.value;
    const arc = {
      startAngle: currentStartAngle,
      endAngle: endAngle,
    };
    currentStartAngle = endAngle; // Update the start angle for the next segment
    return arc;
  });

  // Calculate Percentile
  const sortedScores = [...allScores].sort((a, b) => a - b); // Sort scores
  const belowCount = sortedScores.filter((score) => score < userScore).length;
  const percentile = (belowCount / sortedScores.length) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Test Performance</Text>
        <View style={styles.headingContainer2}>
          <View>
            <Text style={styles.totalmarks}>Total Marks</Text>
            <Text style={styles.number}>70</Text>
          </View>
          <View>
            <Text style={styles.totalmarks}>Time Alloted</Text>
            <Text style={styles.number}>
              70 <Text style={styles.totalmarks}>min</Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.textview}>
          <Text style={styles.totalmarks}>Your Time</Text>
          <Text style={styles.number}>00:10:36</Text>
        </View>
        <View style={styles.circularProgressContainer}>
          <Svg width={220} height={120}>
            <G x={110} y={110}>
              {/* Center the chart */}
              {arcs.map((arc, index) => (
                <Path
                  key={index}
                  d={arcGenerator(arc)}
                  fill={data[index].color} // Fill color based on the manual order
                />
              ))}
            </G>
          </Svg>
          <Text style={styles.scoreValue}>{correctAnswers}</Text>
          <Text style={styles.yourScoreText}>YOUR SCORE</Text>
        </View>
        <View style={styles.textview}>
          <Text style={styles.totalmarks2}>Rank</Text>
          <Text style={styles.number2}>47</Text>
        </View>
      </View>

      {/* Footer Details */}
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Text style={styles.footerValue}>{correctAnswers}</Text>
          <Text style={styles.footerText}>Correct</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={styles.footerValue}>{wrongAnswers}</Text>
          <Text style={styles.footerText}>Wrong</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={styles.footerValue}>{skippedQuestions}</Text>
          <Text style={styles.footerText}>Skipped</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={styles.footerValue}>
            {((correctAnswers / totalQuestions) * 100).toFixed(2)}%
          </Text>
          <Text style={styles.footerText}>Accuracy</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={styles.footerValue}>{percentile.toFixed(2)}%</Text>
          <Text style={styles.footerText}>Percentile</Text>
        </View>
      </View>

      <Text style={styles.footerNote}>
        Focus on practice; aim for mastery and improvement
      </Text>
    </View>
  );
};

export default TestPerformance;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    width:width/1.085,
    alignSelf:'center',
    // margin: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: width*0.036,
    marginBottom: 20,
    fontFamily: IsidoraSemiBold,
    color:DARKGRAY
  },
  totalmarks: {
    fontSize: width*0.027,
    marginBottom: 2,
    fontFamily: IsidoraRegular,
    color: BLACK,
  },
  totalmarks2: {
    fontSize: width*0.027,

    marginBottom: 2,
    fontFamily: IsidoraSemiBold,
    color: BLACK,
  },
  number: {
    fontSize: width*0.03,

    marginBottom: 2,
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
  },
  number2: {
    fontSize: width*0.03,

    marginBottom: 2,
    fontFamily: IsidoraSemiBold,
    color: DARKGRAY,
    textAlign: 'right',
  },
  circularProgressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.5,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  scoreValue: {
    fontSize: width*0.041,
    fontFamily: IsidoraBold,
    color: orange,
    position: 'absolute',
    bottom: 20,
  },
  yourScoreText: {
    fontSize: width*0.03,
    marginTop: 10,
    textAlign: 'center',
    position: 'absolute',
    bottom: 5,
    fontFamily: IsidoraMedium,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '88%',
    marginTop: 10,
    alignSelf:"center"
  },
  footerItem: {
    alignItems: 'center',
    flex: 1,
  },
  footerValue: {
    fontSize: width*0.027,

    marginBottom: 3,
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
  },
  footerText: {
    fontSize: width*0.027,
    fontFamily: IsidoraMedium,
    color: DARKGRAY,
  },
  footerNote: {
    fontSize: width*0.03,
    color: DARKGRAY,
    marginTop: 15,
    fontFamily:IsidoraMedium
    // textAlign: 'center',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.33,
  },
  textview: {
    marginBottom: '1%',
  },
});
