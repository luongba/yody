import React, { useEffect } from "react";
import Helmet from "../components/Helmet";
import Button from "../components/Button";
import numberWithCommas from "../utils/numberWithCommas";
import CartItem from "../components/CartItem";
import productData from "../assets/fake-data/products";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_CART, MOVE_QUANTITY } from "../redux/types/CartType";
const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const changeCart = (cart, number) => {
    dispatch({
      type: MOVE_QUANTITY,
      product: cart,
      number: number,
    });
  };

  const deleteCart = (cart) => {
    Swal.fire({
      title: 'Bạn có chắc muốn xóa sản phẩm này ra khỏi giỏ ?',
      showCancelButton: true,
      icon: 'warning',
      confirmButtonColor: '#4267b2',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Tôi đồng ý!',
      cancelButtonText: 'Thoát'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: DELETE_CART,
          product: cart
        })
        Swal.fire(
          '',
          'Xóa sản phẩm thành công!',
          'success'
        )
      }
    })
  }
  const { carts } = useSelector((state) => state.CartReducer);
  const totalCart = carts.reduce(
    (tong, cart) => (tong += Number.parseInt(cart.price) * cart.quantity),
    0
  );
  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {carts.length} sản phẩm trong giỏ hàng</p>
          </div>
          <div className="cart__info__txt__price">
            <span>Thành tiền:</span>
            <span>{numberWithCommas(totalCart)} VNĐ</span>
          </div>
          <div className="cart__info__btn">
            <Button size="block">Đặt hàng</Button>
            <Link to={"/"}>
              <Button size="block">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {carts.map((item, index) => (
            <CartItem key={index} changeCart={changeCart} deleteCart={deleteCart} item={item} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
