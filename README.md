# Pixel Diner Deluxe

A retro arcade restaurant game that runs in your browser. Customers sit down and order food, you build the dishes from ingredients and serve them before their patience runs out. Miss too many and it's game over.

No frameworks, no build step, no dependencies. The whole game is one HTML file.

## Features

- **Retro arcade look:** pixel-art food and customers, CRT scanlines, chiptune sound effects and music
- **3 difficulties:** Easy, Medium and Hard, each with its own hi-score
- **16 ingredients and 9 dishes**, plus 2 power-ups
- **11 customer types**, each with their own patience and payout
- **Combos, PERFECT bonuses, level-ups** and extra tables that unlock as you play
- **2 hold slots** for saving finished dishes
- **Pause with `Esc`**, and the game pauses automatically if you switch tabs
- **Recipe book sidebar** that highlights recipes matching what's on your plate
- **Anti-cheat** with a "Dirty Little Cheater" lock screen (see below)

## How to play

1. Tap ingredients to build a plate (up to 3).
2. When the dish name appears, tap the customer who ordered it.
3. Serve quickly. Faster service scores more.
4. Customers who run out of patience storm off and cost you a heart. Lose them all and the game ends.

| Action | How |
| --- | --- |
| Add ingredient | Tap an ingredient button |
| Serve | Tap the customer |
| Save a dish | Press **HOLD** (2 slots). Tap a held dish to select it, then tap a customer |
| Throw away | Press **TRASH** |
| Pause / resume | `Esc` or the **MENU** button |

### Scoring

- Base 100 points plus up to 150 for speed
- **PERFECT** (+50) if you serve within the first 30% of a customer's patience
- **Combo** multiplier up to x5 for serving in a row (a mistake resets it)
- VIP customers and harder difficulties multiply the total

### Progression

- Every 5 customers fed raises the level
- New tables unlock at levels 3 and 5 (up to 6 tables)
- More dishes get ordered as the level rises
- From level 4, some customers order **2 dishes** and wait a bit longer

## Difficulty

| | Hearts | Customer patience | Rush speed | Score |
| --- | --- | --- | --- | --- |
| Easy | 5 | Long | Slow | x1 |
| Medium | 3 | Normal | Normal | x1.5 |
| Hard | 2 | Short | Fast | x2 |

## Recipes

Ingredient order doesn't matter.

| Dish | Ingredients |
| --- | --- |
| Fries | potato |
| Hot dog | bun + sausage |
| Ramen | noodle + egg |
| Sushi | rice + fish |
| Egg rice | rice + egg |
| Burger | bun + patty + lettuce |
| Pizza | dough + cheese + tomato |
| Cheeseburger | bun + patty + cheese |
| Sundae | ice + cream + cherry |
| **Cake** (power-up) | dough + cream + cherry: adds 6 seconds to every waiting customer |
| **Shake** (power-up) | cocoa + ice: freezes everyone's patience for 4 seconds |

Nobody orders the power-ups. Make one and press the pink button that appears.

## Customers

| Type | Notes |
| --- | --- |
| Normal, Girl, Cap | Regular customers |
| Shades | VIP, pays 1.5x |
| Kid | Loses patience fast |
| Granny | Very patient |
| Punk | A little fussy |
| Nerd | Calm and careful |
| Alien | Gets cranky |
| Ninja | Vanishes fast, pays 2x |
| King | Royal tipper, pays 2x |
