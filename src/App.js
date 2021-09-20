import Adduser from "./component/Adduser";
import Getuser from "./component/Getuser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={Adduser} />
					<Route path="/get" component={Getuser} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
