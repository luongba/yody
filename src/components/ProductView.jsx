import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { withRouter } from "react-router-dom";
import numberWithCommas from "../utils/numberWithCommas";
import Swal from "sweetalert2";
import { HIDE_MODAL } from "../redux/types/ModalType";
import { useDispatch } from "react-redux";
import { SET_CART } from "../redux/types/CartType";
const ProductView = (props) => {
  const product = props.product;
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = React.useState(product.image01);
  const [DescriptionExpand, setDescriptionExpand] = React.useState(false);
  const [color, setColor] = React.useState(undefined);
  const [size, setSize] = React.useState(undefined);
  const [quantity, setQuantity] = React.useState(0);
  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };
  React.useEffect(() => {
    setPreviewImage(product.image01);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);

  const check = () => {
    if (color === undefined) {
      Swal.fire({
        icon: "error",
        title: "Vui lòng màu sắc !",
      });
      return false;
    }

    if (size === undefined) {
      Swal.fire({
        icon: "error",
        title: "Vui lòng chọn kích thước !",
      });
      return false;
    }
    return true;
  };

  const addToCart = () => {
    if (check()) {
      dispatch({
        type: SET_CART,
        product: {
          title: product.title,
          price: product.price,
          image01: product.image01,
          colors: [color],
          slug: product.slug,
          sizes: [size],
          quantity: quantity,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Đặt hàng thành công !",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const gotoCart = () => {
    if (check()) {
      dispatch({
        type: SET_CART,
        product: {
          title: product.title,
          price: product.price,
          image01: product.image01,
          colors: [color],
          slug: product.slug,
          sizes: [size],
          quantity: quantity,
        },
      });
      dispatch({ type: HIDE_MODAL });
      props.history.push("/cart");
    }
  };
  return (
    <div className="product">
      <div data-aos="fade-up" className="product__image">
        <div className="product__image__list">
          <div className="product__image__list__item">
            <img
              src={product.image01}
              alt=""
              onClick={() => setPreviewImage(product.image01)}
            />
          </div>
          <div
            className="product__image__list__item"
            onClick={() => setPreviewImage(product.image02)}
          >
            <img src={product.image02} alt="" />
          </div>
        </div>
        <div className="product__image__main">
          <img src={previewImage} alt="" />
        </div>
        <div
          className={`product-description ${DescriptionExpand ? "expand" : ""}`}
        >
          <div className="product-description__title">Chi tiết sản phẩm</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-description__btn">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!DescriptionExpand)}
            >
              {!DescriptionExpand ? "Xem thêm" : "Thu gọn"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {numberWithCommas(product.price)} VNĐ
          </span>
          <div className="product__info__item__title">Màu sắc</div>
          <div className="product__info__item__list">
            {product.colors.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  color === item ? "active" : ""
                }`}
                onClick={() => setColor(item)}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Kích cỡ</div>
          <div className="product__info__item__list">
            {product.size.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  size === item ? "active" : ""
                }`}
                onClick={() => setSize(item)}
              >
                <span className="product__info__item__list__item__size">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Số lượng</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button
            size="sm"
            icon="shopping-bag"
            animate={true}
            onClick={() => addToCart()}
          >
            Thêm vào giỏ
          </Button>
          <Button
            size="sm"
            icon="cart"
            animate={true}
            onClick={() => gotoCart()}
          >
            Mua ngay
          </Button>
        </div>
        <div
          className={`product-description mobile ${
            DescriptionExpand ? "expand" : ""
          }`}
        >
          <div className="product-description__title">Chi tiết sản phẩm</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-description__btn">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!DescriptionExpand)}
            >
              {!DescriptionExpand ? "Xem thêm" : "Thu gọn"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default withRouter(ProductView);
