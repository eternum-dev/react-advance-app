import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';





export const ProductTitle = ({ title }: { title?: string }) => {

    let titleToShow: string;
    const { product } = useContext(ProductContext);

    title ?
        titleToShow = title :
        titleToShow = product.title

    return (
        <span className={styles.productDescription}>{titleToShow}</span>
    )
}
