import React from 'react';
import { Text, View } from 'react-native';
import MyCard from './src/components/MyCard';

function App() {

  return (
    <View>
      {/* inline style */}
      <Text style={{ color: 'white', fontSize: 30 }}>Thurunu</Text>
      {/* <MyCard bgcolor='#4cc53f' description='50000$' title='Salary'> $</MyCard>
        <MyCard bgcolor='#6b9c30' description='6 year' title='Experience'></MyCard> */}


      <MyCard title="Hello" description="Simple card" />

      <MyCard
        title="Outlined Card"
        variant="outlined"
        size="large"
      />

      <MyCard
        title="Click me"
        onPress={() => console.log('Pressed!')}
      />

      <MyCard>
        <Text>Custom content here</Text>
      </MyCard>

      <MyCard
        title="Premium Card"
        description="With all the bells and whistles"
        bgcolor="#40bc73"
        variant="elevated"
        size="large"
        onPress={() => navigate('Details')}
        titleColor="#4F46E5"
        style={{ marginHorizontal: 24 }}
      />
    </View>
  );
}

export default App;
