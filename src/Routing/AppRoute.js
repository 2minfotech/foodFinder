import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
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
import MyTabs from '../Routing/MyTabs'
import DialogueBoxHandler from "../SocialLogin/DialogueBox";


const Stack = createStackNavigator();


const AppRoute = () => {
  return (
   
    <Stack.Navigator >
    <Stack.Screen name="Home" component={MyTabs}options={{ headerShown: false }}  />
    <Stack.Screen name="onBoarding" component={OnBoardingScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Food Finder" component={AskLogin} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} options={{
      title: "Sign In",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="Sign-Up" component={SignUp} options={{
      title: "Create Account",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
    <Stack.Screen name="2nd" component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
     <Stack.Screen name="DialogueBox" component={DialogueBoxHandler} options={{ headerShown: false }} />
    <Stack.Screen name="Terms and Condition" component={Terms} options={{
      title: "terms and conditins",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="All Categories" component={AllCategories} options={{
      title: "All Categories",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="Reset Password" component={Reset} options={{
      title: "Forgot password",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
    <Stack.Screen name="search" component={SearchFood} options={{ headerShown: false }} />
    <Stack.Screen name="pizza" component={PizzaOrder} options={{ headerShown: false }} />
    <Stack.Screen name="cart" component={Cart} options={{ headerShown: false }} />
    <Stack.Screen name="place_order" component={PlaceOrder} options={{
      title: "Checkout",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="editProfile" component={EditProfile} options={{
      title: "edit profile",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="address" component={Address} options={{
      title: "Checkout",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="visa" component={CheckoutCard} options={{
      title: "Checkout",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="favorites" component={Favorites} options={{ headerShown: false }} />
    <Stack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
    <Stack.Screen name="newAddress" component={AddNewAddress} options={{
      title: "add new address",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="editAddress" component={EditAddress} options={{
      title: "edit address",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="notification" component={Notification} options={{
      title: "notifications",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="deliveryAddress" component={DeliveryAddress} options={{
      title: "delivery address",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="paymentMethod" component={PaymentMethod} options={{
      title: "payment method",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="addcard" component={AddCard} options={{
      title: "add credit card",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="about" component={About} options={{
      title: "about us",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="categories2" component={NewCategories} options={{ headerShown: false }} />
    <Stack.Screen name="categoriesAll" component={CategoriesAll} options={{
      title: "all categories",
      headerStyle: {
        backgroundColor: '#00b970',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="addextra" component={AddExtra} options={{ headerShown: false }} />
    <Stack.Screen name="filter" component={Filter} options={{
      title: "filter",
      headerStyle: {
        backgroundColor: '#00b970',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="NewAddress" component={NewAddress} options={{
      title: "edit address",
      headerStyle: {
        backgroundColor: '#00b970',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="aboutgreen" component={AboutGreen} options={{
      title: "about us",
      headerStyle: {
        backgroundColor: '#00b970',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="myorder" component={MyOrder} options={{
      title: "my orders",
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="SearchFilter" component={SearchFilter} options={{ headerShown: false }} />
    <Stack.Screen name="cartAdd" component={CartAdd} options={{ headerShown: false }} />
    <Stack.Screen name="settings" component={Settings} options={{ headerShown: false }} />
    <Stack.Screen name="GreenDelivery" component={GreenDelivery} options={{
      title: "delivery address",
      headerStyle: {
        backgroundColor: '#00b970',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="payment" component={Payment} options={{
      title: "payment method",
      headerStyle: {
        backgroundColor: '#00b970',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="DefualtPayment" component={DefualtPayment} options={{ headerShown: false }} />
    <Stack.Screen name="Defualtdiscover" component={DiscoverFood} options={{ headerShown: false }} />
    <Stack.Screen name="notifications" component={NotificationScreen} options={{
      title: "notifications",
      headerStyle: {
        backgroundColor: '#00b970',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
      },
    }} />
    <Stack.Screen name="OpneCamera" component={OpneCamera} />
    <Stack.Screen name="imagePicker" component={ImagePickerExample} />
    <Stack.Screen name="favoritesRemover" component={FavoritesRemover} options={{ headerShown: false }} />
  </Stack.Navigator>

  );
};
export default AppRoute;
