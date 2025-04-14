import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from '../DashboardSecond/style'
import Dashboardheader from '../../common/Dashboardheader';
import BasicDetialcommon from '../../common/BasicDetialcommon';
import BookMagazines from '../../common/BookMagazines';
import { BookmagazinsData, BookmagazinsData2, magazinsData, TestpackageData, VideopackageData } from '../../values/Utility';
import { inputBordercolor } from '../../values/Colors';
import BookMagazineCard2 from '../../common/BookMagazineCard2';
import TestPackages from '../../common/TestPackages';

const dashboardsecond = () => {
    const scrollViewRef = useRef(null);
    const[basicdetail,setBasicdetail]=useState(false)
    const[order,setOrder]=useState(true)
    const[bookmagazines,setBookmagazines]=useState(true)
    const[testPackages,setTestPackages]=useState(true)
    const[videoPackages,setVideoPackages]=useState(true)
    // const[orderboxtext,setOrderboxtext]=useState('Books/Magazines')
    const [isanimationtrue, setIsanimationtrue] = useState(false)
    const pageforbasicdetail = [1, 2, 3]

    const scrollToanimation = (yPosition) => {
        // console.log( event.nativeEvent.contentOffset.y, 'position')
        if (yPosition === 675 && !isanimationtrue) {
            setIsanimationtrue(true); // Set only if not already true
            console.log('Animation started for position 1300');
        }
    }
    const orderheaderbox=(orderboxtext)=>{
        return(
            <View style={styles.orderheaderbox}>
                <Text style={styles.orderheaderboxtext}>Order</Text>
                <Text style={styles.ordertext}>{orderboxtext}</Text>

            </View>
        )
    }
    return (
      
        <View style={{flex:1}}>
           <Dashboardheader />
           
            <ScrollView onScroll={scrollToanimation(675)} ref={scrollViewRef} scrollEventThrottle={16} >
                {
                    basicdetail &&
                    <BasicDetialcommon pageforbasicdetail={pageforbasicdetail} />
                }
                {
                    bookmagazines &&
                    (<View>
                     { orderheaderbox('Books/Magazines')} 
                     <FlatList
                     data={BookmagazinsData}
                     keyExtractor={(item,index)=>index.toString()}
                     renderItem={({item})=> < BookMagazines arriving={true} bookmagazines={item} />}/>

                     <FlatList
                     data={BookmagazinsData2}
                     keyExtractor={(item,index)=>index.toString()}
                     renderItem={({item})=>< BookMagazines delivering={true} bookmagazines={item}/>}/>
                     <FlatList
                     data={magazinsData}
                     keyExtractor={(item,index)=>index.toString()}
                     renderItem={({item})=><BookMagazineCard2 magazindata={item}/>}/>
                    
                    </View>)

                }
                {
                  testPackages &&
                  (<View>
                     { orderheaderbox('Test Packages')} 
                     <FlatList
                     data={TestpackageData}
                     keyExtractor={(item,index)=>index.toString()}
                     renderItem={({item})=><TestPackages testpackage={item}/>}/>
                  </View>)
                }
                {
                    videoPackages &&
                    (<View>
                        { orderheaderbox('Video Packages')}
                        <FlatList
                        data={VideopackageData}
                        keyExtractor={(item,index)=>index.toString()}
                        renderItem={({item})=><TestPackages videopackage={true} testpackage={item}/>}/>
                    </View>)
                }
                

            </ScrollView>
           </View>
        
    )
}

export default dashboardsecond

