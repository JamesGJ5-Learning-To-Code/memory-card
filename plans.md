# From TOP:

1. Think about:
    a) The features to be implemented
    b) The components needed
    c) How to structure the application

2. Application should include:
    a) Functional components and hooks
    b) A scoreboard for counting the current score
    c) A scoreboard for counting the high score
    d) Cards to display:
        i) Images
        ii) Any desired informational text
    e) A function that displays cards ina  random order after a card is clicked
        - Invoke this function when the component mounts

# DONE Static version of app:

- App Component:
    -- DONE Renders a MemoryGame component, passing into it an array of valid src's for images to be used in the game's cards

- MemoryGame Component:
    -- DONE Renders a Deck component, passing into it the array of image src's via props
    -- DONE Renders a CurrentScore component
    -- DONE Renders a HighScore component

- Deck component:
    -- DONE Renders a Card component for each src in the aforementioned array in the same order as in the array, passing the src into it via props

- Card component:
    -- DONE Renders a div with an img (whose src is one from the aforementioned array) inside it

- CurrentScore component:
    -- DONE Renders a div for displaying the current score, currently with just 'Current Score: ' as its text content

- HighScore component:
    -- DONE Renders a div for displaying the high score, currently with just 'High Score: ' as its text content

# Interactive version of app:

States:

- Array of src values of images to populate the Cards in the same order as they appear in the array (state called imagesInOrder):
    -- Affected by:
        --- Clicking an image (randomises the array)
    -- Affects:
        --- Each Card, specifically in terms of which image it shows
    -- Common "ancestor" of affecters and affected:
        --- Deck

- Set of src values of images already clicked in current round (state called imagesClickedThisRound):
    -- Affected by:
        --- Clicking an image that has not been clicked in this round (adds an src into the set via set.add)
        --- Clicking an image that has already been clicked in this round (empties the set via set.clear)
    -- Affects:
        --- Text content of the CurrentScore's div.CurrentScore (using set.size)
        --- highScore state (when set.size exceeds highScore, highScore is increased to it)
    -- Common "ancestor" of affecters and affected:
        --- MemoryGame

- High score achieved in game (state called highScore):
    -- Affected by:
        --- imagesClickedThisRound.length being higher than highScore (highScore is increased to imagesClickedThisRound.length)
    -- Affects:
        --- Text content of HighScore's div.HighScore
    -- Common "ancestor" of affecters and affected:
        --- MemoryGame