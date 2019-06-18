import React, { Component } from 'react'
import styled from 'styled-components'
import { NativeRouter, Route, Link } from "react-router-native"
import { Platform, StyleSheet, Text, View } from 'react-native'

export default class Back extends Component {
    render() {
        return (
            <Button to={this.props.route}>
                <ButtonText>Back</ButtonText>
            </Button>
        )
    }
}

const Button = styled(Link)`
    width: 72px;
    height: 31px;
    border: #ccc 1px solid;
    color: #6f6f6f;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
`
const ButtonText = styled.Text`
    color: #6f6f6f;
`