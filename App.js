import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'
import { NativeRouter, Route, Link } from "react-router-native"
import Home from './views/home'
import Todo from './views/todo'
import Budget from './views/budget'
import Goals from './views/goals'
import Hours from './views/hours'

export default class App extends Component {
  render() {
    return (
      <Container>
        <NativeRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/budget" component={Budget} />
          <Route exact path="/goals" component={Goals} />
          <Route exact path="/hours" component={Hours} />
        </NativeRouter>
      </Container>
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