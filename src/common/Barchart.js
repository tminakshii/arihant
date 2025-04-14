import React from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import Svg, { Rect, Text as SvgText, Line } from 'react-native-svg';
import { DARKGRAY } from '../values/Colors';
import { IsidoraMedium, IsidoraSemiBold } from '../values/Fonts';

const { height, width } = Dimensions.get('window');

const data = [
  { G: 40, M: 30, E: 20, R: 30 },
  { G: 60, M: 50, E: 40, R: 50 },
  { G: 70, M: 80, E: 60, R: 70 },
  { G: 50, M: 60, E: 40, R: 60 },
  { G: 30, M: 40, E: 30, R: 40 },
  { G: 40, M: 50, E: 20, R: 50 },
  { G: 60, M: 70, E: 50, R: 70 },
  { G: 90, M: 80, E: 60, R: 80 },
  { G: 90, M: 80, E: 60, R: 80 },



  
];

const barColors = {
  G: '#FF6600', // G.K.
  M: '#990033', // Math
  E: '#808080', // English
  R: '#404040', // Reasoning
};

const maxBarHeight = 105;
const barWidth = width*0.012;
const barSpacing = 2; // Space between bars in a group
const groupSpacing = width*0.03; // Space between groups
const chartHeight = 130;
const leftMargin = 25; // Adjust for numbers and vertical line
const chartWidth =
  data.length * (barWidth * 4 + barSpacing * 3 + groupSpacing) + leftMargin + 20; // Dynamic width

const Barchart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Package Performance</Text>

      <View style={styles.legend}>
        {Object.entries(barColors).map(([key, color]) => (
          <View key={key} style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: color }]} />
            <Text style={styles.legendText}>
              {key === 'G'
                ? 'G.K.'
                : key === 'M'
                ? 'MATH'
                : key === 'E'
                ? 'ENGLISH'
                : 'REASONING'}
            </Text>
          </View>
        ))}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} overScrollMode="never" bounces={false}>
        <Svg width={chartWidth} height={chartHeight + 30}>
          {/* Left Vertical Line (Y-Axis) */}
          <Line
            x1={leftMargin} // Adjusted for number spacing
            y1="0"
            x2={leftMargin}
            y2={chartHeight}
            stroke="#ddd"
            strokeWidth="1"
          />

          {/* Right Vertical Line */}
          <Line
            x1={chartWidth - 10}
            y1="0"
            x2={chartWidth - 10}
            y2={chartHeight}
            stroke="#ddd"
            strokeWidth="1"
          />

          {/* Horizontal Grid Lines with Numbers */}
          {[0, 20, 40, 60, 80, 100].map((value) => (
            <React.Fragment key={value}>
              {/* Grid Line */}
              <Line
                x1={leftMargin}
                y1={chartHeight - (value / maxBarHeight) * chartHeight}
                x2={chartWidth - 10} // Align with the right vertical line
                y2={chartHeight - (value / maxBarHeight) * chartHeight}
                stroke="#ddd"
                strokeWidth="1"
              />
              {/* Number */}
              <SvgText
                x={leftMargin - 15} // Align numbers with some padding
                y={chartHeight - (value / maxBarHeight) * chartHeight + 5}
                textAnchor="middle"
                fontSize="10"
                fill="#666"
              >
                {value}
              </SvgText>
            </React.Fragment>
          ))}

          {/* Bars */}
          {data.map((item, index) => {
            const xOffset = leftMargin + 10 + index * (barWidth * 4 + barSpacing * 3 + groupSpacing); // Adjust for number space
            return (
              <React.Fragment key={index}>
                <Rect
                  x={xOffset}
                  y={chartHeight - (item.G / maxBarHeight) * chartHeight}
                  width={barWidth}
                  height={(item.G / maxBarHeight) * chartHeight}
                  fill={barColors.G}
                />
                <Rect
                  x={xOffset + barWidth + barSpacing}
                  y={chartHeight - (item.M / maxBarHeight) * chartHeight}
                  width={barWidth}
                  height={(item.M / maxBarHeight) * chartHeight}
                  fill={barColors.M}
                />
                <Rect
                  x={xOffset + (barWidth + barSpacing) * 2}
                  y={chartHeight - (item.E / maxBarHeight) * chartHeight}
                  width={barWidth}
                  height={(item.E / maxBarHeight) * chartHeight}
                  fill={barColors.E}
                />
                <Rect
                  x={xOffset + (barWidth + barSpacing) * 3}
                  y={chartHeight - (item.R / maxBarHeight) * chartHeight}
                  width={barWidth}
                  height={(item.R / maxBarHeight) * chartHeight}
                  fill={barColors.R}
                />
                <SvgText
                  x={xOffset + barWidth * 2 + barSpacing * 1.5}
                  y={chartHeight + 15}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#000"
                >
                  {index + 1}
                </SvgText>
              </React.Fragment>
            );
          })}
        </Svg>
      </ScrollView>

      <Text style={styles.note}>
        This score has been generated on the basis of your performance in the
        mock test.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    width: width / 1.08,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: width*0.036,
    textAlign: 'left',
    marginBottom: 10,
    color:DARKGRAY,

    fontFamily: IsidoraSemiBold,
  },
  legend: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: width * 0.52,
    alignSelf: 'flex-end',
    // backgroundColor:"blue"
  },
  legendItem: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: '5%',
    width: width * 0.2,
    marginLeft: 10,
    // backgroundColor:"red"
  },
  legendColor: {
    width: width * 0.06,
    height: height * 0.015,
  },
  legendText: {
    fontSize: width*0.03,
    marginRight: 10,
    fontFamily: IsidoraMedium,
  },
  note: {
    fontSize:width*0.03,
    marginTop: 5,
    color: DARKGRAY,
    fontFamily: IsidoraMedium,
    lineHeight: 15,
  },
});

export default Barchart;
