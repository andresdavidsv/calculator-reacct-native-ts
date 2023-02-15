import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/themes/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.backGround}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
