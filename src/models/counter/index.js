export default {
  state: 0,
  reducers: {
    increment (state, payload) {
      return state + payload
    },
    reset (state, payload) {
      return 0
    },
  },
  effects: {
    async resetAfterDelay (payload) {
      await new Promise(resolve => setTimeout(()=>{resolve()},payload))
      this.reset()          
    },
  },
}