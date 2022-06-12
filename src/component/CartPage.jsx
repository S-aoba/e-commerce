import { useEffect } from 'react';
import { Cart, Methods } from './index';

const CartPage = ({
  cartList,
  setCartList,
  total,
  setTotal,
  subTotalList,
  setSubTotalList,
  productNumList,
  setProductNumList,
}) => {
  useEffect(() => {
    // subTotalListの中身が変化するごとに配列の合計を出してtotalに挿入する
    Methods.calculateTotal(subTotalList, setTotal);
  }, [subTotalList]);

  const displayCart = cartList.map((item, index) => {
    return (
      <div key={index}>
        <Cart
          info={item}
          id={index}
          cartList={cartList}
          setCartList={setCartList}
          subTotalList={subTotalList}
          setSubTotalList={setSubTotalList}
          productNumList={productNumList}
          setProductNumList={setProductNumList}
        />
      </div>
    );
  });

  const nothingCartList = (
    <div className="mt-8 mb-5 py-5 px-3 w-full flex justify-center float-left">
      <p className="text-4xl">現在カートには何も入っていません</p>
    </div>
  );

  const displayPurchase = (
    <div className="mt-8 ml-8 inline-block">
      <p className="text-3xl">合計: {total}円</p>
      <div className="flex justify-end">
        <button
          onClick={() => Methods.purchase(setTotal, setCartList, setSubTotalList, setProductNumList)}
          className="mt-10 inline-block btn btn-primary"
        >
          購入
        </button>
      </div>
    </div>
  );

  const displayCartPage = (
    <div className="my-10 mx-10 flex justify-center border-2 rounded-3xl">
      <div className="w-9/12 ">
        {/* 個々のカート⬇︎ */}
        {displayCart}
        {/* 合計&購入ボタン⬇︎ */}
        {displayPurchase}
      </div>
    </div>
  );
  return <>{cartList.length > 0 ? displayCartPage : <div>{nothingCartList}</div>}</>;
};

export default CartPage;
