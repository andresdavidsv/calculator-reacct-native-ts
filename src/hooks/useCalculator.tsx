import { useRef, useState } from 'react';

enum Operators {
  addition,
  subtraction,
  multiplication,
  division,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [previewNumber, setPreviewNumber] = useState('0');
  const lastOperation = useRef<Operators>();

  const clear = () => {
    setNumber('0');
    setPreviewNumber('0');
  };
  const buildNumber = (numberText: string) => {
    if (number.includes('.') && numberText === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };
  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };
  const btnDelete = () => {
    let negative = '';
    let temp = number;
    if (number.includes('-')) {
      negative = '-';
      temp = number.substring(1);
    }
    if (temp.length > 1) {
      setNumber(negative + temp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };
  const changePreviewNumber = () => {
    if (number.endsWith('.')) {
      setPreviewNumber(number.slice(0, -1));
    } else {
      setPreviewNumber(number);
    }
    setNumber('0');
  };
  const btnDivision = () => {
    changePreviewNumber();
    lastOperation.current = Operators.division;
  };
  const btnMultiplication = () => {
    changePreviewNumber();
    lastOperation.current = Operators.multiplication;
  };
  const btnSubtraction = () => {
    changePreviewNumber();
    lastOperation.current = Operators.subtraction;
  };
  const btnAddition = () => {
    changePreviewNumber();
    lastOperation.current = Operators.addition;
  };
  const cal = () => {
    const num1 = Number(number);
    const num2 = Number(previewNumber);
    switch (lastOperation.current) {
      case Operators.addition:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtraction:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiplication:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.division:
        setNumber(`${num2 / num1}`);
        break;
      default:
        break;
    }
    setPreviewNumber('0');
  };

  return {
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
    setNumber,
    previewNumber,
    setPreviewNumber,
  };
};
