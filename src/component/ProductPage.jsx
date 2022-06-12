import { Data, Methods, Product, IPhoneProduct } from './index';
const ProductPage = ({
  displayMac,
  setDisplayMac,
  displayIPhone,
  setDisplayIPhone,
  sortval,
  setSortVal,
  favoriteList,
  setFavoriteList,
  cartList,
  setCartList,
  subTotalList,
  setSubTotalList,
  productNumList,
  setProductNumList,
  filteringVal,
  setFilteringVal,
}) => {
  const nothingProduct = (
    <div className="flex justify-center w-full">
      <p className="text-2xl">該当する商品はありません</p>
    </div>
  );

  const expressionMac = displayMac.map((productInfo, index) => {
    return (
      <div key={index}>
        <Product
          displayProduct={displayMac}
          info={productInfo}
          id={index}
          favoriteList={favoriteList}
          setFavoriteList={setFavoriteList}
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

  const expressionIPhone = displayIPhone.map((productInfo, index) => {
    return (
      <div key={index}>
        <IPhoneProduct
          displayProduct={displayIPhone}
          info={productInfo}
          id={index}
          favoriteList={favoriteList}
          setFavoriteList={setFavoriteList}
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
  const sort = (e) => {
    // optionのvalue取得
    const val = e.target.value;
    // valによって処理を変える
    if (val === 'sort') {
      setDisplayMac(Methods.lowToHigh(displayMac));
      setDisplayIPhone(Methods.lowToHigh(displayIPhone));
      setSortVal(val);
    } else if (val === 'HighToLow') {
      setDisplayMac(Methods.highToLow(displayMac));
      setDisplayIPhone(Methods.highToLow(displayIPhone));
      setSortVal(val);
    }
  };

  const filtering = (e) => {
    setDisplayMac(Methods.filter(e, sortval, Data.mac));
    setDisplayIPhone(Methods.filter(e, sortval, Data.iPhone));
    setFilteringVal(e.target.value);
  };

  return (
    <div className="pt-8 flex justify-center bg-gray-100">
      <div className="w-10/12 flex justify-center">
        <div className="w-11/12">
          <div className="mb-5 flex justify-end">
            <select value={sortval} onChange={sort} className="mr-3 border-2 border-gray-300 select w-full max-w-xs">
              <option>sort</option>
              <option>HighToLow</option>
            </select>
            <select
              value={filteringVal}
              onChange={filtering}
              className="border-2 border-gray-300 select w-full max-w-xs"
            >
              <option>Filtering</option>
              <option>0-100000</option>
              <option>100000-200000</option>
              <option>200000円以上</option>
              <option>MacBook</option>
              <option>iPhone</option>
            </select>
          </div>
          <div className="flex justify-center">
            <p className="text-4xl font-semibold">あなたにピッタリなMacは？</p>
          </div>
          <div className="mt-10 py-8 flex justify-between w-full overflow-x-auto">
            {displayMac.length > 0 ? expressionMac : nothingProduct}
          </div>
          <div className="mt-10 flex justify-center">
            <p className="text-4xl font-semibold">あなたにピッタリなiPhoneは？</p>
          </div>
          <div className="my-10 py-8 flex justify-between w-full overflow-x-auto">
            {displayIPhone.length > 0 ? expressionIPhone : nothingProduct}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
