import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Animated,
  SafeAreaView,
  Modal,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../../common/Header';
import { IsidoraBold, IsidoraMedium } from '../../values/Fonts';
import styles from './style';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { ImagePath } from '../../values/ImagePath';
import Antdesign from 'react-native-vector-icons/AntDesign';
import Button from '../../common/Button';
import {
  data,
  latest_test_series,
  notificationData,
  video_courses_data,
  ArrivingData1,
  SubmitTestdata,
  studentTestperformance,
} from '../../values/Utility';
import Productcard from '../../common/Productcard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BLACK, DARKGRAY, GRAY, RED, WHITE } from '../../values/Colors';
import TestseriesCard from '../../common/TestseriesCard';
import VideoCourses from '../../common/VideoCourses';
import RightArrowIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import ViewAll from '../../common/ViewAll';
import SwiperCommon from '../../common/SwiperCommon';
import Arriving from '../../common/Arriving';
import Productcard2 from '../../common/ProducCard2';
import ModalCommon from '../../common/ModalCommon';
import sampleVideo from '../../assets/images/nature.mp4';
import VideoPlayer from '../../common/VideoPlayer2';
import TriangleChart from '../../common/TriangleChart';
import TriangleChart1 from '../../common/TriangleChart1';
import SubmitTest from '../../common/SubmitTest';
import PracticeSet from '../../common/PracticeSet';
import { ScreenRatio } from '../../values/Ratio';
import DeviceInfo from 'react-native-device-info';
import Testperfromance from '../../common/Testperfromance';
import Barchart from '../../common/Barchart';

// import { isTablet } from 'react-native-device-info';
// import EbookViewer from '../../common/PdfReader';
const pdflink = 'https://eloquentjavascript.net/Eloquent_JavaScript_small.pdf';
const { width, height } = Dimensions.get('window');
let isTablet = DeviceInfo.isTablet();

const source = {
  uri: 'https://www.tutorialspoint.com/javascript/javascript_tutorial.pdf',
  cache: true,
};

