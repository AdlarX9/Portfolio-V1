import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Info from './pages/Info';

function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/info" element={<Info />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
