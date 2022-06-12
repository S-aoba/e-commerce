import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Methods } from './index';
const DetailPage = ({
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
  const params = useParams();
  let macInfo = Methods.getMacInfo(params.mac);
  const [detailSubTotal, setDetailSubTotal] = useState(macInfo.price * num);
  useEffect(() => {
    // カートの個数が変化する度に、subTotalを更新する
    // subTotal部分⬇︎
    const newSubTotal = Number(num) * macInfo.price;
    setDetailSubTotal(newSubTotal);
  }, [num]);

  useEffect(() => {
    const hasF = favoriteList.indexOf(macInfo);
    if (hasF !== -1) setFavorite(true);
  }, []);

  useEffect(() => {
    const hasCart = cartList.indexOf(macInfo);
    if (hasCart !== -1) setCartFlag(true);
  }, []);

  const onFavorite = (
    <button
      onClick={() => Methods.isFavorite(macInfo, favoriteList, setFavorite, setFavoriteList)}
      className="mb-3 btn btn-warning"
    >
      <i className="fa-3x fa-solid fa-star"></i>
    </button>
  );

  const ofFavorite = (
    <button
      onClick={() => Methods.isFavorite(macInfo, favoriteList, setFavorite, setFavoriteList)}
      className="mb-3 btn btn-active btn-ghost"
    >
      <i className="fa-3x fa-regular fa-star"></i>
    </button>
  );

  const hasCart = (
    <button
      onClick={() =>
        Methods.toCart(
          macInfo,
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
      className="mb-3 btn  btn-primary"
    >
      カートに追加されています
    </button>
  );

  const notHasCart = (
    <button
      onClick={() =>
        Methods.toCart(
          macInfo,
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
      className="mb-3 btn  btn-primary"
    >
      カートに追加する
    </button>
  );

  const handleNumber = (e) => {
    const val = e.target.value;
    if (val[0] === '0') {
      alert('正しい値を入力してください');
      setNum(1);
      setDetailSubTotal(macInfo.price);
    } else {
      setNum('');
      setNum(val);
    }
  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-7/12 mr-5 border-2 border-gray-300">
        <div className="flex justify-center">
          <div className="my-10">
            <img className="block w-96" src={macInfo.imgURL} alt="" />
            <div className="mt-10 flex justify-center">
              <p className="block text-5xl">{macInfo.productName}</p>
            </div>
          </div>
        </div>
        <div className="my-5 border-2 border-gray-200 mx-20 flex justify-center">
          <p className="px-3 py-3 text-xl font-serif">{macInfo.description}</p>
        </div>
      </div>
      <div className="w-96 border-2 border-gray-300 flex justify-center">
        <div className="mt-16">
          <div className="my-3">
            <p className="text-2xl ">商品名: {macInfo.productName}</p>
          </div>
          <div className="flex justify-end">
            <div>
              <p className="my-5 text-3xl">価格: {macInfo.price}円</p>
              <div className="my-5 flex justify-end">
                <label className="mr-4">個数:</label>
                <input
                  value={num}
                  onChange={handleNumber}
                  className="w-14 pl-2 border-2 border-gray-300 "
                  type="number"
                />
              </div>
              <p className="my-5 text-3xl">合計: {detailSubTotal}円</p>
            </div>
          </div>
          <div className="flex flex-col">
            {favorite ? onFavorite : ofFavorite}
            {cartFlag ? hasCart : notHasCart}
            <Link to={'/e-commerce/cart'} className="flex justify-end">
              <button className="btn">カートに進む</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
