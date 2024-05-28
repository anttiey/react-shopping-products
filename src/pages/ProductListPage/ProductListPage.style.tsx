import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 435px;
  padding: 36px 24px;
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductList = styled.div`
  display: grid;
  gap: 20px;

  /* 데스크톱 */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(4, 1fr);
  }

  /* 모바일 */
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
  }
`;

export const CartIconWrapper = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartNumber = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  height: 19px;
  border-radius: 19px;
  background-color: white;
  bottom: 0px;
  right: 0px;
  padding-top: 1px;
  font-size: 11px;
  font-weight: 700;
`;
