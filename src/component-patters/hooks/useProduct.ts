import { useEffect, useRef, useState } from "react";
import { InitialValue, OnChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValue;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: UseProductArgs) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    if (initialValues?.maxCount === counter && value > 0) return;

    const newValue = Math.max(counter + value, 0);

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    if(!initialValues?.count) return;
    setCounter(initialValues?.count);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  // useEffect(() => {
  //   isMounted.current = true;
  //   console.log('el otro');
  // }, []);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.maxCount && counter === counter,
    product,

    increaseBy,
    reset,

  };
};
