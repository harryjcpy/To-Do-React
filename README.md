# To Do List App

This is a fully functional To-Do List application built using React. The app allows users to add, manage, and delete tasks easily. It features a clean and responsive design, leveraging Bootstrap components for styling, and integrates various React hooks for state management, including useReducer and useContext.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features
- **Add Tasks**: Users can quickly add tasks to their to-do list with an input field and "Add Task" button.
- **Delete Tasks**: Tasks can be removed from the list using a delete button next to each task.
- **Set Date**: USers can set the due date for their tasks.

## Demo
You can view a live demo of the project [here](https://main--too-doo-list-app-react.netlify.app/).

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/react-cassette-audio-player.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd To-Do List
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Start the development server:**
    ```bash
    npm run dev
    ```

The app will run locally on [http://localhost:3000](http://localhost:3000).

## Usage

1. **Add** the task that you want to accomplish.
2. **Delete** the task that has been accomplished.
3. Set **Due Date** for your tasks.

## Technologies Used
1. **React Hooks**:
   *useReducer*: Utilized for managing the complex state logic of tasks (e.g., adding, deleting, and updating tasks). This allows for cleaner and more maintainable code by centralizing state management.
   *useContext*: This hook is used to share state across different components, eliminating the need to pass props down multiple levels.
2. **Bootstrap**: This project makes use of Bootstrap components to build a responsive and visually appealing UI. Buttons, forms, and layout grids are styled using Bootstrap classes, providing a consistent look and feel across different devices.
3. **React Icons**: Icons for actions like deleting tasks are rendered using react-icons for a professional touch and to enhance user experience.
