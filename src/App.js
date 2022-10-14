import './App.css';
import Data from './data';
import Header from './components/Header';
import Card from './components/Card';

function App() {
	const data = Data.map((item) => {
		return <Card key={item.id} item={item} />;
	});

	return (
		<div className="App">
			<Header />
			{data}
		</div>
	);
}

export default App;
