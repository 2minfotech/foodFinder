import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Categories from '../screens/Food_Screen/Categories';
import SearchFood from '../screens/Food_Screen/SearchFood';
import Cart from '../screens/Cart/Cart';
import Settings from '../screens/Profile/Settings';
import NotificationScreen from '../screens/NotificationScreen';
import Login from '../screens/login/Login';
import SignUp from '../screens/signup/SignUp'
import DialogueBoxHandler from "../SocialLogin/DialogueBox";

const Tab = createMaterialBottomTabNavigator();

export default  MyTabs = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: 'white' }}
      style={{width:'100%',bottom:-5,paddingTop:5,paddingBottom:5}}
    >
       {/* <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={20} />
          ),
          tabBarLabel:"",
        }}
      /> 
      <Tab.Screen
        name="search"
        component={SearchFood}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={20} />
          ),
          tabBarLabel:""
        }}
      /> 
       <Tab.Screen
        name="cart"
        component={Cart}
        options={{       
          tabBarIcon: ({ color }) => (
            <Icon name="cart-plus" color={color} size={20} />
          ),
          tabBarLabel:"",
          tabBarBadge:3
        }}
      /> 
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{       
          tabBarIcon: ({ color }) => (
            <Icon name="star" color={color} size={20} />
          ),
          tabBarLabel:""
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cog" color={color} size={26} />
          ),
          tabBarLabel:"",
        }}
      /> */}


<Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="fort-awesome-alt" color={color} size={20} />
          ),
          tabBarLabel:"",
        }}
      /> 
       <Tab.Screen
        name="Sign-Up"
        component={SignUp}
        options={{       
          tabBarIcon: ({ color }) => (
            <Icon name="fort-awesome" color={color} size={20} />
          ),
          tabBarLabel:"",
          tabBarBadge:3
        }}
      /> 
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{       
          tabBarIcon: ({ color }) => (
            <Icon name="star" color={color} size={20} />
          ),
          tabBarLabel:""
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cog" color={color} size={26} />
          ),
          tabBarLabel:"",
        }}
      />



    </Tab.Navigator>
  );
}