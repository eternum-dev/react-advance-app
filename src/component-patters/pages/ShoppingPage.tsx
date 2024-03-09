import ProductCard from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';



export const ShoppingPage = () => {

    const product = products[0]

    const initialValues = {
        count: 3,
        maxCount: 10
    }

    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />
            <div >
                <ProductCard
                    product={product}
                    className='bg-dark'
                    key={product.id}
                    initialValues={initialValues}
                >
                    {
                        ({ reset, increaseBy, maxCount, count }) => (
                            <>
                                <ProductCard.Image img={product.img} />
                                <ProductCard.Title className='text-white' />
                                <ProductCard.Buttons className='custom-button' />

                                <button onClick={reset}>reset</button>

                                <button onClick={() => increaseBy(-2)}>-2</button>
                                {
                                    maxCount && maxCount - 2 >= count ?
                                        <button onClick={() => increaseBy(+2)}>+2</button>
                                        : ''
                                }

                            </>

                        )
                    }

                </ProductCard>
            </div>
        </div>
    )
}