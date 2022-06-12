import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Methods } from './index';

const Cart = ({
  info,
  id,
  cartList,
  setCartList,
  subTotalList,
  setSubTotalList,
  productNumList,
  setProductNumList,
}) => {
  const [num, setNum] = useState(productNumList[id]);
  const temp = Math.floor(info.price * num);
  const [subTotal, setSubTotal] = useState(temp);
  useEffect(() => {
    // カートの個数が変化する度に、subTotal,subTotalListを更新する
    // subTotal部分⬇︎
    const newSubTotal = Number(num) * info.price;
    setSubTotal(newSubTotal);

    // subTotalList部分⬇︎
    const newSubTotalList = [...subTotalList];
    newSubTotalList.splice(id, 1, newSubTotal);
    setSubTotalList(newSubTotalList);

    // productNumList部分⬇︎
    const newProductNumList = [...productNumList];
    newProductNumList.splice(id, 1, Number(num));
    setProductNumList(newProductNumList);
  }, [num]);

  useEffect(() => {
    // cartListが削除されると該当のIDのカートの個数も更新する
    setNum(productNumList[id]);
  }, [cartList]);

  const handleNumber = (e) => {
    const val = e.target.value;
    if (val[0] === '0') {
      alert('正しい値を入力してください');
      setNum(1);
      setSubTotal(info.price);
    } else {
      setNum('');
      setNum(val);
    }
  };

  const isMac = (
    <Link to={`/detailMac/${info.productName}`}>
      <div className="col-span-1 flex justify-center items-center">
        <img className="h-40" src={info.imgURL} width="70%" alt="" />
      </div>
    </Link>
  );

  const isIPhone = (
    <Link to={`/detailIPhone/${info.productName}`}>
      <div className="col-span-1 flex justify-center items-center">
        <img className="h-40" src={info.imgURL} width="70%" alt="" />
      </div>
    </Link>
  );

  return (
    <div className="mt-8 mb-5 py-5 px-3 w-8/12  border-y-2 grid grid-cols-3 float-left">
      {info.category === 'MacBook' ? isMac : isIPhone}
      <div className="col-span-1 flex justify-center items-center">
        <p className="text-3xl font-mono">{info.productName}</p>
      </div>
      <div className="col-span-1 mt-5 flex flex-col items-center gap-3">
        <p className="text-2xl font-medium">価格: {info.price}円</p>
        <p className="text-2xl font-medium">小計: {subTotal}円</p>
        <div>
          <label className="float-left text-xl">個数:</label>
          <input
            value={num}
            onChange={handleNumber}
            type="number"
            className="ml-6 pl-3 w-16 border-2 border-gray-300"
            min="1"
            max="99"
          />
        </div>
        <button
          onClick={() =>
            Methods.deleteCart(
              cartList,
              setCartList,
              id,
              subTotalList,
              setSubTotalList,
              productNumList,
              setProductNumList
            )
          }
          className="btn"
        >
          カートから削除する
        </button>
      </div>
    </div>
  );
};

export default Cart;
