import { StyleSheet, Text, View ,ScrollView, Dimensions} from 'react-native'
import React, { useState } from 'react'
import Header from '../../common/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import BlogCommon from '../../common/BlogCommon'
import { FlatList } from 'react-native-gesture-handler'
import { ImagePath } from '../../values/ImagePath'
import { GRAY } from '../../values/Colors'
import styles from './styles'

const {height,width}=Dimensions.get("window")


const blogdata=[
  {
      image:ImagePath?.blog3,
      lable:"Civil Services",
      heading:"How to Prepare for CSAT Without Coaching?",
      description:"You can crack CSAT without math. You know how? Look at the checklist attached below and clear UPSC Prelims on your first attempt.",
 date:"september 23, 2024",
 arihant:"Arihant Publication"
  },
  {
      image:ImagePath?.blog2,
      lable:"Civil Services",
      heading:"How to Prepare for CSAT Without Coaching?",
      description:"You can crack CSAT without math. You know how? Look at the checklist attached below and clear UPSC Prelims on your first attempt.",
 date:"september 23, 2024",
 arihant:"Arihant Publication"
  },
  {
      image:ImagePath?.blog1,
      lable:"Civil Services",
      heading:"How to Prepare for CSAT Without Coaching?",
      description:"You can crack CSAT without math. You know how? Look at the checklist attached below and clear UPSC Prelims on your first attempt.",
 date:"september 23, 2024",
 arihant:"Arihant Publication"
  },
]

const Blogs = () => {

  const [BlogDescription,setBlogDescription]=useState(false)



  const renderItems = ({ item }) => (
    <BlogCommon item={item} setBlogDescription={setBlogDescription}  BlogDescription={BlogDescription} />
  );
  return (
    <SafeAreaView style={{flex:1}} >
    <Header/>
    <ScrollView>

{
BlogDescription &&
<View style={styles.blogdescriptionView}>

<View style={styles.labelStyle}>

<Text style={styles.labletext}>Civill services</Text>
</View>

<Text style={styles.heading}>
How to Prepare Competency based questions for CSAT Exams?
</Text>
<View style={styles.line}></View>


<Text  style={styles.blogdescriptiontext}>
If you’ve browsed the internet recently, chances are you’ve come across memes criticizing the outdated Indian education system. And, let’s be real—there’s a reason behind it! From social media platforms to casual conversations, everyone’s got an opinion on how traditional learning hasn’t evolved with time. Let’s start 
by addressing the issue head-on: Why are people tired of "rattafication"?

</Text>
<Text  style={styles.blogdescriptiontext}>

Competency-based exams are finally challenging us to move beyond rote memorization. This year, if you’re gearing up for the CSAT or any other CBSE board exam, memorization alone won’t cut it. In the 2024-25 academic session, real understanding and application of concepts are taking center stage. Let’s break down exactly what this means and how you can prepare effectively.

</Text>
<View style={styles.line}></View>

</View>
}

<FlatList 
showsHorizontalScrollIndicator={false}
data={blogdata} renderItem={renderItems}
horizontal
contentContainerStyle={{paddingHorizontal:width*0.02}}
/>

<View style={styles.line}></View>
<FlatList 
showsHorizontalScrollIndicator={false}
data={blogdata} renderItem={renderItems}
horizontal
contentContainerStyle={{paddingHorizontal:width*0.04}}
/>
<View style={styles.line}></View>

    </ScrollView>
    </SafeAreaView>
  )
}

export default Blogs
