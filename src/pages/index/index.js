import Taro, { Component } from '@tarojs/taro'
import { connect } from "@tarojs/redux";
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Toggle from '../../components/toggle'
import './index.scss'

@connect(
  ({ counter }) => ({ counter })
)
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { counter, dispatch } = this.props;
    return (
      <View className='index'>
        <View className='row'>
          <View className='counter'><Text>counter: </Text>{ counter }</View >
        </View>
        <View className='row'>
          <Toggle cb={()=>{dispatch.counter.increment(10)}} />
        </View>
        <View className='row'>
          <AtButton size="small" className="counter-btn" onClick={()=>{dispatch.counter.increment(-1)}}>
            -
          </AtButton>
          <AtButton size="small" className="counter-btn" onClick={()=>{dispatch.counter.resetAfterDelay(1000)}}>
            <Text>reset</Text>
          </AtButton>
          <AtButton size="small" className="counter-btn" onClick={()=>{dispatch.counter.increment(1)}}>
            +
          </AtButton>
        </View>
      </View>
    )
  }
}

export default Index