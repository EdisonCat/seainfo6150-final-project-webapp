import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home.jsx";
import Error from "./Component/Error/Error.jsx";
import Header from "./Component/Header/Header.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import CharacterList from "./Component/CharacterList/CharacterList.jsx";
import SignUp from "./Component/SignUp/SignUp.jsx";
import Login from "./Component/Login/Login.jsx";
import Success from "./Component/Success/Success";
import MarvelFandomContext from "./Context/MarvelFandomContext.jsx";
import DetailPage from "./Component/DetailPage/DetailPage";
import ComicsDetail from "./Component/ComicsDetail/ComicsDetail.jsx";
import Sidebar from "./Component/Sidebar/Sidebar";
import ComicsList from "./Component/ComicsList/ComicsList";
import Trailer from "./Component/Trailer/Trailer";

function App() {
	const [username, setUsername] = useState(
		localStorage.getItem("mf_username")
			? localStorage.getItem("mf_username")
			: ""
	);
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem("mf_username") ? true : false
	);
	const [sidebar, setSidebar] = useState(false);
	const login = (username) => {
		setUsername(username);
		setLoggedIn(true);
	};
	const logout = () => {
		setUsername("");
		setLoggedIn(false);
		localStorage.removeItem("mf_username");
	};
	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth < 600) setSidebar(false);
		});
	}, []);

	return (
		<BrowserRouter>
			<div className="app">
				<MarvelFandomContext.Provider
					value={{
						login: login,
						logout: logout,
						username: username,
						loggedIn: loggedIn,
					}}
				>
					<Header
						username={username}
						loggedIn={loggedIn}
						setSidebar={setSidebar}
						sidebar={sidebar}
					/>
					<Sidebar
						sidebar={sidebar}
						setSidebar={setSidebar}
						loggedIn={loggedIn}
					/>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route
							path="/characters"
							exact
							component={CharacterList}
						/>
						<Route
							path="/characters/:id"
							exact
							component={DetailPage}
						/>
						<Route path="/signup" exact component={SignUp} />
						<Route path="/login" exact component={Login} />
						<Route path="/trailer" exact component={Trailer} />
						<Route
							path="/signup/success"
							exact
							component={Success}
						/>
						<Route path="/comics" exact component={ComicsList} />
						<Route
							path="/comics/:id"
							exact
							component={ComicsDetail}
						/>
						<Route component={Error} />
					</Switch>
					<Footer />
				</MarvelFandomContext.Provider>
			</div>
		</BrowserRouter>
	);
}

export default App;