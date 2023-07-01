# class_based

This App is a React application that allows you to search for users and display their information. It demonstrates the usage of React concepts such as context, components, state, and error handling.

## Features

- Search for users based on their name
- Toggle the visibility of the user list
- Error boundary to handle any errors that occur within components

## Technologies Used

- React
- CSS

## Getting Started

This app can be accessed through any mordern browser.

## Usage

1. Open the application in your browser.
2. Use the search input to search for users by name.
3. Click the "Hide Users" button to toggle the visibility of the user list.
4. If any errors occur, the app will display an error message.

## Class-Based Components in React
In React, class-based components  are a way of creating components using ES6 classes. Prior to the introduction of functional components with hooks in React 16.8, class-based components were the primary way of creating reusable UI components.

In a class-based component, you define a class that extends the `Component` class provided by React. The component's functionality is defined within the class methods, such as **render()** which returns the component's JSX structure. 

Class-based components have their own lifecycle methods, such as **componentDidMount()**, **componentDidUpdate()** and **componentWillUnmount()**, which allow you to perform actions at specific stages of the component's lifecycle. 

## Life Cycle Methods in Class-Based Components

1. **componentDidMount()**: This method is invoked immediately after a component is mounted (i.e., inserted into the DOM). It is commonly used to perform initialization tasks, such as fetching data frpm an API, subscribing to event listeners, or setting up timers. It is a good place to start asynchronous operations that will update the component's state.

2. **componentDidUpdate(prevProps, prevState)**: This method is called immediately after an update to the component's state or props. It is called for the initial render. It provides access to the previous props and state via the parameters `prevProps` and `prevState`. It is typically used to perform side effects based on the updated data, such as making additional API calls or updating the DOM based on changes.

3. **componentWillUnmount()**: This method is invoked immediately before a component is unmmounted(i.e., removed from the DOM). It is used to clean up resources associated with the component, such as cancelling timers, unsubscribing from event listeners, or performing any necessary cleanup operations. It is important to handle the cleanup in this method to prevent memory leaks or stale data.

## Managing state in a Class-Based Component

In a class-based component in React, state is a JavaScript object that represents the internal data of the component. State allows you to store and manage dynamic data that can be updated over time.

To define state in a class-based component, you declare a `state` property in the component's `constructor` method. The initial state is set by assigning and object to `this.state`. Here's an example:

```javascript
import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            message: "Hello"
        };
    }
    render () {
        return (
            <div>
              <p>Count: {this.state.count}</p>
              <p>Message: {this.state.message}</p>
            </div>
        );
    }
}

export default MyComponent;
```

To access the state withing the component's `render` method, you can use `this.state` followed by the property name. 

To update the component's state use the `setState()` method. This method is provided by the `Component` class, which is the component extends.

The `setState()` method allows you to update specific properties of the component's state by merging the new values with the existing state. It also triggers a re-rendering of the component and its child components with the update. Here's an example:

```javascript
import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    getCount(){
        this.setState({
            count: this.state.count + 1
        });
    }

    render () {
        return (
            <div>
              <p>Count: {this.state.count}</p>
              <button onClick={this.getCount.bind(this)} >Increment</button>
            </div>
        );
    }
}

export default MyComponent;
```

It's important to note that when updating state using `setState()`, React batches multiple state updates into a single update for performance reasons. Therefore, if you need to update the state based on the previous state, it's recommended to use the functional form of `setState()`, which accepts a callback function. This ensures that you are working with the most up-to-date state values. 

Here's an example of updating state based on previous state using the functional form of `setState()`

```javascript
getCount(){
    this.setState((prevState) => ({
        count: prevState.count + 1
    }));
}
```

## Error Boundary

An error boundary in React is a special component that captures and handles errors that occur within its child components during rendering, lifecycle methods, or in the constructor. It helps to prevent the entire application from crashing due to unhandled error in a single component.

To create an error boundary in React, you can define a class component that implements the static method `getDerivedStateFromError()` and `componentDidCatch(error, info)`. 

You can wrap any part of your application with the `ErrorBoundary` component to cathch and handle errors. If an error occurs within the wrapped components or its descendants, the `ErrorBoundary` component will display a fallback UI instead of crashing the entire application. 

## License

This project is licensed uder the [MIT License](https://opensource.org/license/mit/).