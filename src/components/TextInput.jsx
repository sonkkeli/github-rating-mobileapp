import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textinputdefaults: {
    borderColor: theme.colors.border,
    borderRadius: 3,
    borderWidth: 1,
    padding: 10,
    backgroundColor: theme.backgroundColors.white,
  },
  textinputError: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.textinputdefaults, error && styles.textinputError];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
