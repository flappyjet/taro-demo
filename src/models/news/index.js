import { axios } from 'taro-axios'

export default {
  state: [],
  reducers: {
    saveData (state, payload) {
      return payload
    },
  },
  effects: {
    async fetchData (payload) {
      try {
        let resp = await axios.get("https://www.apiopen.top/journalismApi")
        if(resp.status==200 && resp.data.code==200){
          this.saveData(resp.data.data.toutiao)
        }
      }catch(e){
        // todo
      }
    },
  },
}