import React, {Component} from 'react'
import {View, ScrollView, StyleSheet, Alert } from 'react-native'
import { Header, ImageCard } from '../../src/components/uikit'
import {
  BATMAN_DETAILS
} from '../routes'

const url = 'http://api.tvmaze.com/search/shows?q=batman'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'BATMAN',
      data: []
    }
    console.log('constructor')
  }

  componentDidMount = async () => {
    //загружать данные с сервера
    console.log('componentDidMount')
    try {
      const response = await fetch(url)
      console.log('rrrrrrrrrrrrrrr')
      console.log(response)
      const data = await response.json()
      console.log(data)
      this.setState({data})

    } catch (e) {
      Alert.alert(
        'Ошибка!',
        'Сервер недоступен!',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')}
        ],
        { cancelable: false }
      )
    }

    //this.setState({ title: 'Команда Будущего РБ'})
  }
  render() {
    const { title, data } = this.state
    const { container } = styles
    const { navigation } = this.props
    return (
      <View>
        <Header
          title={title}
          leftIcon="ios-menu"
          leftColor="#fff"
          onPress={() => navigation.openDrawer()}
        />
        <ScrollView>
          <View style={container}>
            { data.map(item => (
              <ImageCard
                data={item.show}
                key={item.show.id}
                //onPress={() => console.log('onPress')}
                onPress={() => navigation.navigate(BATMAN_DETAILS, (item.show))}
              />
            ))
            }

          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 100
  }
})
