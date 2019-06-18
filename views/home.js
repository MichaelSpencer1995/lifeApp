import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'
import { NativeRouter, Route, Link } from "react-router-native"
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <Container>
                <Text>Home</Text>
                <ToTodo to="/todo"><LinkText>Todo</LinkText></ToTodo>
                <ToBudget to="/budget"><LinkText>Budget</LinkText></ToBudget>
                <ToHours to="/hours"><LinkText>Hours</LinkText></ToHours>
                <ToGoals to="/goals"><LinkText>Goals</LinkText></ToGoals>
            </Container>
        )
    }
}

const Container = styled.View`
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50%;
`
const LinkText = styled.Text`
    color: white;
`
const ToLink = styled(Link)`
    width: 80%;
    height: 60px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 30px;
`
const ToTodo = styled(ToLink)`
    background: red;
`
const ToBudget = styled(ToLink)`
    background: blue;
`
const ToHours = styled(ToLink)`
    background: orange;
`
const ToGoals = styled(ToLink)`
    background: purple;
`

const mapStateToProps = (state) => {
    return {
      things: state.things
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      removeItem: (index) => {
        dispatch({
          type: 'REMOVE_ITEM',
          index: index
        })
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)