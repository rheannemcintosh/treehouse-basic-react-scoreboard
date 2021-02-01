const Header = () => {
const players = [
	{
		name: "Guil",
		score: 50,
		id: 1
	},
	{
		name: "Treasure",
		score: 85,
		id: 2
	},
	{
		name: "Ashley",
		score: 95,
		id: 3
	},
	{
		name: "James",
		score: 80,
		id: 4
	}
];

	return (
    	<header>
      		<h1>Scoreboard</h1>
      		<span className="stats">Players: 1</span>
		</header>
	);
}

const Player = () => {
	return (
		<div className="player">
			<span className="player-name">
				Guil
			</span>
			<Counter />
		</div>
	);
}

const Counter = () => {
	return (
		<div className="counter">
			<button className="counter-action decrement"> - </button>
			<span className="counter-score">35</span>
			<button className="counter-action increment"> + </button>
		</div>
	);
}

const App = () => {
	return (
		<div className="scoreboard">
			<Header />

			{/* Players list */}
			<Player />
		</div>
	);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);