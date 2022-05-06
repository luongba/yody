import React, { useState } from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";

import numberWithCommas from "../utils/numberWithCommas";
import { DELETE_CART, MOVE_QUANTITY } from "../redux/types/CartType";
import { Link } from "react-router-dom";

const CartItem = (props) => {
    const dispatch = useDispatch()
  return (
    <div className="cart__item">
      <div className="cart__item__image">
        <img src={props.item.image01} alt="" />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`catalog/${props.item.slug}`}>
            {props.item.title} - {props.item.colors.join('-')} - {props.item.sizes.join('-')}
          </Link>
        </div>
        <div className="cart__item__info__price">
          {numberWithCommas(Number.parseInt(props.item.price) * props.item.quantity)} VNĐ
        </div>
        <div className="cart__item__info__quantity">
          <div className="product__info__item__quantity" >
            <div
              className="product__info__item__quantity__btn"
              onClick={()=>props.changeCart(props.item, -1)}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {props.item.quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={()=>props.changeCart(props.item, 1)}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>

        <div className="cart__item__info__del" onClick={()=> props.deleteCart(props.item)}>
            <i className="bx bx-trash"></i>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
  changeCart: PropTypes.func
};

export default CartItem;
