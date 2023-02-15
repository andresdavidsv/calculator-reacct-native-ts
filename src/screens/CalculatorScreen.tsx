import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { ButtonComponent } from '../components/ButtonComponent';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    clear,
    buildNumber,
    positiveNegative,
    btnDelete,
    btnDivision,
    btnMultiplication,
    btnSubtraction,
    btnAddition,
    cal,
    number,
    previewNumber,
  } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      {previewNumber !== '0' && (
        <Text style={styles.resultLittle}>{previewNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonComponent
          text={'C'}
          color={'#9B9B9B'}
          colorText={'black'}
          action={() => clear()}
        />
        <ButtonComponent
          text={'+/-'}
          color={'#9B9B9B'}
          colorText={'black'}
          action={positiveNegative}
        />
        <ButtonComponent
          text={'del'}
          color={'#9B9B9B'}
          colorText={'black'}
          action={btnDelete}
        />
        <ButtonComponent
          text={'/'}
          color={'#FF9427'}
          colorText={'white'}
          action={btnDivision}
        />
      </View>
      <View style={styles.row}>
        <ButtonComponent text={'7'} action={buildNumber} />
        <ButtonComponent text={'8'} action={buildNumber} />
        <ButtonComponent text={'9'} action={buildNumber} />
        <ButtonComponent
          text={'X'}
          color={'#FF9427'}
          colorText={'white'}
          action={btnMultiplication}
        />
      </View>
      <View style={styles.row}>
        <ButtonComponent text={'4'} action={buildNumber} />
        <ButtonComponent text={'5'} action={buildNumber} />
        <ButtonComponent text={'6'} action={buildNumber} />
        <ButtonComponent
          text={'-'}
          color={'#FF9427'}
          colorText={'white'}
          action={btnSubtraction}
        />
      </View>
      <View style={styles.row}>
        <ButtonComponent text={'1'} action={buildNumber} />
        <ButtonComponent text={'2'} action={buildNumber} />
        <ButtonComponent text={'3'} action={buildNumber} />
        <ButtonComponent
          text={'+'}
          color={'#FF9427'}
          colorText={'white'}
          action={btnAddition}
        />
      </View>
      <View style={styles.row}>
        <ButtonComponent text={'0'} width action={buildNumber} />
        <ButtonComponent text={'.'} action={buildNumber} />
        <ButtonComponent
          text={'='}
          color={'#FF9427'}
          colorText={'white'}
          action={cal}
        />
      </View>
    </View>
  );
};
