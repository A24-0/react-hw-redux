import React, { useState } from "react";
import Product from "./Product.tsx";
import { Button, ButtonGroup } from "@chakra-ui/react";
import ProductItem from "../types/ProductItem.ts";
import './styles.css';

interface ProductPageProps {
    arrayProducts: ProductItem[]
}

const ProductsPages: React.FC<ProductPageProps> = ({ arrayProducts }) => {
    const [page, setPage] = useState<number>(0);
    const changePage = (page: number) => {
        setPage(page);
    };
    const itemsOnPage: number = 3;
    const pagesCount: number = Math.ceil(arrayProducts.length / itemsOnPage);
    const buttons: JSX.Element[] = [];
    for (let i = 0; i < pagesCount; i++) {
        buttons.push(
            <Button key={i} onClick={() => changePage(i)}>
                {i + 1}
            </Button>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {arrayProducts.slice(page * itemsOnPage, (page + 1) * itemsOnPage).map(p => (
                    <Product key={p.id} id={p.id} name={p.name} description={p.description} cost={p.cost} />
                ))}
            </div>
            <div className="button-group">
                <ButtonGroup>
                    {buttons}
                </ButtonGroup>
            </div>
        </div>
    );
};

export default ProductsPages;