import React, {Component} from 'react';
import {View, Animated} from 'react-native';

class Ball extends Component{

	componentWillMount(){
		//The starting position of the animated object
		this.position = new Animated.ValueXY(0, 0);
		//a donde quieres cambiarlo, the default time is 1sec
		Animated.spring(this.position, {
			toValue: {x: 200, y: 500 }
		}).start();
	}
	//nota, por ahora no hay ninguna relacion entre Ball(la clase) y position(ANimated value)
	//animated.view ws el que especifica lo que quieres sacar
	//el .getLayout() le da la posicion o los datoss de como tiene que cambiar
	render(){
		return(
			<Animated.View style={this.position.getLayout()}>
				<View style={styles.ball} />
			</Animated.View>
			
		);
	}
}

const styles = {
	ball: {
		height: 60,
		width: 60,
		borderRadius: 30,
		borderWidth: 30,
		borderColor: 'black'
	}
};

export default Ball;