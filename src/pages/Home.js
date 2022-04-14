import React, { useContext } from "react";
import { connect, useSelector } from "react-redux";
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { increment, decrement } from "../redux/counterSlice";
import { ThemeContext, UserContext } from "../AppContext";

const Home = ({expenses, onLogin}) => {

  const userContext = useContext(UserContext)
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, handleLogin } = useContext(UserContext);
  //const count = useSelector((state) => state.counter.value)
  //const userPseudo = useSelector((state) => state.userReducer);

  console.log("theme : " + theme)

  const handleClick = () => {
    handleLogin("morip")
    console.log(user);
  }
  return (
    <div className="home">
      <Navigation />
      <Logo />
      <button class="rounded-full" type="button" onClick={toggleTheme}>
        Sign In
      </button>

      <button className="rounded ring-offset-2 ring-2" onClick={handleClick}>Button A</button>


      <Countries />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses : state
  }
}
export default connect(
  mapStateToProps,
)(Home);
