import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'
import { NativeRouter, Route, Link } from "react-router-native"
import BackButton from '../components/backButton'

export default class Goals extends Component {
    render() {
        return (
            <Container>
                <Text>Goals</Text>
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