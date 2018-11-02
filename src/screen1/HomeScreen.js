import React, {Component} from 'react'
import {View, ScrollView, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import { searchChanged } from '../actions'
import { Header, ImageCard, SearchBar } from '../../src/components/uikit'
import {
  STARGATE_DETAILS
} from '../routes'

const url = 'http://api.tvmaze.com/search/shows?q=stargate'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Главная',
      data: [],
      visibleSearchbar: false
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

  onGoBack = (someDataFromChildren) => {
    console.log('someDataFromChildren', someDataFromChildren)
  }

  _onChangeText = text => {
    console.log('text', text)
  }

  render() {
    const { title, data, visibleSearchbar } = this.state
    const { container } = styles
    const { navigation } = this.props
    return (
      <View>
        { visibleSearchbar ?
          <SearchBar
            colorRight='#fff'
            iconRight='magnify'
            placeholder='Поиск'
            onChangeText={this._onChangeText}
            onPressRight={() => this.setState({ visibleSearchbar: false })}
            onBlur={() => this.setState({ visibleSearchbar: true })}
          /> :
          <Header
            title={title}
            iconLeft="ios-menu"
            colorLeft="#fff"
            iconRight="magnify"
            colorRight="#fff"
            onPressLeft={() => navigation.openDrawer()}
            onPressRight={() => this.setState({ visibleSearchbar: true })}
          />
        }
        <ScrollView>
          <View style={container}>
            { data.map(item => (
              <ImageCard
                data={item.show}
                key={item.show.id}
                //onPress={() => console.log('onPress')}
                onPress={() => navigation.navigate(STARGATE_DETAILS, ({show: item.show, onGoBack: this.onGoBack}))}
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
