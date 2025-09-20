<p align="center">
  <img src="./src/assets/ss_pokemon.png" alt="CV Builder Preview" style="width:100%;">
</p>

# Pokemon Memory Game

* A fast-paced, memory-testing Pokémon card game! The goal is simple: click on each card only once without repeating. If you click the same card twice, the game ends. Each time you click correctly, the cards are shuffled — making it harder to remember which ones you've already picked!
* LIVE: <a href="https://pokemon-memory-game-sether31.vercel.app/">Pokemon Memory Game</a>

## How It Works

1. **Game Start**
 - A shuffled grid of Pokémon cards is displayed.
 - Each card is clickable and uniquely identifiable (via an ID).

2. **Card Selection Logic**
 - Player clicks on a card.
 - If the card hasn’t been clicked before:
   - Add it to the list of selected cards.
   - Shuffle the cards.
   - Increase the score.
 - If the card has already been clicked:
   - End the game.
   - Reset score and selection history.
   - Show a "Game Over" message.

3. **Victory Condition**
 - If the player successfully clicks all unique cards without repeating, they win.

## Features
1. **Randomized Shuffling after each correct click**
2. **Prevents duplicate selections**
3. **Score Tracking – shows current score and high score**
4. **Game Over Detection on duplicate click**
5. **Responsive Design for all screen sizes**


## Installation

#### 1. **Clone the repository:**
```cmd
git clone https://github.com/sether31/Pokemon-Memory-Game.git
```
#### 2. **Install dependencies**
```cmd
npm install
```

## Technologies Used
#### Frontend
  + HTML
  + Tailwind CSS (CSS Framework)
  + React with vite
  + NPM