# DevStack Technology Explorer

A modern, responsive React application that helps developers explore popular web technologies and build a personalized technology stack. Users can browse technologies, view their details, and add or remove technologies from their stack.

## Technologies Used in the Project

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- JSON
- Vite

## Features of the Project

- **Explore Modern Technologies:**  Discover a curated collection of popular technologies, frameworks, languages, databases, and developer tools with essential details and difficulty levels.
- **Build a Personalized Tech Stack:**  Select and organize technologies into a personal stack, with the ability to add or remove items dynamically.
- **Responsive & Interactive Experience:**  Enjoy a clean, modern interface designed for different screen sizes, with interactive cards, dynamic styling, and real-time feedback.

## What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. React uses JSX to make it easier to describe what the UI should look like.

## What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time and update the UI.
For example, this project receives technology information through props and manages the user’s selected stack using state.

## What does the useState hook do, and where did you use it in this project?

useState allows a React component to store and update data.

In this project, I used it to manage the technologies added to the user's stack:
```
const [addedStack, setAddedStack] = useState<ITechType[]>([]);```

When a technology is added or removed, setAddedStack updates the state, and React re-renders the UI.

## What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect lets us run side effects after a component renders, such as fetching data from an API or JSON file.

We need useEffect to load JSON data because the JSON file is fetched asynchronously after the component renders.

useEffect is used to perform side effects such as fetching data.

## Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. It helps React understand which items were added, removed, or changed.

For example:
```
{technologies.map(technology => ( <TechnologyCard key={technology.id} technology={technology} /> ))}
```
Using a unique ID is better than using the array index because the list can change.

## What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means displaying different UI depending on a condition.

For example, the stack displays an empty message when there are no technologies:
```
{addedStack.length === 0 ?
( <p>Your stack is empty.</p> ) : 
( <StackGrid technologies={addedStack} /> )
}
```
So, if the stack is empty, the user sees a message. Otherwise, the selected technologies are displayed.

## How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props.

Example:
```
<TechnologyCard technology={technology} />
```

The child can send information back by receiving a callback function from the parent as a prop.

For example:
```
<TechnologyCard
    technology={technology}
    setAddedStack={setAddedStack}
/>
```

The child can then call setAddedStack() to update the parent's state.

This allows the parent and child components to communicate while keeping the state in the appropriate component.



