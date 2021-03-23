import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignUp from '../screens/signup/SignUp'
import SplashScreen from '../screens/splashScreens/SplashScreen';
import AskLogin from '../screens/login/AskLogin'
import Verification from '../screens/splashScreens/Verification';
import Terms from '../screens/splashScreens/Terms';
import Login from '../screens/login/Login'
import Reset from '../screens/splashScreens/ResetPassword';
import Categories from '../screens/Food_Screen/Categories';
import AllCategories from '../screens/Food_Screen/AllCategories';
import SearchFood from '../screens/Food_Screen/SearchFood';
import PizzaOrder from '../screens/Food_Screen/Pizza';
import Cart from '../screens/Cart/Cart';
import PlaceOrder from '../screens/Checkout/PlaceOrder';
import CheckoutCard from '../screens/Checkout/CheckoutCard';
import Address from '../screens/Checkout/AddAddress';
import Favorites from '../screens/Cart/Favorites';
import FavoritesRemover from '../screens/Cart/FavoritesRemover'
import Profile from '../screens/Profile/Profile'
import AddNewAddress from '../screens/Checkout/AddNewAddress';
import EditAddress from '../screens/Checkout/EditAddress';
import Notification from '../screens/Cart/Notification';
import EditProfile from '../screens/Profile/EditProfile';
import DeliveryAddress from '../screens/Checkout/DeliveryAddress';
import PaymentMethod from '../screens/Card/PaymentMethod';
import AddCard from '../screens/Card/AddCard';
import About from '../screens/Food_Screen/About';
import NewCategories from '../screens/Food_Screen/NewCategories';
import CategoriesAll from '../screens/Food_Screen/CategoriesAll';
import AddExtra from '../screens/Food_Screen/AddExtra';
import Filter from '../screens/Food_Screen/Filter';
import NewAddress from '../screens/Checkout/NewAddress';
import OnBoardingScreen from '../screens/splashScreens/OnBoardingScreen';
import Welcome from '../screens/splashScreens/Welcome';
import AboutGreen from '../screens/Food_Screen/AboutGreen';
import MyOrder from '../screens/Checkout/MyOrder';
import SearchFilter from '../screens/Food_Screen/SearchFilter'
import CartAdd from '../screens/Cart/CartAdd';
import Settings from '../screens/Profile/Settings';
import GreenDelivery from '../screens/Checkout/GreenDelivery';
import Payment from '../screens/Card/Payment';
import DefualtPayment from '../screens/Card/DeafualPayment';
import DiscoverFood from '../screens/Food_Screen/DiscoverFood';
import NotificationScreen from '../screens/NotificationScreen';
import OpneCamera from '../config/OpneCamera';
import ImagePickerExample from '../config/ImagePicker';

const Drawer = createDrawerNavigator();

const Menu = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="1" screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <Drawer.Screen name="askLogin" component={AskLogin} />
        <Drawer.Screen name="login" component={Login} />
        <Drawer.Screen name="signup" component={SignUp} />
        <Drawer.Screen name="onBoarding" component={OnBoardingScreen} />
        <Drawer.Screen name="welcome" component={Welcome} />
        <Drawer.Screen name="2nd" component={SplashScreen} />
        <Drawer.Screen name="verification" component={Verification} />
        <Drawer.Screen name="Terms & Condition" component={Terms} />
        <Drawer.Screen name="allcategories" component={AllCategories} />
        <Drawer.Screen name="reset" component={Reset} />
        <Drawer.Screen name="categories" component={Categories} />
        <Drawer.Screen name="search" component={SearchFood} />
        <Drawer.Screen name="pizza" component={PizzaOrder} />
        <Drawer.Screen name="cart" component={Cart} />
        <Drawer.Screen name="place_order" component={PlaceOrder} />
        <Drawer.Screen name="editProfile" component={EditProfile} />
        <Drawer.Screen name="address" component={Address} />
        <Drawer.Screen name="visa" component={CheckoutCard} />
        <Drawer.Screen name="favorites" component={Favorites} />
        <Drawer.Screen name="profile" component={Profile} />
        <Drawer.Screen name="newAddress" component={AddNewAddress} />
        <Drawer.Screen name="editAddress" component={EditAddress} />
        <Drawer.Screen name="notification" component={Notification} />
        <Drawer.Screen name="deliveryAddress" component={DeliveryAddress} />
        <Drawer.Screen name="paymentMethod" component={PaymentMethod} />
        <Drawer.Screen name="addcard" component={AddCard} />
        <Drawer.Screen name="about" component={About} />
        <Drawer.Screen name="categories2" component={NewCategories} />
        <Drawer.Screen name="categoriesAll" component={CategoriesAll} />
        <Drawer.Screen name="addextra" component={AddExtra} />
        <Drawer.Screen name="filter" component={Filter} />
        <Drawer.Screen name="NewAddress" component={NewAddress} />
        <Drawer.Screen name="aboutgreen" component={AboutGreen} />
        <Drawer.Screen name="myorder" component={MyOrder} />
        <Drawer.Screen name="SearchFilter" component={SearchFilter} />
        <Drawer.Screen name="cartAdd" component={CartAdd} />
        <Drawer.Screen name="settings" component={Settings} />
        <Drawer.Screen name="GreenDelivery" component={GreenDelivery} />
        <Drawer.Screen name="payment" component={Payment} />
        <Drawer.Screen name="DefualtPayment" component={DefualtPayment} />
        <Drawer.Screen name="Defualtdiscover" component={DiscoverFood} />
        <Drawer.Screen name="notifications" component={NotificationScreen} />
        <Drawer.Screen name="favoritesRemover" component={FavoritesRemover} />
        {
          // no 
        }
        <Drawer.Screen name="OpneCamera" component={OpneCamera} />
        <Drawer.Screen name="imagePicker" component={ImagePickerExample} />
      
      </Drawer.Navigator>

      
    </NavigationContainer>
  );
};

export default Menu;
