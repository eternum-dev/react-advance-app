import { ProductCard } from "../components/ProductCard"






const propduct = {
    id: '1',
    title: 'mug - coffe nice'
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
                <ProductCard product={propduct} />
                <ProductCard product={propduct} />
                <ProductCard product={propduct} />
                <ProductCard product={propduct} />

            </div>

        </div>
    )
}