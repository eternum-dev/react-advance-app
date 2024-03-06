import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';


const propduct = {
    id: '1',
    title: 'mug - coffe nice',
}

export const ShoppingPage = () => {

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
                <ProductCard
                    product={propduct}
                    className='bg-dark'
                >
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons className='custom-button' />
                </ProductCard>

                <ProductCard
                    product={propduct}
                    className='bg-dark'
                >
                    <ProductImage
                        className='custom-image' />
                    <ProductTitle
                        title='no hay na oiga'
                        className='text-white'
                    />
                    <ProductButtons className='custom-button' />
                </ProductCard>

                <ProductCard
                    product={propduct}
                    style={{ backgroundColor: '#270506' }}
                >
                    <ProductImage style={{ border: '1px solid red' }} />
                    <ProductTitle style={{ color: '#ccc', textTransform: 'capitalize' }} />
                    <ProductButtons
                        className='custom-button'
                        style={{
                            margin: '10px auto',
                            width: 'fit-content'
                        }} />
                </ProductCard>
            </div>

        </div>
    )
}