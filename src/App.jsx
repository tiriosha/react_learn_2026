function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="players-name">Player 1</span>
              <span className="players-symbol"> X</span>
            </span>
            <button>EDIT</button>
          </li>
          <li>
            <span className="player">
              <span className="players-name">Player 2</span>
              <span className="players-symbol"> O</span>
            </span>
            <button>EDIT</button>
          </li>
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
