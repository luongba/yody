import React from "react";
import ProductView from "./ProductView";
import productData from "../assets/fake-data/products";
import { useSelector } from "react-redux";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { HIDE_MODAL } from "../redux/types/ModalType";
const ModalProduct = () => {
    const dispatch = useDispatch();
    const { slug, isShow } = useSelector((state) => state.ModalReducer);
  const product = productData.getProductBySlug(slug);
  return (
    <div className={`modal-product ${isShow ? 'active' : ''}`}>
      <div className="modal-product__content">
        <ProductView product={product} />
        <div className="modal-product__content__close">
            <Button icon="x" size="sm" onClick={()=> {
                dispatch({type: HIDE_MODAL})
            }}>đóng</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
