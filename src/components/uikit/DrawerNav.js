import React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import One from '../../screen1'
import Two from '../../screen2'
import { BLUE } from '../../../constants'

const DrawerNav = () => {
  const createDrawerNav = createDrawerNavigator(
    {
      Screen1: {
        screen: One,
        navigationOptions: {
          drawerLabel: 'Stargate',
          drawerIcon: ({ tintColor }) => (
            <MaterialIcons name="grade" size={24} style={{ color: tintColor }} />
          )
        }
      },
      Screen2: {
        screen: Two,
        navigationOptions: {
          drawerLabel: 'Batman',
          drawerIcon: ({ tintColor }) => (
            <MaterialIcons name="favorite" size={24} style={{ color: tintColor }} />
          )
        }
      }
    }, {
      initialRouteName: 'Screen1',
      contentOptions: {
        activeTintColor: BLUE,
        itemsContainerStyle: {
          marginVertical: 20
        }
      }
    }
  )
  return (
    <View>
    </View>
  )
}

export { DrawerNav }
