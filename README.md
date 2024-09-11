
# React Calculator

## Introduction

This is a simple calculator built using React.js. The app provides functionality for basic arithmetic operations like addition, subtraction, multiplication, and division. It supports input validation and operator precedence and includes a user-friendly interface with interactive buttons and visual feedback.

The app is structured in a modular way, making it easy to maintain and extend. This calculator is perfect for learning the basics of React state management and UI interactions.

---

## Features

- **Basic Arithmetic Operations**: Supports addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
- **Input Validation**: Prevents invalid input sequences, such as consecutive operators.
- **Operator Precedence**: Handles multiplication and division before addition and subtraction.
- **Clear and Backspace Functions**: Supports a `C` button for clearing input and a `←` button for deleting the last character.
- **Real-time Result Display**: Continuously updates the display with the current input or calculation result.
- **Visual Feedback**: Buttons provide interactive feedback on hover and press for a better user experience.
- **Responsive Design**: The app is styled to work seamlessly across different screen sizes.

---

## Project Structure

Here are some of the key files in the project:

- **`src/components/Calculator.js`**: This is the main component that handles the core logic and UI of the calculator, including input handling and result display.
  
- **`src/components/DisplayResult.js`**: A dedicated component responsible for rendering the current input and calculation result in the calculator's display area.

- **`src/utils/mathUtils.js`**: Contains utility functions for performing and evaluating mathematical operations. It includes logic to handle operator precedence and other key calculations.

- **`src/App.js`**: The main application component that integrates the Calculator component into the app.

- **`src/App.css`**: The global CSS file that provides styling for the app, including layout, button styles, and responsiveness.

---

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JiayiWu-MobilePractice/calculator-app.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd calculator-app
   ```

3. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

4. **Run the app**:
   Start the development server by running:
   ```bash
   npm start
   ```
   This will open the app in your browser at `http://localhost:3000`.

---

## Usage

Once the app is running:

1. **Performing Calculations**: Use the on-screen buttons to input numbers and operators for your calculation.
2. **Clear Input**: Press the `C` button to clear the current input.
3. **Delete Last Character**: Press the `←` button to remove the last character.
4. **Calculate**: Press the `=` button to calculate the result based on your input.
5. **View Result**: The result will be shown in the display area after each calculation.

---

## Technology Stack

- **React.js**: For building the user interface and managing component states.
- **CSS**: For styling the application, including button interactions and responsive design.
- **JavaScript (ES6+)**: For implementing the app logic, including input handling, validation, and operator precedence.
