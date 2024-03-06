import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noimage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';


export interface Props {
    img?: string,
    className?: string,
    style?: React.CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) => {

    let imgToShow: string;
    const { product } = useContext(ProductContext);

    img ? imgToShow = img : product.img ?
        imgToShow = product.img
        : imgToShow = noimage;

    return (
        <img
            className={` ${styles.productImg} ${className}`}
            src={imgToShow}
            alt="Product image"
            style={style}
        />
    )
}
