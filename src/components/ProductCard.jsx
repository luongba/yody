import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useDispatch } from "react-redux";
import numberWithCommas from "../utils/numberWithCommas";
import { SET_DATA_MODAL } from "../redux/types/ModalType";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  const dispatch = useDispatch();
  return (
    <div data-aos="fade-up" className="product-card">
      <Link to={`/catalog/${props.slug}`}>
        <div className="product-card__image">
          <img src={props.img01} alt="" />
          <img src={props.img02} alt="" />
        </div>
        <h3 className="product-card__name">{props.name}</h3>
        <div className="product-card__price">
          {numberWithCommas(props.price)} VNĐ
          <span className="product-card__price__old">
            <del>
              {numberWithCommas(
                Number.parseInt(props.price) +
                  Number.parseInt(props.price * 0.1)
              )}
            </del>
          </span>
        </div>
      </Link>

      <div className="product-card__btn">
        <Button
          size="sm"
          icon="cart"
          onClick={() =>
            dispatch({
              type: SET_DATA_MODAL,
              slug: props.slug,
            })
          }
          animate={true}
        >
          Chọn mua
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
