/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import HomeScreen from './src/pages/home/HomeScreen'
import MineScreen from './src/pages/MineScreen'

const MainScreenNavigator = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '首页'
    }),
  },
  // Mine: {
  //     screen: MineScreen,
  //     navigationOptions: ({navigation}) => ({
  //         tabBarLabel: '我的'
  //     }),
  // },
}, {
  tabBarVisible: false,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#488aff', // 文字和图片选中颜色
    inactiveTintColor: '#999', // 文字和图片默认颜色
    // showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
    style: {
      backgroundColor: '#fefefe', // TabBar 背景色
      height: 0,
    },
    labelStyle: {
      fontSize: 13, // 文字大小
    },
  }
});

const App = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: ({navigation}) => ({
      // title: `${navigation.state.routeName}`,
      header: null,
      // headerTitle: '首页',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#488aff'
      }
    })
  },
  Mine: {
    screen: MineScreen,
    navigationOptions: ({navigation}) => ({
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#488aff'
      }
    })

  },
});

export default App

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
