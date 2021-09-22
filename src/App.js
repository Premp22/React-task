import RegisterUser from "./component/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./component/Registraion";
import Update from "./component/Updation";
function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={Registration} />
					<Route path="/get" component={RegisterUser} />
					<Route path="/update/:id" component={Update} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
