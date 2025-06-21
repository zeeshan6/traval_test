import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Icons from '../../../themes/Icons';
import { profileImg } from '../../../../dummyData';
import { Colors } from '../../../themes';

const PlaceDetails = ({ navigation, route }: any) => {
  const { item } = route?.params;
  const [isReadMore, setIsReadMore] = useState(false);
  const [selectedImg, setSelectedImg] = useState(item?.image);
  const [isImagesModal, setImageModal] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      {/* Header */}
      <ImageBackground source={selectedImg} style={styles.bgImageSTyle}>
        <View style={styles.headerParentView}>
          <TouchableOpacity
            style={styles.bookmarkStyle}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icons.Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTxtStyle}>Details</Text>

          <TouchableOpacity style={styles.bookmarkStyle} key={item?.id}>
            <Icons.Feather name="bookmark" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ScrollView style={styles.curveView} showsVerticalScrollIndicator={false}>
        <View style={{ ...styles.center, justifyContent: 'space-between' }}>
          <View style={styles.exploreViewSTyle}>
            <Text style={styles.exploreTxtStyle}>{item?.name}</Text>
            <Text style={styles.beautifulTxtSTyle}>{item?.location}</Text>
          </View>

          <Image source={{ uri: profileImg }} style={styles.cardImgSTyle} />
        </View>
        {/* Location, rating, price */}
        <View style={styles.locationViewSTyle}>
          <View style={styles.center}>
            <Icons.Feather name="map-pin" size={20} color="#929394" />
            <Text style={styles.locationText}>
              {item?.location && item?.location?.split(',')[0]}
            </Text>
          </View>
          <View style={styles.center}>
            <Icons.AntDesign name="star" size={20} color={Colors.ratingColor} />
            <Text style={{ ...styles.cardNameStyle, paddingLeft: 5 }}>
              {item?.rating} <Text style={{ color: '#929394' }}>(2498)</Text>
            </Text>
          </View>

          <View>
            <Text
              style={{
                ...styles.cardNameStyle,
                paddingLeft: 5,
                color: '#5389DD',
              }}
            >
              $59 <Text style={{ color: '#929394' }}>/Person</Text>
            </Text>
          </View>
        </View>

        {/* Images */}

        <View style={styles.visitorImgRow}>
          {item?.images.slice(0, 5).map((imgs: any, index: number) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedImg(imgs?.img);
                if (index === 4) {
                  setImageModal(!isImagesModal);
                }
              }}
            >
              <Image
                key={imgs?.id}
                source={imgs?.img}
                style={{
                  ...styles.avatar,
                  borderWidth: selectedImg === imgs?.img ? 3 : null,
                  borderColor: '#5389DD',
                }}
              />
            </TouchableOpacity>
          ))}
          <Text
            style={styles.extraVisitors}
            onPress={() => setImageModal(!isImagesModal)}
          >
            +{item?.extraVisitors}
          </Text>
        </View>

        <View style={styles.aboutViewStyle}>
          <Text style={styles.aboutStyle}>About Destination</Text>
          <Text
            style={styles.aboutDescStyle}
            numberOfLines={isReadMore ? null : 4}
          >
            {item?.desc}
          </Text>
          {!isReadMore && (
            <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
              <Text style={styles.readMoretxtStyle}>Read More</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.bookNowBtnStyle} activeOpacity={0.8}>
        <Text style={styles.bookNowTxtStyle}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceDetails;
