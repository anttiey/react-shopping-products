import CartIcon from '../../assets/CartIcon.svg';
import TitleContainer from '../../components/TitleContainer/TitleContainer';
import Dropdown from '../../components/Dropdown/Dropdown';
import Header from '../../components/Header/Header';
import ProductItem from '../../components/ProductItem/ProductItem';
import useProducts from '../../hooks/useProduct';
import useCartItems from '../../hooks/useCartItems';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import * as S from './ProductListPage.style';
import { CATEGORY_LIST, SORTING_LIST } from '../../constants/optionList';
import Loading from '../../assets/loading.gif';

const ProductListPage = () => {
  const { products, category, sort, loading, isLast, handleCategory, handleSort, fetchNextPage } = useProducts(
    CATEGORY_LIST[0],
    SORTING_LIST[0],
  );
  const { cartItems, counts, handleAddCartItem, handleDeleteCartItem } = useCartItems();
  const targetRef = useIntersectionObserver(fetchNextPage);

  return (
    <div>
      <Header>
        <S.CartIconWrapper>
          <img src={CartIcon} alt="장바구니 아이콘" />
          <S.CartNumber>{counts}</S.CartNumber>
        </S.CartIconWrapper>
      </Header>
      <S.Layout>
        <TitleContainer title="bpple 상품 목록" />
        <S.DropdownContainer>
          <Dropdown options={CATEGORY_LIST} selectedOption={category} updateOption={handleCategory} />
          <Dropdown options={SORTING_LIST} selectedOption={sort} updateOption={handleSort} />
        </S.DropdownContainer>
        <S.ProductList>
          {products &&
            products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                isAdded={cartItems.some((item) => item.product.id === product.id)}
                onAddCartItem={handleAddCartItem}
                onDeleteCartItem={handleDeleteCartItem}
              />
            ))}
        </S.ProductList>
        {!isLast && (
          <S.LoadingWrapper ref={targetRef}>
            {loading && <S.LoadingSpinner src={Loading} alt="로딩 스피너" />}
          </S.LoadingWrapper>
        )}
      </S.Layout>
    </div>
  );
};

export default ProductListPage;
