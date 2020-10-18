import React from 'react';
import { Text, ImageBackground, StyleSheet } from 'react-native'

function Category(props){
  return (
    <ImageBackground
      style={styled.wrapper }
      source={{
        uri: props.background_image
      }}
    >  
      <Text style={styled.genres} >{props.genres?props.genres[0]:'Sin categoría'}</Text>
    </ImageBackground>
  )
}

const styled = StyleSheet.create({

genres:{
  color: 'white',
  fontSize: 40,
  fontWeight: 'bold'
},
  wrapper:{
    alignItems: 'center',
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      height:2,
      width: 2,
    },
    textShadowRadius: 0,
    width: 250,
}

})
export default Category;

