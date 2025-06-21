import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import { placeData, profileImg } from '../../../../dummyData';
import Icons from '../../../themes/Icons';
import { Colors } from '../../../themes';

const Home = ({ navigation }: any) => {
  const PlaceCards = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        style={styles.cardStyle}
        key={item.id}
        activeOpacity={0.8}
        onPress={() => navigation?.navigate('placeDetails', { item: item })}
      >
        <TouchableOpacity style={styles.bookmarkStyle}>
          <Icons.Feather name="bookmark" size={24} color="#fff" />
        </TouchableOpacity>
        <Image source={item?.image} style={styles.cardImgSTyle} />
        <View style={styles.nameViewSTle}>
          <Text style={styles.cardNameStyle}>{item?.name}</Text>
          <View style={styles.center}>
            <Icons.AntDesign name="star" size={20} color={Colors.ratingColor} />
            <Text style={{ ...styles.cardNameStyle, paddingLeft: 5 }}>
              {item?.rating}
            </Text>
          </View>
        </View>

        <View style={styles.bottomViewSTle}>
          <View style={styles.center}>
            <Icons.Feather name="map-pin" size={20} color="#929394" />
            <Text style={styles.locationText}>{item?.location}</Text>
          </View>

          <View style={styles.visitorImgRow}>
            {item?.visitors.slice(0, 3).map((visitor: any, index: number) => (
              <Image
                key={visitor?.id}
                source={{ uri: visitor.avatar }}
                style={[styles.avatar, { marginLeft: index === 0 ? 0 : -10 }]}
              />
            ))}
            <Text style={styles.extraVisitors}>+{item?.extraVisitors}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      {/* Header */}
      <View style={styles.headerParentView}>
        <View style={styles.imgViewHeaderStyle}>
          <Image source={{ uri: profileImg }} style={styles.imgStyle} />
          <Text style={styles.headerTxtStyle}>Leonardo</Text>
        </View>
        <TouchableOpacity style={styles.imgTouchableOpacityHeaderStyle}>
          <Icons.Octicons name="bell" size={24} />

          <View style={styles.dotStyle} />
        </TouchableOpacity>
      </View>

      <View style={styles.exploreViewSTyle}>
        <Text style={styles.exploreTxtStyle}>Explore the</Text>
      </View>

      <View style={styles.beautifulViewSTyle}>
        <Text style={styles.beautifulTxtSTyle}>Beautiful</Text>
        <View>
          <Text style={styles.worldTxtSTyle}> world!</Text>
          <Image
            source={require('../../../assets/imgs/curveImg.png')}
            style={styles.curveStyleImg}
          />
        </View>
      </View>

      {/* Cards */}

      <View style={styles.cardViewTextStyle}>
        <Text style={styles.bestTxtStyle}>Best Destination</Text>
        <TouchableOpacity>
          <Text style={styles.viewTxtStyle}>View all </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={placeData}
        renderItem={PlaceCards}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListTSyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </SafeAreaView>
  );
};

export default Home;
