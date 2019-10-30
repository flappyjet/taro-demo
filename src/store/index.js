import { init } from '@rematch/core'
import models from '../models'

function configStore(){
  const store = init({ models })
  return store
}

export default configStore;