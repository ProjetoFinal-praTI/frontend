import { BrowserRouter } from "react-router-dom";
import { RoutesManager } from "./Routes";


function App() {
	return (
		<BrowserRouter>
			<RoutesManager />
		</BrowserRouter>
	);
}

export default App;
