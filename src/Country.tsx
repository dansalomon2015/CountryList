import React from "react";
import {View, Pressable, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Country = ({country, onPress, isWinner}) => {
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.item, isWinner ? styles.winnerBg : null]}>
                <Text>{country.name}</Text>
                <Text>{country.trophies}</Text>
            </View>
        </Pressable>
    )
}

Country.propTypes = {
    country : PropTypes.shape({
        id : PropTypes.number,
        name: PropTypes.string.isRequired,
        trophies : PropTypes.number.isRequired
    }).isRequired,
    onPress : PropTypes.func.isRequired,
    isWinner : PropTypes.bool
}

Country.defaultProps = {
    isWinner: false
};


const styles = StyleSheet.create({
    item : {
        paddingHorizontal : 20,
        paddingVertical : 30,
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderWidth : 0.2,
        backgroundColor : '#FFF'
    },
    winnerBg : {
        backgroundColor : "#FFCD01"
    }
})


export default Country;