import * as S from "./NavBar.style";

interface Props {
  signOut: VoidFunction;
}

function NavBarPresenter({signOut}:Props) {
  return (
    <S.Wrapper>
      <S.Title>{"Young's TODO"}</S.Title>
      <S.LogOut onClick={signOut}>Log Out</S.LogOut>
    </S.Wrapper>
  );
}

export default NavBarPresenter;
