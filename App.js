import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'
import { NativeRouter, Route, Link } from "react-router-native"
import Home from './views/home'
import Todo from './views/todo'
import Budget from './views/budget'
import Goals from './views/goals'
import Hours from './views/hours'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <NativeRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/todo" component={Todo} />
            <Route exact path="/budget" component={Budget} />
            <Route exact path="/goals" component={Goals} />
            <Route exact path="/hours" component={Hours} />
          </NativeRouter>
          </Container>
      </Provider>
    )
  }
}

const Container = styled.View`
  background: white;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`