import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-sky-500 m-10 text-4xl font-bold">
          Some Required answers of your Question
        </h1>
      </div>
      <div className="mt-10 ml-10">
        <h1 className="text-2xl font-semibold text-pink-800 m-3">
          # Tell us the differences between uncontrolled and controlled
          components.
        </h1>
        <h2 className="text-xl font-medium text-blue-600 m-3">
          Ans: In React, controlled components refer to components that have
          their state and behavior controlled by the parent component. These
          components rely on props passed down from the parent component to
          update their state and behavior. Uncontrolled components refer to
          components that manage their own state internally.
        </h2>
        <h1 className="text-2xl font-semibold text-pink-800 m-3">
          # How to validate React props using PropTypes ?
        </h1>
        <h2 className="text-xl font-medium text-blue-600 m-3">
          Ans: Props and PropTypes are important mechanisms for passing
          read-only attributes between React components. We can use React props,
          short for properties, to send data from one component to another. If a
          component receives the wrong type of props, it can cause bugs and
          unexpected errors in your app. Since JavaScript does not have a
          built-in type checking solution, many developers use extensions like
          TypeScript and Flow. However, React has an internal mechanism for
          props validation called PropTypes. In this article, we will learn how
          to validate props with React PropTypes.
        </h2>
        <h1 className="text-2xl font-semibold text-pink-800 m-3">
          # Tell us the difference between nodejs and express js.
        </h1>
        <h2 className="text-xl font-medium text-blue-600 m-3">
          Ans: Javascript web application framework that provides a robust set
          of features for web and mobile applications. In other words, NodeJS is
          the package, which provides the JavaScript run-time environment,
          whereas Express is a framework that sits on top of NodeJS and helps us
          to handle requests and responses.
        </h2>
        <h1 className="text-2xl font-semibold text-pink-800 m-3">
          # What is a custom hook, and why will you create a custom hook?
        </h1>
        <h2 className="text-xl font-medium text-blue-600 m-3">
          Ans: Custom React JS hooks offer reusability as when a custom hook is
          created, it can be reused easily, which makes the code cleaner and
          reduces the time to write the code. It also enhances the rendering
          speed of the code as a custom hook does not need to be rendered again
          and again while rendering the whole code.
        </h2>
      </div>
    </div>
  );
};

export default Blog;
