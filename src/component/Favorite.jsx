import { useState, useEffect } from 'react';

import { Methods } from './index.js';

const Favorite = ({
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
  const [cartFlag, setCartFlag] = useState(false);
  const [num, setNum] = useState(1);

  useEffect(() => {
    const hasCart = cartList.indexOf(info);
    if (hasCart !== -1) setCartFlag(true);
  }, []);

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
    <div className=" mb-4 grid grid-cols-3 border-y-4">
      <div className="flex justify-center">
        <img className="my-3" src={info.imgURL} width="50%" alt="画像" />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <p className="text-4xl font-mono">{info.productName}</p>
      </div>
      <div className="col-span-1">
        <p className="mt-8 mb-3 text-3xl font-semibold">Price: {info.price}円</p>
        {cartFlag ? hasCart : notHasCart}
        <button
          onClick={() => Methods.deleteFavorite(favoriteList, setFavoriteList, id)}
          className="my-4 btn btn-warning block"
        >
          お気に入りから削除する
        </button>
      </div>
    </div>
  );
};

export default Favorite;
