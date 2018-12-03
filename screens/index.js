import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import heroAdd from '../Components/heroAdd';
import Home from '../Components/Home';
import Heroes from '../Components/Heroes';
import Setting from '../Components/Setting';
import app from '../App';
const Tab= TabNavigator({
       Home:{
            screen:Home,
        }, Hero:{
            screen:Heroes,
            
        },
        Setting:{
            screen:Setting,
            
        },

    },
    {
        tabBarPosition:'bottom',
        swipeEnabled:true,
        tabBarOptions:{
            activeTintColor: '#f8f8f8',
            activeBackgroundColor: '#586589',
            inactiveTintColor: '#1234',
            style:{
              backgroundColor:'#000055',
            },
            labelStyle:{
                fontSize: 10,
                color: 'white',
                padding: 5,
            }
        }
        
    }
);
export default class screen extends Component{
    render(){
        return(
            <Tab/>
        );
    }
}