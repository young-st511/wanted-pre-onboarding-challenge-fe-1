import useAuth from "../../hooks/auth/useAuth";
import NavBarPresenter from "./NavBar.presenter";

function NavBarContainer() {
  const { user, signOut } = useAuth();

  if (!user) {
    return null;
  }

  return <NavBarPresenter signOut={signOut} />;
}

export default NavBarContainer;
