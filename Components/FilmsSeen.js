// Components/FilmsSeen.js

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SeenFilmList from './SeenFilmList'
import { connect } from 'react-redux'

class FilmsSeen extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <SeenFilmList
          films={this.props.FilmsSeen}
          navigation={this.props.navigation}
          favoriteList={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  avatar_container: {
    alignItems: 'center'
  }
})

const mapStateToProps = (state) => {
  return {
    FilmsSeen: state.toggleSeen.FilmsSeen
  }
}

export default connect(mapStateToProps)(FilmsSeen)
