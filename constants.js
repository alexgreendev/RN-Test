import { Dimensions } from 'react-native'

const win = Dimensions.get('window')
export const h = win.height
export const w = win.width
export const responsive = {
  mobile5: w > 315 && w < 341,
  mobile8: w > 342 && w < 375,
  mobile8plus: w > 375 && w < 415,
  tablet: w < 990 && w > 415
}

export const BLUE = '#30d0fe'
