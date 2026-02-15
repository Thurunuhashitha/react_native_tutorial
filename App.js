import React from 'react';
import { Text, View } from 'react-native';  
import MyCard from './src/components/MyCard';

function App() { 

  return ( 
    <View>
      {/* inline style */}
        <Text style={{color:'white' , fontSize:30}}>Thurunu</Text>
        <MyCard bgcolor='#4cc53f' description='6 year'>Salary</MyCard>
        <MyCard bgcolor='#6b9c30' description='6 year'>Experience</MyCard>
    </View>
  );
}

export default App;
