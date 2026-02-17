import * as React from 'react'; 
import { Text, TouchableRipple } from 'react-native-paper';

const Tuch = () => (
  <TouchableRipple
  style={{backgroundColor:'white'}}
    onPress={() => console.log('Pressed')}
    rippleColor="rgb(175, 172, 172)"
  >
    <Text>Press anywhere</Text>
  </TouchableRipple>
);

export default Tuch;