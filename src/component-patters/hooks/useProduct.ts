import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ onChange,product, value = 0 }: UseProductArgs) => {
  const [counter, setCounter] = useState(value);
  const isController = useRef(!!onChange);


  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);

    if(isController.current ){
      return onChange!({count: value, product})
    }


    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
