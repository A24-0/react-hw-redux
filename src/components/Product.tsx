import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import "./styles.css";

interface ProductProps {
    id: number;
    name: string;
    description: string;
    cost: number;
}

const Product: React.FC<ProductProps> = ({ id, name, description, cost }) => {
    return (
        <div className="product-card">
            <Card key={id} className="card">
                <CardHeader className="card-header">
                    <Heading>{name}</Heading>
                </CardHeader>
                <CardBody>
                    <Stack>
                        <span>{description}</span>
                        <span>{cost} ₽</span>
                    </Stack>
                </CardBody>
                <CardFooter className="card-footer">
                    <ButtonGroup>
                        <Button>Купить</Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Product;
