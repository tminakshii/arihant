import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import { BLACK, GRAY, LIGHTORANGE, orange, WHITE } from '../values/Colors';
import { IsidoraMedium, IsidoraRegular, IsidoraSemiBold } from '../values/Fonts';

const { width: screenWidth,height:screenHeight } = Dimensions.get('window');

const Triangle = ({ color, label, position, labelPosition }) => {
  const triangleWidth = screenWidth * 0.13; // 15% of screen width
  const triangleHeight = screenHeight * 0.083; // 10% of screen height
  const topPointX = triangleWidth * 0.5; // Center horizontally
  const topPointY = triangleHeight; // Bottom of the triangle

  const bottomLeftPointX = 0; // Left side of the screen
  const bottomLeftPointY = 0; // Top of the triangle

  const bottomRightPointX = triangleWidth; // Right side of the screen
  const bottomRightPointY = 0; // Top of the triangle

  // Construct the points string for the downward pointing triangle
  const points = `${topPointX},${topPointY} ${bottomLeftPointX},${bottomLeftPointY} ${bottomRightPointX},${bottomRightPointY}`;

  const isTarget = label === 'Target';

  return (
    <View style={[styles.triangleContainer, { left: position.x, top:screenHeight<700?position.y+10:screenHeight>1000?position.y +25:position.y }]}>
      <Text style={[styles.label, labelPosition]}>{label=='1st Attempt' || label=='2nd Attempt'?label:''}</Text>
      <Svg height={triangleHeight} width={triangleWidth}>
      <Text style={[{fontFamily:label=='Target'?IsidoraMedium:IsidoraSemiBold,fontSize:label=='Target'?screenHeight/60:screenHeight/50,marginTop:label=='Target'?'':'5%',textAlign:'center',color:label=='Target'? BLACK:WHITE}]}>{label=='1st Attempt'?'':label=='2nd Attempt'?'You':'Target'}</Text>
        {/* Inverted triangle pointing downwards */}
        <Polygon
          points={points} 
          fill={color} 
          stroke={isTarget ? GRAY : 'none'}  // Apply border if "Target"
          strokeWidth={isTarget ? 1 : 0}  // Add a thicker stroke for "Target"
        />
      </Svg>
    </View>
  );
};

const TriangleChart1 = () => {
  const targetPercentage = 100;
  const studentTargetPerformance = 90;
  const studentPerformance = 40; // Example percentage for student's score

  // Responsive triangle width and height based on screen width
  const triangleWidth = screenWidth * 0.80;
  const triangleHeight = triangleWidth * 0.55;

  // Adjusted function to calculate position based on percentage, following the triangle slope more closely
  const calculatePosition = (percentage) => {
    // X-position as a percentage of triangle width
    const x = (percentage * screenWidth*0.8) / 111;

    // Y-position reduces based on the slope, starting from the bottom at triangleHeight
    const y = triangleHeight - (percentage / targetPercentage) * (triangleHeight+screenHeight*0.12 );

    return { x, y };
  };
  const calculatePosition2 = (percentage) => {
    // X-position as a percentage of triangle width
    const x = (percentage * screenWidth*0.99) / 111;

    // Y-position reduces based on the slope, starting from the bottom at triangleHeight
    const y = triangleHeight - (percentage / targetPercentage) * (triangleHeight +screenHeight*0.13);

    return { x, y };
  };
  const calculatePosition3 = (percentage) => {
    // X-position as a percentage of triangle width
    const x = (percentage * screenWidth) / 122;
    // Y-position reduces based on the slope, starting from the bottom at triangleHeight
    const y = triangleHeight - (percentage / targetPercentage) * (triangleHeight +screenHeight*0.058);

    return { x, y };
  };

  const attempts = [
    { color: '#9e1a38', label: '1st Attempt', position: calculatePosition(30) },
    { color: '#f9812a', label: '2nd Attempt', position: calculatePosition2(studentPerformance) },
    { color: LIGHTORANGE, label: 'Target', position: calculatePosition3(studentTargetPerformance) },
    
  ];

  return (
    <View style={styles.container}>
      <Svg height={triangleHeight + screenHeight*0.02} width={screenWidth}>
        {/* Black border for the diagonal side of the triangle */}
        <Polygon
          points={`10,${triangleHeight} ${triangleWidth-10 },${triangleHeight-121} ${triangleWidth },5`}
          fill="none"
          stroke="black"
          strokeWidth="1"
        />
        {/* Sloped triangle background */}
        <Polygon points={`10,${triangleHeight} ${triangleWidth},${triangleHeight} ${triangleWidth},5`} fill="#f5e4b2" />
        <Polygon points={`12,${triangleHeight} ${attempts[1]?.position?.x *1.25} ${screenHeight<700?attempts[1]?.position?.y * 1.25:screenHeight>1000?attempts[1]?.position?.y * 1.19:attempts[1]?.position?.y * 1.4} ${attempts[1]?.position?.x * 1.2} ${triangleHeight}`} fill={'#FCDE93'} /> 
       <Polygon points={`12,${triangleHeight} ${attempts[0]?.position?.x *1.35} ${screenHeight<700?attempts[0]?.position?.y * 1.22:screenHeight>1000?attempts[0]?.position?.y * 1.17:attempts[0]?.position?.y * 1.28} ${attempts[0]?.position?.x * 1.3} ${triangleHeight}`} fill="#FACB63" /> 
      </Svg>
      {attempts?.map((attempt, index) => (
        <Triangle
          key={index}
          color={attempt.color}
          label={attempt.label}
          position={attempt.position}
          labelPosition={index === attempts.length - 1 ? styles.targetLabel : styles.attemptLabel}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '91%',
    position: 'relative',
     marginTop: "5%", // Increased top margin for more white space at the top
    marginBottom: "5%", // Reduced bottom margin
    alignSelf: "center",
    backgroundColor: WHITE,
    paddingTop: "24%", 
    paddingBottom:"5%",
    elevation:2,
    alignSelf:"center",
    borderRadius:5,
    zIndex:999
    // marginHorizontal:5
  },
  triangleContainer: {
    position: 'absolute',
    alignItems: 'center',
    zIndex:0,
    transform: [{ translateY: screenHeight/23 }],
    '@media (max-width: 1600px) and (min-width: 800px)': {
            backgroundColor: 'red',
        }, // Adjusts the marker to align visually on the slope
  },
  label: {
    fontSize: screenWidth*0.020,
    color: '#666',
    textAlign: 'center',
  },
  attemptLabel: {
    fontSize:screenWidth/40
  },
  targetLabel: { 
    top:screenWidth*0.001,
    zIndex:1,
    fontFamily:IsidoraMedium,
    textAlign:'center',
    fontSize:screenWidth/31,
    // marginTop:"10%"
  },
});

export default TriangleChart1;
