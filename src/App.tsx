import './App.css'
import ProductItem from "./components/ProductItem.ts"
import ProductsPages from "./components/ProductsPages.tsx"

function App() {
    const productsProductItem: ProductItem[] = [
        {
            id: 1,
            name: "Продукт 1",
            description: "Описание",
            cost: 100
        },
        {
            id: 2,
            name: "Продукт 2",
            description: "Описание",
            cost: 100
        },
        {
            id: 3,
            name: "Продукт 3",
            description: "Описание",
            cost: 100
        },
        {
            id: 4,
            name: "Продукт 4",
            description: "Описание",
            cost: 100
        },
        {
            id: 5,
            name: "Продукт 5",
            description: "Описание",
            cost: 100
        },
        {
            id: 6,
            name: "Продукт 6",
            description: "Описание",
            cost: 100
        },
        {
            id: 7,
            name: "Продукт 7",
            description: "Описание",
            cost: 100
        },
        {
            id: 8,
            name: "Продукт 8",
            description: "Описание",
            cost: 100
        },
    ];
    return (
        <>
            <ProductsPages arrayProducts={productsProductItem}/>
        </>
    )
}

export default App
