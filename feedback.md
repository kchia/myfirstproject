# Feedback

Congrats on satisfying the project requirements! Here's some feedback for you:

## Code Quality

Is the code well formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

- Code is generally well-formatted, well-named, and contains few style / quality issues. Take a look at the way I've refactored some of your code, and feel free to reach out to me directly if anything does not make sense.

- Also, make sure to remove any unused code (e.g., `console.log`) from your HTML/JS/CSS files! Also remove the `archive/`, `fortunecookie`, and `my-first` folders, since the files are no longer needed and already retained in the Git history.

- In terms of code organization in `script4.js`, I'd recommend first listing out all your selectors at the top of the script, followed by any `.addEventListener` calls, then the callback function definitions, and finally any function invocations that happen when the script is loaded.


## Technical Requirements

How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

- Your game renders in the browser with no major errors and separates concerns into distinct HTML, CSS, and JavaScript files. I was impressed that you made your game mobile-responsive!

## Creativity and Interface

Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

- The design is minimalist and clean. Consider displaying a message when the player is on the last card and tries to move to the next card.

## Functionality

Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

- The application mostly works without errors or bugs. There is a bug where if you are on the first card and click on the "Previous Card" button, an error appears in the console saying `Uncaught TypeError: Cannot read property '0' of undefined`.

## Presentation

Is there adequate documentation? Is the repository well organized and free of clutter?

- Your readme contains relevant information about the application. To make it even more informative, consider adding the live url for your game and other sections such as wireframes and installation instructions. See these examples: https://github.com/esin87/travelogue or https://github.com/esin87/StarTrek_TNG_Trivia_Game

## Additional Feedback

- Take a look at some of my inline comments on your code. You can find my comments by searching for "Hou comment:".
