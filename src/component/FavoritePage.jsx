import { Favorite } from './index';

const FavoritePage = ({
  favoriteList,
  setFavoriteList,
  cartList,
  setCartList,
  subTotalList,
  setSubTotalList,
  productNumList,
  setProductNumList,
}) => {
  const displayFavoriteList = favoriteList.map((info, index) => {
    return (
      <div key={index}>
        <Favorite
          info={info}
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

  const nothingFavoriteList = <div className="mt-10 flex justify-center text-4xl font-mono">お気に入り登録なし</div>;

  const displayFavoritePage = (
    <div className="flex justify-center bg-gray-100">
      {/* 外枠 */}
      <div className="w-9/12 my-10 flex justify-center border-4 rounded-3xl overflow-y-auto">
        <div className="my-5 w-11/12 flex flex-col">{displayFavoriteList}</div>
      </div>
    </div>
  );

  return <>{favoriteList.length > 0 ? displayFavoritePage : nothingFavoriteList}</>;
};

export default FavoritePage;
