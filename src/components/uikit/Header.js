import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { w, BLUE } from '../../../constants'

const Header = ({
  iconLeft,
  iconRight,
  colorLeft,
  colorRight,
  title,
  detail,
  onPressLeft,
  onPressRight
}) => {
  const { container, textStyle, iconLeftStyle, iconRightStyle } = styles
  return (
    <View style={container}>
      {iconLeft &&
        <TouchableOpacity onPress={onPressLeft}>
          <Ionicons name={iconLeft} style={[iconLeftStyle, { paddingLeft: detail ? 10 : 25 }]} color={colorLeft} />
        </TouchableOpacity>
      }
      <Text numberOfLines={1} ellipsizeMode='tail' style={[textStyle, { paddingLeft: iconLeft ? 10 : 0 }]}>{title.toUpperCase()}</Text>
      {iconRight &&
        <TouchableOpacity onPress={onPressRight}>
          <MaterialCommunityIcons name={iconRight} style={[iconRightStyle, {color: colorRight}]} />
        </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...ifIphoneX({
      height: 116
    }, {
      height: 90
    }),
    paddingHorizontal: 5,
    alignItems: 'center',
    backgroundColor: BLUE,
    shadowColor: '#000',
    shadowOffset: {width: 0, hieght: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: '#fff',
    width: w - 90,
    fontSize: 22,
    fontFamily: 'AvenirNext-DemiBold',
    ...ifIphoneX({
      paddingTop: 75
    }, {
      paddingTop: 40
    })

  },
  iconLeftStyle: {
    ...ifIphoneX({
      paddingTop: 75
    }, {
      paddingTop: 40
    }),
    fontSize: 35
  },
  iconRightStyle: {
    ...ifIphoneX({
      paddingTop: 75
    }, {
      paddingTop: 44
    }),
    fontSize: 30,
    marginRight: 2
  }
})

export { Header }
