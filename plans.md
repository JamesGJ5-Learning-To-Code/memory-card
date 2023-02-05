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

# Static version of app:

- App Component:
    -- Renders a Game component, passing into it an array of valid src's for images to be used in the game's cards

- Game Component:
    -- Renders a Deck component
    -- Renders a CurrentScore component
    -- Renders a HighScore component

- Deck component:
    -- Renders a Card component for each src in the aforementioned array in the same order as in the array

- Card component:
    -- Renders a div with an img (whose src is one from the aforementioned array) inside it

- CurrentScore component:
    -- Renders a div for displaying the current score, currently with just 'Current Score: ' as its text content

- HighScore component:
    -- Renders a div for displaying the high score, currently with just 'High Score: ' as its text content