import React, { useReducer } from 'react';

interface inputState {
  value: string;
  isTouched: boolean;
}

interface inputAction {
  type: 'INPUT' | 'BLUR' | 'RESET';
  value: string;
  isTouched: boolean;
}

const defaultValues = { value: '', isTouched: false };
const inputReducer = (state: inputState, action: inputAction) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: action.isTouched };
  }
  if (action.type === 'RESET') {
    return { value: action.value, isTouched: action.isTouched };
  }
  return { value: '', isTouched: false };
};

const useInput = (validate: Function) => {
  const [input, dispatch] = useReducer(inputReducer, defaultValues);
  const isValid = validate(input.value);
  const hasError = !isValid && input.isTouched;
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', value: e.target.value, isTouched: false });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR', isTouched: true, value: '' });
  };

  const reset = () => {
    dispatch({ type: 'RESET', isTouched: false, value: '' });
  };
  return {
    value: input.value,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
