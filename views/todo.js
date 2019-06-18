import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'
import { NativeRouter, Route, Link } from "react-router-native"
import BackButton from '../components/backButton'

export default class Todo extends Component {
    render() {
        return (
            <Container>
                <Text>Todo</Text>
                <BackButton route="/" />
            </Container>
        )
    }
}

const Container = styled.View`
    background: blue;
    width: 100%;
    height: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`