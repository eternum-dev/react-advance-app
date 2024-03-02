import ProductCard from '../components';



const propduct = {
    id: '1',
    title: 'mug - coffe nice',
}

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                gap: '1rem'
            }}>
                <ProductCard product={propduct}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>

            </div>

        </div>
    )
}