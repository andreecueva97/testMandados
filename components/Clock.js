
import React,{Component} from 'react';
import {Text,View,StyleSheet,Animated} from 'react-native';
class Clock extends React.Component{///////////////////////
  constructor(props){
    super(props);
    this.state= {  date:new Date()  };
    }
  componentDidMount(){
    
    this.timerID= setInterval(
      ()=> this.tick(),1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date:new Date()
    });
  }
  render(){
    return(
      <Text style={{fontWeight:'bold',fontSize:40}}>
          {this.state.date.toLocaleTimeString()}
      </Text>
    );
  }
}