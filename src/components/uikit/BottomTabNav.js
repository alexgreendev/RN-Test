import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import One from '../../screen1'
import Two from '../../screen2'
import Three from '../../screen3'
import { BLUE } from '../../../constants'

export default createBottomTabNavigator(
  {
    Stargate: One,
    Batman: Two,
    Spiderman: Three
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Stargate') {
          iconName = focused ? 'ios-videocam' : 'ios-play'
        } else if (routeName === 'Batman') {
          iconName = focused ? 'ios-videocam' : 'ios-play'
        } else if (routeName === 'Spiderman') {
          iconName = focused ? 'ios-videocam' : 'ios-play'
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: BLUE,
      inactiveTintColor: 'grey'
    }
  }
)
