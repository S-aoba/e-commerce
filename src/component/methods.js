import { Data } from './index';

export const getMacInfo = (name) => {
  return Data.mac.find((macInfo) => macInfo.productName === name);
};

export const getIPhoneInfo = (name) => {
  return Data.iPhone.find((iPhoneInfo) => iPhoneInfo.productName === name);
};
// ProductPage
export const highToLow = (displayProducts) => {
  let newDisplayProduct = [...displayProducts];
  const HighToLowMac = newDisplayProduct.sort((a, b) => b.price - a.price);
  return HighToLowMac;
};

export const lowToHigh = (displayProducts) => {
  let newDisplayProduct = [...displayProducts];
  const LowToHigh = newDisplayProduct.sort((a, b) => a.price - b.price);
  return LowToHigh;
};

export const filter = (e, sortVal, productData, favoriteList) => {
  const val = e.target.value;
  let newDisplayProduct = [...productData];
  // eslint-disable-next-line
  let filteredProduct = newDisplayProduct.filter((item) => {
    if (val === '0-100000') {
      return item.price >= 0 && item.price <= 100000;
    } else if (val === '100000-200000') {
      return item.price >= 100000 && item.price <= 200000;
    } else if (val === '200000円以上') {
      return item.price >= 200000;
    } else if (val === 'MacBook') {
      return item.category === 'MacBook';
    } else if (val === 'iPhone') {
      return item.category === 'iPhone';
    }
  });
  if (val === 'Filtering') {
    if (sortVal === 'sort') {
      return lowToHigh(newDisplayProduct);
    } else if (sortVal === 'HighToLow') {
      return highToLow(newDisplayProduct);
    }
  }
  if (sortVal === 'sort') {
    return lowToHigh(filteredProduct);
  } else if (sortVal === 'HighToLow') {
    return highToLow(filteredProduct);
  }
};

// Product
export const isFavorite = (info, favoriteList, setFavorite, setFavoriteList) => {
  const hasF = favoriteList.indexOf(info);
  if (hasF !== -1) {
    const newFavoriteList = favoriteList.filter((item, index) => {
      return index !== hasF;
    });
    setFavoriteList(newFavoriteList);
    setFavorite(false);
  } else {
    //お気に入りのリストに追加
    setFavoriteList([...favoriteList, info]);
    setFavorite(true);
  }
};

export const toCart = (
  info,
  cartList,
  setCartList,
  setCartFlag,
  subTotalList,
  setSubTotalList,
  productNumList,
  setProductNumList,
  num
) => {
  const hasCart = cartList.indexOf(info);
  if (hasCart !== -1) {
    const isFlagCart = window.confirm('既にカートに入っています。カートから削除しますか？');
    if (isFlagCart) {
      const newCartList = [...cartList];
      const newSubTotalList = [...subTotalList];
      const newProductNumList = [...productNumList];
      newCartList.splice(hasCart, 1);
      newSubTotalList.splice(hasCart, 1);
      newProductNumList.splice(hasCart, 1);
      setCartList(newCartList);
      setSubTotalList(newSubTotalList);
      setProductNumList(newProductNumList);
      setCartFlag(false);
    } else return;
  } else {
    const newCartList = [...cartList, info];
    const newSubTotalList = [...subTotalList, info.price * num];
    const newProductNumList = [...productNumList, num];
    setCartList(newCartList);
    setSubTotalList(newSubTotalList);
    setProductNumList(newProductNumList);
    setCartFlag(true);
  }
};

// CartPage
export const calculateTotal = (subTotalList, setTotal) => {
  if (subTotalList.length === 0) return;
  const newTotal = subTotalList.reduce((sum, ele) => sum + ele);
  setTotal(newTotal);
};

export const purchase = (setTotal, setCartList, setSubTotalList, setProductNumList) => {
  const isPurchase = window.confirm('購入しますか？');
  if (isPurchase) {
    setTotal(0);
    setCartList([]);
    setSubTotalList([]);
    setProductNumList([]);
    alert('購入が完了しました');
  } else return;
};

// Cart
export const deleteCart = (
  cartList,
  setCartList,
  id,
  subTotalList,
  setSubTotalList,
  productNumList,
  setProductNumList
) => {
  const newCartList = [...cartList];
  const newSubTotalList = [...subTotalList];
  const newProductNumList = [...productNumList];
  newCartList.splice(id, 1);
  newSubTotalList.splice(id, 1);
  newProductNumList.splice(id, 1);
  setCartList(newCartList);
  setSubTotalList(newSubTotalList);
  setProductNumList(newProductNumList);
};

// Favorite
export const deleteFavorite = (favoriteList, setFavoriteList, index) => {
  let newF = [...favoriteList];
  newF.splice(index, 1);
  setFavoriteList(newF);
};
