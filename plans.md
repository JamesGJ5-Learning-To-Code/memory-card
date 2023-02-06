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

Lifecycle:

- Don't worry about making sure the props inserted by App.js don't contradict each other--leave that for when you learn about testing

- The only side effect I can think of as being relevant here is updating a global variable from inside a function. Specifically, when imagesClickedThisRound is changed (specifically, when it is increased), it should be compared with highScore to see if highScore should be updated. So, for the sake of practice using useEffect, let's create an effect that is dependent on imagesClickedThisRound that compares imagesClickedThisRound.length with highScore and updates highScore if necessary

Step-by-step plan:

1. DONE Pass initial state of imagesInOrder (an array of all the src's, just rename imgSrcList to imagesInOrder) into Deck from App via MemoryGame
2. DONE Pass initial state of imagesClickedThisRound (an empty set) into MemoryGame from App
3. Pass initial state of highScore into MemoryGame from App

4. In Deck, before mounting, set state of imagesInOrder as that passed in via props
5. In MemoryGame, before mounting, set state of imagesClickedThisRound as that passed in via props
6. In MemoryGame, before mounting, set state of highScore as that passed in via props

6. In Deck, instead of accessing the props in makeCardList, access imagesInOrder
7. In Deck, write a method that randomises the state of imagesInOrder (don't mutate the state, reassign it to a randomised version of the previous state)
8. Pass this method down to the img element in the child Card via render props to trigger when an onClick event is fired

9. Pass imagesClickedThisRound.length from MemoryGame to CurrentScore via render props, naming the attribute "currentScore"
10. In CurrentScore, display props.currentScore in the div.currentScore's text content
11. In MemoryGame, write a method called processPlayerChoice that takes an src and:
    - If it is not in imagesClickedThisRound, simply adds this src to the set via set.add
    - If it is already in imagesClickedThisRound, simply empties the set via set.clear
12. Pass this method down to the img element in the child Card via render props to trigger when an onClick event is fired and supply the src (which may be accessed via props.imgSrc)
13. In MemoryGame, write an effect that depends on imagesClickedThisRound and compares imagesClickedThisRound.length to highScore, setting the latter to the former if the former is greater than the latter

14. Pass highScore from MemoryGame to HighScore via render props, naming the attribute "highScore"
15. In HighScore, display props.highScore in the div.highScore's text content