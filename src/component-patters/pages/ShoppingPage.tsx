import ProductCard from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';



export const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart } = useShoppingCart();

    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                gap: '1rem'
            }}>
                {
                    products.map(products => (
                        <ProductCard
                            product={products}
                            className='bg-dark'
                            key={products.id}
                            onChange={onProductCountChange}
                            value={shoppingCart[products.id]?.count || 0}
                        >
                            <ProductCard.Image
                                img={products.img}
                            />
                            <ProductCard.Title />
                            <ProductCard.Buttons className='custom-button' />
                        </ProductCard>
                    ))
                }
                <div
                    className='shopping-page'
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        flexDirection: 'column',
                        marginTop: '1rem'
                    }} >
                    {
                        Object.entries(shoppingCart).map(([key, product]) => (
                            <ProductCard
                                product={product}
                                className='bg-dark'
                                key={key}
                                style={{ width: '150px' }}
                                value={product.count}
                                onChange={onProductCountChange}
                            >
                                <ProductCard.Image img={product.img} />
                                <ProductCard.Buttons className='custom-button' />
                            </ProductCard>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}