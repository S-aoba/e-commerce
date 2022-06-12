import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Header, ProductPage, FavoritePage, CartPage, MacDetailPage, IPhoneDetailPage, Data } from './component/index';

function App() {
  const [favoriteList, setFavoriteList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [displayMac, setDisplayMac] = useState(Data.mac);
  const [displayIPhone, setDisplayIPhone] = useState(Data.iPhone);
  const [sortval, setSortVal] = useState('sort');
  const [filteringVal, setFilteringVal] = useState('Filtering');
  const [total, setTotal] = useState(0);
  const [subTotalList, setSubTotalList] = useState([]);
  const [productNumList, setProductNumList] = useState([]);

  return (
    <div className="h-auto w-screen bg-gray-100">
      <Router>
        <Header />
        <div className="h-screen bg-gray-100">
          <Routes>
            <Route
              path={'/e-commerce'}
              element={
                <ProductPage
                  displayMac={displayMac}
                  setDisplayMac={setDisplayMac}
                  displayIPhone={displayIPhone}
                  setDisplayIPhone={setDisplayIPhone}
                  sortval={sortval}
                  setSortVal={setSortVal}
                  favoriteList={favoriteList}
                  setFavoriteList={setFavoriteList}
                  cartList={cartList}
                  setCartList={setCartList}
                  subTotalList={subTotalList}
                  setSubTotalList={setSubTotalList}
                  productNumList={productNumList}
                  setProductNumList={setProductNumList}
                  filteringVal={filteringVal}
                  setFilteringVal={setFilteringVal}
                />
              }
            ></Route>
            <Route
              path={'/e-commerce/favorite'}
              element={
                <FavoritePage
                  favoriteList={favoriteList}
                  setFavoriteList={setFavoriteList}
                  cartList={cartList}
                  setCartList={setCartList}
                  subTotalList={subTotalList}
                  setSubTotalList={setSubTotalList}
                  productNumList={productNumList}
                  setProductNumList={setProductNumList}
                />
              }
            ></Route>
            <Route
              path={'/e-commerce/cart'}
              element={
                <CartPage
                  cartList={cartList}
                  setCartList={setCartList}
                  total={total}
                  setTotal={setTotal}
                  subTotalList={subTotalList}
                  setSubTotalList={setSubTotalList}
                  productNumList={productNumList}
                  setProductNumList={setProductNumList}
                />
              }
            ></Route>
            <Route
              path={'/e-commerce/detailMac/:mac'}
              element={
                <MacDetailPage
                  favoriteList={favoriteList}
                  setFavoriteList={setFavoriteList}
                  cartList={cartList}
                  setCartList={setCartList}
                  subTotalList={subTotalList}
                  setSubTotalList={setSubTotalList}
                  productNumList={productNumList}
                  setProductNumList={setProductNumList}
                />
              }
            ></Route>
            <Route
              path={'/e-commerce/detailIPhone/:iphone'}
              element={
                <IPhoneDetailPage
                  favoriteList={favoriteList}
                  setFavoriteList={setFavoriteList}
                  cartList={cartList}
                  setCartList={setCartList}
                  subTotalList={subTotalList}
                  setSubTotalList={setSubTotalList}
                  productNumList={productNumList}
                  setProductNumList={setProductNumList}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
