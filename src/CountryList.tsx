import React from "react";
import {View} from 'react-native';
import Country from "./Country";
import PropTypes from 'prop-types';

const CountryList = ({list, select, winner}) => {

    const isWinner = (item) : boolean => {
        if(!winner) return false;
        return winner.id == item.id;
    }

    return (
        <View>
            {
                list.map((item, index) => {
                    return(
                        <Country 
                            key={index} 
                            country={item}  
                            onPress={() => select(item)} 
                            isWinner={isWinner(item)} 
                        />
                    )
                })
            }
        </View>
    )
}

CountryList.propTypes = {
    list : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        trophies : PropTypes.number.isRequired
    })).isRequired,
    select : PropTypes.func.isRequired ,
    winner : PropTypes.shape({
        name: PropTypes.string.isRequired,
        trophies : PropTypes.number.isRequired
    })
}

export default CountryList;