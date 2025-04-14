import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { BLACK, DARKGRAY, GRAY, LIGHTGRAY, LIGHTGRAY2, orange, RED, WHITE } from '../../values/Colors';
import { IsidoraMedium, IsidoraSemiBold } from '../../values/Fonts';
import { Dropdown } from 'react-native-element-dropdown';
// import DateTimePickerModal from 'react-native-modal-datetime-picker'
import DeviceInfo from 'react-native-device-info';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../common/Button';
import Currentaffairnews from '../../common/Currentaffairnews';
import { currentAffairdata } from '../../values/Utility';
import { ImagePath } from '../../values/ImagePath';
import Entypo from 'react-native-vector-icons/Entypo'
const { width, height } = Dimensions.get('window');
const isTablet = DeviceInfo.isTablet()
const filterData = [
  'Daily Current Affairs',
  "Current Affairs Magazines",
  "Current Affairs Test Series"

];
const data = [
  { label: 'English', value: 'English' },

  { label: 'Hindi', value: 'Hindi' },
];
const CurrentAffairs = () => {
  const [filterSelected, setFilterSelected] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('English');
  const [tempdate, setTempdate] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [showCalendar, setShowCalendar] = useState(false);
  const[completenews,setCompletenews]=useState(false)
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const showDatePicker = () => {
  //     setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //     setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date) => {
  //     console.warn("A date has been picked: ", date);
  //     hideDatePicker();
  //     setSelectedDate(date)
  // };
  const onDateChange = (date) => {
    setTempdate(date)

  };
  const handledone = () => {
    setSelectedDate(tempdate);
    setShowCalendar(false);
  }
  const rendernewsboxes = ((item) => {
            // flex:2 // Add horizontal padding
    return (<Currentaffairnews detail={item} setCompletenews={setCompletenews}  completennews={completenews} />)
  })

  const formattedDate = selectedDate ? moment(selectedDate).format('DD MMM YYYY') : 'None';
  // const formatDate = (date) => {
  //   const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if needed
  //   const month = date.toLocaleString('en-US', { month: 'short' }) + '.'; // Get full month name
  //   const year = date.getFullYear();
  //   return `${day} ${month} ${year}`;
  // };
  return (<View>
    <View style={styles.currentslider}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        style={styles.filterList}>
        {filterData?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setFilterSelected(index)}
              style={styles.currentsliders}>
              <Text
                style={[
                  styles.currentsliderText,
                  {
                    color: DARKGRAY,
                    fontFamily:
                      filterSelected === index
                        ? IsidoraSemiBold
                        : IsidoraMedium,
                  },
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
    
    <View style={styles.Cureentheaderbox}>
      <Dropdown
        style={[styles.cdropdown, isFocus && { borderColor: BLACK }]}
        data={data}
        placeholderStyle={styles.cplaceholderStyle}
        selectedTextStyle={styles.cselectedTextStyle}
        inputSearchStyle={styles.cinputSearchStyle}
        iconStyle={styles.ciconStyle}
        iconColor={DARKGRAY}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={`${value}`}
        // searchPlaceholder="Select"
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          console.log(item.value, 'English');
          setValue(item.value);
          setIsFocus(false);
        }}
        renderItem={item =>
        (
          <Text style={styles.csearchvalues}>{item.value}</Text>
        )
        }
      />

      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowCalendar(!showCalendar)} // Toggle calendar visibility
      >
        <Text style={styles.selectedDateText}>
          {selectedDate ? formattedDate : 'Select your date'}
        </Text>
        <Entypo name={'chevron-thin-right'} size={width * 0.03} color={WHITE} />

      </TouchableOpacity>
    </View>
    {showCalendar && ( // Conditionally render the calendar
      <View style={styles.calenderbox}>
        <CalendarPicker
          onDateChange={onDateChange}
          selectedDayColor={RED} // Custom selected day color
          selectedDayTextColor={WHITE} // Custom selected day text color
          todayBackgroundColor={orange} // Custom background color for today's date
          textStyle={styles.calendertext} // Use your custom font family
          
         
          
          width={width * 0.75}// Custom previous button
          dayLabelsWrapper={{
            borderTopWidth: 0, // Remove the top border
            borderBottomWidth: 0, // Remove the bottom border
          }}
          customDayHeaderStyles={(dayOfWeek) => ({
            textStyle: {
              color: LIGHTGRAY2, // Light gray text color for weekdays
              fontFamily:IsidoraSemiBold,
               // Optional: Make weekdays bold
            },
          })}
          headerWrapperStyle={{
            borderWidth: 0.4, // Add a border
            borderColor: GRAY,
            width: width * 0.65, // Light gray border
            borderRadius: 5, // Rounded corners
            marginBottom: 10, // Spacing below the header
            flexDirection: 'row', // Arrange items in a row
            alignItems: 'center', // Align items vertically in the center
            paddingHorizontal: 10,
          }}
          monthYearHeaderWrapperStyle={{
            flexDirection: 'row', // Arrange Month-Year and controls in a row
            // justifyContent: 'flex-start', // Align Month-Year text to the left
            flex: 1, // Allow it to take up space
          }}
          previousComponent={
            <Image source={ImagePath.downarrowforborder} tintColor={DARKGRAY} style={styles.calendaricon1} /> // Previous icon
          }
          nextComponent={
            <Image source={ImagePath.borderup} tintColor={DARKGRAY} style={styles.calendaricon2} /> // Next icon
          }
        />
        <View style={styles.bottomcalender}>
          <Button
            text={'cancel'}
            customStyles={styles.calendarcancelbtn}
            textStyle={styles.calendercanceltext}
            onPress={() => setShowCalendar(false)} />
          <Button
            text={'Done'}
            customStyles={styles.calendardonebtn}
            textStyle={styles.calenderdonetext}
            onPress={handledone} />
        </View>
      </View>
    )}

{completenews &&<View style={styles.fullnewscontainer}>
      <Text style={styles.completetop}>Businesss & World</Text>
      <Text style={styles.fullnewsheading}>Who was Sukhdool Singh, Canadian Gangster, Whose Murder has been Blamed on India?</Text>
      <Text style={styles.fullsubheading}>Curated By :</Text>
      <Text style={styles.fullsubheading}>xxxxxxxxxxxxxxxxxxxx</Text>
      <Text style={styles.fullsubheading}>Last Updated: October 23, 2024, 13:49 IST</Text>
      <Image source={ImagePath.gangster}style={styles.fullnewsimage}/>
      <Text style={styles.fullsubheading}>Sukhdool Singh Gill aka Sukha Duneke was shot dead last year in Winnipeg, Canada and the Lawrence Bishnoi gang took responsibility for his murder. 
The diplomatic row between India and Canada escalated as the Justin Trudeau-led government accused Indian diplomats of targeting dissidents and threatening public safety, leading to the expulsion of diplomats from both sides. Indian High Commissioner Sanjay Kumar Verma was named as a person of interest in a probe linked to the killing of India-designated Khalistani separatist Hardeep Singh Nijjar.</Text>
      </View>}
    <View>
      <Text style={styles.currentheading}>Stay Ahead with daily, Weekly & monthly <Text style={styles.currentheading2}>Current Affairs</Text></Text>
      <Text style={styles.undercurrent}>Arihant Plus simpllifies exam preparation for UPSE, SSC, banking, and more by providing daily current affairs updates and monthly PDFs to keep you informed.</Text>
      {
        currentAffairdata.map((item, index) => {
          return (
            < View style={styles.currentaffairbox}>
              <Button
                text={item.category}
                textStyle={styles.nationalbuttontext}
                customStyles={styles.nationalbutton} />
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                overScrollMode='never'
                data={item.news}
                renderItem={rendernewsboxes}
                contentContainerStyle={{ paddingHorizontal: width * 0.02 }}
              />
              {/* <Currentaffairnews item={item.news}/> */}
              <View style={styles.currentbottomline} />


            </View>
          )
        })
      }
    </View>

  </View>

  )
}

export default CurrentAffairs
