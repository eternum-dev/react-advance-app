import ProductCard from '../components';
import { products } from '../data/products';



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
                    key={product.id}
                    initialValues={initialValues}
                >
                    {
                        () => (
                            <>
                                <ProductCard.Image img={product.img} />
                                <ProductCard.Title />
                                <ProductCard.Buttons />
                            </>
                        )
                    }
                </ProductCard>
            </div>
        </div>
    )
}