import Taro, { Component, useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

function useRun(callback, initValue)
{
  let [running, setRunning] = useState(initValue)
  let t = null
  useEffect(() => {console.log('enter',running)
    if(running){
      t = setInterval(() => {
        callback();
      },100)
    }
    return () => {console.log('leave',running)
      t && clearInterval(t) && (t=null)
    }
  },[running])
  return [running, setRunning]
}

const Toggle = ({ cb }) => {
  let [running, setRunning] = useRun(cb, 0)
  return (
    <View className="status" onClick={()=>{setRunning(running => 1-running);}}>
      <Text >status: </Text><AtButton size="small">{running? 'running': 'pause'}</AtButton>
    </View>
  )
}

export default Toggle