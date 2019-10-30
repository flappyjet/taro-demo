import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from "@tarojs/redux";
import './index.scss'

@connect(
  ({ news }) => ({ news })
)
class Index extends Component {

  config = {
    navigationBarTitleText: '新闻'
  }

  componentWillMount () { }

  componentDidMount () {
    const { dispatch } = this.props;
    dispatch.news.fetchData()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { news } = this.props; // console.log(news)
    return (
      <View className='content'>
        {
          news.map((item) => (<View className="row">{item.title}</View>))
        }
      </View>
    )
  }
}

export default Index