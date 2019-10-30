import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import { Provider } from '@tarojs/redux'
import createStore from  './store'
// import { axios } from 'taro-axios'
import 'taro-ui/dist/style/index.scss'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = createStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/content/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#aaaaaa',
      selectedColor: '#00ff00',
      backgroundColor: '#ffffff',
      borderStyle: 'black',
      list : [
        {
          pagePath: 'pages/index/index',
          text: 'news' 
        },
        {
          pagePath: 'pages/content/index',
          text: 'content' 
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
