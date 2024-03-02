import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noimage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';


export const ProductImage = ({ img = '' }) => {

    let imgToShow: string;
    const { product } = useContext(ProductContext);

    img ? imgToShow = img : product.img ?
        imgToShow = product.img
        : imgToShow = noimage;

    return (
        <img
            className={styles.productImg}
            src={imgToShow}
            alt="Product image"
        />
    )
}