const Homepage = () => {
  const [catLength, setCatLength] = useState(true);
  const [activeItem, setActiveItem] = useState(0);
  const [activeItemlatest, setActiveItemlatest] = useState(0);
  const [activeItemtrending, setActiveItemtrending] = useState(0);

  const [videoModal, setVideoModal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [openpdfModal, setOpenpdfModal] = useState(false);

  const [modalofpdf, setModalofpdf] = useState(false);
  const [pdfLink, setPdfLink] = useState('');
  const navigation = useNavigation();

  const swiperImageData = [
    { image: ImagePath.homeimage ,image2:ImagePath?.homepagetabImage},
    { image: ImagePath.homeimage ,image2:ImagePath?.homepagetabImage},
    { image: ImagePath.homeimage ,image2:ImagePath?.homepagetabImage},
    { image: ImagePath.homeimage ,image2:ImagePath?.homepagetabImage},

 
  ];
  const categoryData = [
    {
      icon: ImagePath.mcat1,
      name: 'JEE & Other Eng. Exams',
      route: '',
    },
    { icon: ImagePath.mcat2, name: 'NEET', route: '' },
    { icon: ImagePath.mcat3, name: 'CUET', route: '' },
    { icon: ImagePath.mcat4, name: 'Management & Other Exams', route: '' },
    { icon: ImagePath.mcat5, name: 'CLAT & Law Admissions', route: '' },
    { icon: ImagePath.mcat6, name: 'NDA, CDS & Asst. Commandant', route: '' },
    { icon: ImagePath.mcat7, name: 'IAS & State PSC', route: '' },
    { icon: ImagePath.mcat8, name: 'Banking & Insurance', route: '' },
    { icon: ImagePath.mcat9, name: 'SSC Exams', route: '' },
    { icon: ImagePath.mcat10, name: 'Railways Exams', route: '' },
    { icon: ImagePath.mcat11, name: 'Army, Navy & Airforce', route: '' },
    { icon: ImagePath.mcat12, name: 'CTET & State TETs', route: '' },
    { icon: ImagePath.mcat13, name: 'Teacher Recruitment', route: '' },
    { icon: ImagePath.mcat14, name: 'Other Central Govt. Exams', route: '' },
    { icon: ImagePath.mcat15, name: 'State Govt. Exams', route: '' },
    { icon: ImagePath.mcat16, name: 'School Curriculam', route: '' },
    { icon: ImagePath.mcat17, name: 'School Admissions', route: '' },
    { icon: ImagePath.mcat18, name: 'ITI Books', route: '' },
  ];
  const NOofUserData = [
    { number: '27.6 L', type: 'Active Users' },
    { number: '20 +', type: 'Years of Existence' },
    { number: '23', type: 'Offices Pan India' },
    { number: '6000 +', type: 'Retailers and Distributers' },
    { number: '7000 +', type: 'Working Professionals' },
  ];
  const flatlistref = useRef(null);

  const openModal = () => {
    setPdfLink(pdflink); // Save the PDF link to state
    setModalofpdf(true); // Open the modal
  };

  const closeModal = () => {
    setModalofpdf(false); // Close the modal
  };
  const renderItem = item => {
    return (
      <>
        <View style={styles.imageCOntainer}>
          <Image style={styles.autoScrollImages} source={item?.item?.image} />
        </View>
      </>
    );
  };
  const handleViewMore = () => {
    setCatLength(!catLength);
  };
  const renderItems = ({ item }) => (
    <Productcard item={item} customStyles={isTablet?styles?.customStylesproductTab:styles?.customStylesproduct} />
  );
  const swiperData = latest_test_series.slice(0, 6);
  const renderItemoftestseries = ({ item, index }) => {
    return <TestseriesCard item={item} index={index} />;
  };
  const render_video_courses_data = ({ item }) => <VideoCourses item={item} />;

  const handleLoadComplete = (numberOfPages, filePath) => {
    setNumberOfPages(numberOfPages); // Update the number of pages when PDF is loaded
    console.log(`PDF Loaded - Number of Pages: ${numberOfPages}`);
  };

  const handlePageChanged = (page, totalPages) => {
    setCurrentPage(page); // Update the current page whenever the page changes
    console.log(`Current Page: ${page} / ${totalPages}`);
  };
  const handleLoadProgress = () => {

  }

  const handleError = error => {
    console.log('Error loading PDF: ', error);
  };
  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar
        backgroundColor={WHITE} // Sets the background color for Android
        barStyle="dark-content" // Sets the text/icons style (light/dark) for iOS and Android
        translucent={false} // Ensures the status bar is not transparent
      />
      <Header
        showinitialbox={true}
        showback={true}
        showmiddlebox={true}
        showlastbox={true}
        title={'Homepage'}
        textStyle={styles.title}
      />

      <ScrollView overScrollMode="never" style={styles.homecontainer} bounces={false}>
        <SwiperCommon imagecontainer={isTablet?styles.upperimagecontainerTab:styles.upperimagecontainer }>
          {swiperImageData.map((item, index) => {
            return <>
            {
              isTablet ?
              <Image source={item.image2} style={styles.upperBigimageTab} />
              :
              <Image source={item.image} style={styles.upperimage} />
            }
            </>

          })}
        </SwiperCommon>

        <View style={styles.subMainView}>
          <View style={styles.uppertext}>
            <Text style={styles.text}>Tools and Resources</Text>
            <Text style={styles.HeadingText}>
              Explore our{' '}
              <Text style={styles.HeadingText2}>Top Categories</Text>
            </Text>
            <Text style={isTablet?styles.text2Tab:styles.text2}>
              Whether you want to be a doctor, an engineer, a bureaucrat or want
              to join government to help them run smoothly or simply want to
              excel in your school studies, we have got you covered.
            </Text>
          </View>
          {
            !isTablet ?
            <View style={styles.categoryDataView}>
            {categoryData?.map((val, index) => {
              if (catLength) {
                return index < 6 ? (
                  <TouchableOpacity
                    style={styles.categoryData}
                    onPress={() => navigation.navigate('Category')}>
                    <Image style={styles.icon} source={val.icon} />
                    <Text style={styles.categoryText} numberOfLines={2}>
                      {val.name}
                    </Text>
                  </TouchableOpacity>
                ) : null;
              } else {
                return (
                  <TouchableOpacity
                    style={styles.categoryData}
                    onPress={() => navigation.navigate('Category')}>
                    <Image style={styles.icon} source={val.icon} />
                    <Text style={styles.categoryText}>{val.name}</Text>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
          :
          <>
            <View style={styles.categoryDataViewTab}>
            {categoryData?.map((val, index) => {
              if (catLength) {
                return index < 12 ? (
                  <TouchableOpacity
                    style={styles.categoryDataTab}
                    onPress={() => navigation.navigate('Category')}
                    >
                    <Image style={styles.iconTab} source={val.icon} />
                    <Text style={styles.categoryTextTab} numberOfLines={2}>
                      {val.name}
                    </Text>
                  </TouchableOpacity>
                ) : null;
              } else {
                return (
                  <TouchableOpacity
                    style={styles.categoryDataTab}
                    onPress={() => navigation.navigate('Category')}>
                    <Image style={styles.iconTab} source={val.icon} />
                    <Text style={styles.categoryTextTab}>{val.name}</Text>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
          </>
          }
        
          <TouchableOpacity onPress={handleViewMore}>
            {catLength ? (
              <View style={styles.ViewMore}>
                <Text style={Platform.OS=="ios"? styles.textViewMore:styles.textViewMore1}>View More</Text>
                <View style={styles.IconView}>
                  <Antdesign name="down" size={width * 0.016} color={BLACK} />
                </View>
              </View>
            ) : (
              <View style={styles.ViewMore}>
                <Text style={styles.textViewMore}>View Less</Text>
                <View style={styles.IconView}>
                  <Antdesign name="up" size={width * 0.016} color={BLACK} />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.BookContainer}>
          <View style={[styles.ButtonView, { marginHorizontal: '2.2%' }]}>
            <Button
              text={'Best Seller'}
              textStyle={
                activeItem !== 0 ? styles.buttonActiveText : styles.buttonText
              }
              customStyles={
                activeItem !== 0 ? styles.Button : styles.activeButton
              }
              onPress={() => {
                setActiveItem(0);
              }}
            />
            <Button
              text={'Featured'}
              textStyle={
                activeItem !== 1 ? styles.buttonActiveText : styles.buttonText
              }
              customStyles={
                activeItem !== 1 ? styles.Button : styles.activeButton
              }
              onPress={() => {
                setActiveItem(1);
              }}
            />
          </View>

          <View style={{}}>
            <FlatList
              horizontal
              overScrollMode="never"
              contentContainerStyle={{ paddingHorizontal: width * 0.02 }}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={renderItems}
              keyExtractor={item => item.id}
            />
          </View>
          {/*VIEW ALL COMPONENT */}
          <ViewAll
            customeTextStyle={{ fontFamily: IsidoraMedium }}
            title={'View All'}
            customeStyle={{
              marginVertical: '7%',
              marginBottom: isTablet?'5%':'10%',
            }}
          />
        </View>

        <View style={styles.subMainView}>
          <View style={[styles.ButtonView, { marginHorizontal: '3%' }]}>
            <Button
              text={'Latest Test Series'}
              textStyle={
                activeItemlatest !== 0
                  ? styles.buttonActiveText
                  : styles.buttonText
              }
              customStyles={
                activeItemlatest !== 0
                  ? styles.Buttonlatest
                  : styles.activeButtonlatest
              }
              onPress={() => {
                setActiveItemlatest(0);
              }}
            />
            <Button
              text={'Best Seller'}
              textStyle={
                activeItemlatest !== 1
                  ? styles.buttonActiveText
                  : styles.buttonText
              }
              customStyles={
                activeItemlatest !== 1 ? styles.Button : styles.activeButton
              }
              onPress={() => {
                setActiveItemlatest(1);
              }}
            />
          </View>

          <View>
            <View>
              <FlatList
                horizontal
                contentContainerStyle={styles.swiperontestseries}
                data={swiperData}
                renderItem={renderItemoftestseries}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
              />
            </View>
            {/* <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Animated.FlatList
              ref={flatlistref}
              data={swiperData}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled={false}
              snapToInterval={itemwidt}
              />
            </View> */}
            {/*VIEW ALL COMPONENT*/}
            <ViewAll
              title={'View All'}
              customeTextStyle={{ fontFamily: IsidoraMedium }}
              customeStyle={styles.viewallBox1}
            />
          </View>
        </View>

        <View style={styles.notificationContainer}>
          <View>
            <View style={styles.innerContainer}>
              <View style={styles.directionrow1}>
                <Image source={ImagePath.bell} style={styles.bellimage} />
                <Text style={styles.notificationtext}>
                  Latest News / Notifications
                </Text>
              </View>

              {notificationData.map((val, ind) => {
                return (
                  <View style={styles.directionrow2}>

                    <View style={styles?.circleIDss}>
                      <Text style={styles.descriptiontext2}>{val?.id}</Text>
                    </View>
                    <Text style={styles.descriptiontext}>
                      {val.description}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.innerContainer}>
              <View style={styles.directionrow1}>
                <Image
                  source={ImagePath.mock_test}
                  style={styles.freemockimage}
                />
                <Text style={styles.notificationtext1}>
                  Attempt {`\n`}FREE MOCK TEST
                </Text>
              </View>
              {notificationData.map((val, ind) => {
                return (
                  <View style={styles.directionrow2}>
                    <View style={styles?.circleIDss}>
                      <Text style={styles.descriptiontext2}>{val?.id}</Text>
                    </View>
                    <Text style={styles.descriptiontext}>
                      {val.description}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.innerLandscapeContainer}>
            <View style={styles.giftheadingView}>
              <Image style={styles.trophy} source={ImagePath.trophy} />
              <Text style={styles.giftheadingtext}>
                Day Challenge & {'\n'}Win guaranteed Gift
              </Text>
            </View>
            <Text style={styles.gifttext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </Text>
          </View>
        </View>

        <View style={styles.subMainView}>
          <View style={[styles.ButtonView, { marginHorizontal: '3.3%' }]}>
            <Button
              text={'Trending Videos'}
              textStyle={
                activeItemtrending !== 0
                  ? styles.buttonActiveText
                  : styles.buttonText
              }
              customStyles={
                activeItemtrending !== 0
                  ? styles.Buttontranding
                  : styles.activeButtontranding
              }
              onPress={() => {
                setActiveItemtrending(0);
              }}
            />
            <Button
              text={'Popular Video Courses'}
              textStyle={
                activeItemtrending !== 1
                  ? styles.buttonActiveText
                  : styles.buttonText
              }
              customStyles={
                activeItemtrending !== 1
                  ? styles.Buttontranding
                  : styles.activeButtontranding
              }
              onPress={() => {
                setActiveItemtrending(1);
              }}
            />
          </View>
          <View>
            <FlatList
              horizontal
              overScrollMode="never"
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tredingviedeocontainer}
              data={video_courses_data}
              renderItem={render_video_courses_data}
              keyExtractor={item => item.id}
            />
          </View>
          {/*VIEW ALL COMPONENT */}
          <ViewAll
            title={'View All'}
            customeTextStyle={{ fontFamily: IsidoraMedium }}
            customeStyle={styles.viewallBox}
          />
        </View>

        <View style={styles.newslatter1}>
          <View style={styles.newslatter}>
            <Text style={styles.newslattertext}>
              Our Monthly Newsletter for Exclusive Content, Exams Tips, New
              Releases and more...
            </Text>
            <View style={{ marginTop: 10 }}>
              <Button
                customStyles={styles.subscribebutton}
                text={'Subscribe'}
                textStyle={styles.subscribetext}
                icon2={isTablet?ImagePath.RightArrowSubscribe:ImagePath.RightArrow1}
                iconStyle2={styles.rightarrowimage}
              // vector2color={WHITE}
              />
            </View>
          </View>
          <Image
            style={styles.newsletterImage}
            source={ImagePath.newsletterImage}
          />
        </View>
        <Modal
          visible={videoModal}
          animationType={'slide'}
          onClose={() => setVideoModal(false)}>
          <VideoPlayer
            videoSource={{ uri: sampleVideo }}
            SETModalVisible={setVideoModal}
            setDisableScroll={false}
          />
        </Modal>
        <View style={styles.subMainView}>
          <Text style={styles.theJourney}>The Journey</Text>
          <Text style={styles.theJourneyDescription}>
            From one Man's dream to passion of thousands individuals, measure of
            our success has always been your achievements. Since 1997, we have
            come far yet we feel the journey has just begun.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: '0.5%',
              // backgroundColor:"red",
              // alignSelf:"center",
              marginTop: ScreenRatio(1.8),
              marginBottom: ScreenRatio(5),
            }}>
            <View style={styles.usercontainer}>
              <Text style={styles.numbertext}>27.6 L</Text>
              <Text style={styles.usertext}>Active Users</Text>
            </View>
            <View style={[styles.usercontainer, { width: width * 0.19 }]}>
              <Text style={styles.numbertext}>20 +</Text>
              <Text style={styles.usertext1}>Years of Existence</Text>
            </View>
            <View style={styles.usercontainer}>
              <Text style={styles.numbertext}>23</Text>
              <Text style={styles.usertext1}>Offices Pan Indias</Text>
            </View>
            <View style={styles.usercontainer}>
              <Text style={styles.numbertext}>6000 +</Text>
              <Text style={styles.usertext1}>Retailers and Distributers</Text>
            </View>
            <View style={styles.usercontainer}>
              <Text style={styles.numbertext}>7000 +</Text>
              <Text style={styles.usertext1}>Working Professionals</Text>
            </View>
          </View>
          {/* <View style={styles.noOfuserbox}>
            {NOofUserData.map((item, index) => {
              return (
                <View style={styles.usercontainer}>
                  <Text style={styles.numbertext}>{item.number}</Text>
                  <Text style={item?.type=="Active Users"?styles.usertext:styles.usertext1}>{item.type}</Text>
                </View>
              );
            })}
          </View> */}

          {/* <EbookViewer/> */}
        </View>
       

      </ScrollView>
{/* 
      <Modal
        visible={openpdfModal}
        onRequestClose={() => setOpenpdfModal(false)}>
        <View style={{ flex: 1 }}>
          <Pdf
            enablePaging={false}
            singlePage={false} // Show all pages (not just the first one)
            fitPolicy={2} // Fit both width and height, to show the whole page
            minScale={1.0} // Minimum zoom level
            maxScale={3.0}
            trustAllCerts={false}
            source={source}
            onScaleChanged={handlePageChanged}
            enableAnnotationRendering={true} // Enable annotations if needed
            enableRTL={false} // Change to true if you want to show right-to-left text (e.g., Arabic)
            onLoadComplete={handleLoadComplete}
            onPageChanged={handlePageChanged}
            onError={handleError}
            onLoadProgress={handleLoadProgress}
            style={{ width: '90%', minHeight: '50%' }}
          //  progressContainerStyle={{height:'auto'}}
          />
        </View>
      </Modal> */}
    </SafeAreaView>
  );
};

export default Homepage;
