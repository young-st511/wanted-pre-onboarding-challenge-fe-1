import useAuth from "../../hooks/auth/useAuth";
import NavBarPresenter from "./NavBar.presenter";

function NavBarContainer() {
  const { signOut } = useAuth();

  return <NavBarPresenter signOut={signOut} />;
}

export default NavBarContainer;
