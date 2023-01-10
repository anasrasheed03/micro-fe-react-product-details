import React, {
    useState,
    useEffect
} from "react";
import {
    useParams
} from 'react-router-dom';
import axios from "axios";
import "../../node_modules/fundamental-styles/dist/fundamental-styles.css";
import { Title, BusyIndicator,InfoLabel,ObjectStatus } from 'fundamental-react';
const ProductDetails = () => {
    const {
        productId
    } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        console.log(productId)
        const getData = async () => {
            if(productId){
            const response = await axios.get(
                `https://dummyjson.com/products/${productId}`
            );
            setProduct(response.data);
        }

        };
        getData();
    }, [productId]);
    return ( <div> {
            product ? ( <>
                <Title level={1}>{
                    product.title
                }</Title>
                <div class="fddocs-container">
                <span class="fd-object-number fd-object-number--informative">
        <span className="fd-object-number__text">Price: {
                    product.price
                }</span><span className="fd-object-number__unit">EUR</span>
        </span>
                </div>
                <fd-text>Description: {product.description}</fd-text>
                <p>Ratings:  
                <InfoLabel>{
                    product.rating
                }</InfoLabel> </p> 
                <p> Brand:<ObjectStatus inverted status='positive'>{
                    product.brand
                }</ObjectStatus>  </p> 
                <p> Category: {
                    product.category
                } </p> 
                </>
            ):<BusyIndicator show />
        } </div>
    );
};
export default ProductDetails;