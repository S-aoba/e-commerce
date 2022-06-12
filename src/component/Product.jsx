import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Methods } from './index';
const Product = ({
  displayProduct,
  info,
  id,
  favoriteList,
  setFavoriteList,
  cartList,
  setCartList,
  subTotalList,
  setSubTotalList,
  productNumList,
  setProductNumList,
}) => {
  const [favorite, setFavorite] = useState(false);
  const [cartFlag, setCartFlag] = useState(false);
  const [num, setNum] = useState(1);
  useEffect(() => {
    const hasF = favoriteList.indexOf(info);
    if (hasF !== -1) setFavorite(true);
  }, []);

  useEffect(() => {
    const hasF = favoriteList.indexOf(info);
    if (hasF !== -1) setFavorite(true);
    else setFavorite(false);
  }, [displayProduct]);

  useEffect(() => {
    const hasCart = cartList.indexOf(info);
    if (hasCart !== -1) setCartFlag(true);
  }, []);

  useEffect(() => {
    const hasCart = cartList.indexOf(info);
    if (hasCart !== -1) setCartFlag(true);
  }, [displayProduct]);

  const onFavorite = (
    <button
      onClick={() => Methods.isFavorite(info, favoriteList, setFavorite, setFavoriteList)}
      className="btn btn-warning"
    >
      <i className="fa-3x fa-solid fa-star"></i>
    </button>
  );

  const offFavorite = (
    <button
      onClick={() => Methods.isFavorite(info, favoriteList, setFavorite, setFavoriteList)}
      className="btn btn-active btn-ghost"
    >
      <i className="fa-3x fa-regular fa-star"></i>
    </button>
  );

  const hasCart = (
    <button
      onClick={() =>
        Methods.toCart(
          info,
          cartList,
          setCartList,
          setCartFlag,
          subTotalList,
          setSubTotalList,
          productNumList,
          setProductNumList,
          num
        )
      }
      className="btn  btn-primary"
    >
      カートに追加されています
    </button>
  );

  const notHasCart = (
    <button
      onClick={() =>
        Methods.toCart(
          info,
          cartList,
          setCartList,
          setCartFlag,
          subTotalList,
          setSubTotalList,
          productNumList,
          setProductNumList,
          num
        )
      }
      className="btn  btn-primary"
    >
      カートに追加する
    </button>
  );

  return (
    <div className="card w-96 mx-8 bg-base-100">
      <Link to={`/e-commerce/detailMac/${info.productName}`}>
        <figure>
          <img className="inline h-full" src={info.imgURL} alt="MacBook" />
        </figure>
        <Outlet />
      </Link>
      <div className="card-body">
        <p className="text-2xl">{info.productName}</p>
        <p className="text-xl">{info.price}円</p>
        <div className="card-actions justify-end">
          {favorite ? onFavorite : offFavorite}
          {cartFlag ? hasCart : notHasCart}
        </div>
      </div>
    </div>
  );
};

export default Product;
