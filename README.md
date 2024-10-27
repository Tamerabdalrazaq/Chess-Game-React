# Chess Project With React

## Demo
### `https://mychessgame.netlify.app`



## Key Files and Components

- **[src/components/App.js](src/components/App.js)**: Main application component. Initializes players and game state.
- **[src/components/Board.js](src/components/Board.js)**: Board component. Manages the state of the chessboard and handles piece movement.
- **[src/components/PieceCemetery.js](src/components/PieceCemetery.js)**: Displays captured pieces.
- **[src/components/UI-Stuff/GameOptions.js](src/components/UI-Stuff/GameOptions.js)**: Contains game options.
- **[src/components/UI-Stuff/MovesHistory.js](src/components/UI-Stuff/MovesHistory.js)**: Displays the history of moves.
- **[src/Player.js](src/Player.js)**: Player class. Manages player-specific data and actions.
- **[src/pieces](src/pieces)**: Contains individual piece classes (e.g., bishop, king, knight).
- **[src/utilities/helpers.js](src/utilities/helpers.js)**: Utility functions.
- **[src/utilities/virtualBoard.js](src/utilities/virtualBoard.js)**: Functions for creating and managing the virtual board state.

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/Chess-Game-React.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Chess-Game-React
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

### Running the Project
To start the development server:
```sh
npm start
Open http://localhost:3000 to view it in the browser.
```
### Building  the Project
Building the Project
To create a production build:
```sh
npm run build
```



## Features
### `Implemented Features`
- All chess pieces
- Pieces movement
- Legal Movement (including pinning, checks, checks handling...)
- Legal movement highlight on board
- capturing pieces
- checkmate
- stalemate
- UI stuff:
- Movement history
- Pieces cemetery
- Game modes
- Timers

### `Missing Features`
- Castling
- En Passant
- Insufficient Material draw
- Pawn Promotion
- Some other stuff that I'm not aware of ....
