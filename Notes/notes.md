
Props Drilling -> Passing props from one component to another and to grandchild -> avoid
To manage large data use Redux/NGRX
There are cons -> Complex to setup/ Too much boiler plate
To modify the redux store we dispatch an action which in turn calls the reducer and that updates the store

<h1>React Router DOM</h1>

CreateBrowserRouter is a function which creates a router and takes in a configuration.
Create Routing Configuration
```
const appRouter = createBrowserRouter([
{
  path: "/",
  element: <AppLayout />,
  errorElement: <Error />
  children:[
  {
  path: "/about",
  element: <About />,
  }
  {
  path: "/contact",
  element: <Contact />,
  }
  
  {
  path: "/restaurant/:id",
  element: <Menu />,
  }
  
  ]

])
```
 RouterProvider is a component. In root.render pass the Browswer Router config
 
 ```
 root.render(<RouterProvider router={appRouter}/>)
 ```
 
 useRouterError is a Hook which gives more information about the error on the page for Routing
 
Client Side Routing and Server Side Routing
Server side routing, all the pages come from a server
In older times, send HTML pages.

In Client Side Routing, we dont want to load anything from the server.
If you add anchor tag for routing, the whole page reloads, instead React Router gives us Link and instead of 'href' use 'to'. 

Outlet is a Component which will be filled with Children configuration

Dynamic Routing
useParams is a hook which is a function which gives us the parameters from url which can be used for dynamic routing

<h1>LifeCycle Methods</h1>

The component lifecycle has three distinct lifecycle phases:

Mounting: The component is ready to mount in the browser DOM. This phase covers initialization from constructor(), getDerivedStateFromProps(), render(), and componentDidMount() lifecycle methods.

Updating: In this phase, the component gets updated in two ways, sending the new props and updating the state either from setState() or forceUpdate(). This phase covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate() lifecycle methods.

Unmounting: In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes componentWillUnmount() lifecycle method.

It's worth mentioning that React internally has a concept of phases when applying changes to the DOM. They are separated as follows

Render The component will render without any side effects. This applies to Pure components and in this phase, React can pause, abort, or restart the render.

Pre-commit Before the component actually applies the changes to the DOM, there is a moment that allows React to read from the DOM through the getSnapshotBeforeUpdate().

Commit React works with the DOM and executes the final lifecycles respectively componentDidMount() for mounting, componentDidUpdate() for updating, and componentWillUnmount() for unmounting.

<img width="1263" alt="lifecycle" src="https://user-images.githubusercontent.com/34294833/220131531-c3d94d1c-c944-4577-8c3c-99fd295847ea.png">

<img width="1263" alt="lifecycle" src="https://user-images.githubusercontent.com/34294833/220156975-834e690a-3eb4-41b8-ac17-449e71309fad.png">

<h2>What is the recommended ordering of methods in component class?</h2>
Recommended ordering of methods from mounting to render stage:

static methods
constructor()
getChildContext()
componentWillMount()
componentDidMount()
componentWillReceiveProps()
shouldComponentUpdate()
componentWillUpdate()
componentDidUpdate()
componentWillUnmount()
click handlers or event handlers like onClickSubmit() or onChangeDescription()
getter methods for render like getSelectReason() or getFooterContent()
optional render methods like renderNavigation() or renderProfilePicture()
render()


What are Pure Components?
React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called. In functional components we use React.memo() API. React.memo() is a higher-order component. It takes a React component as its first argument and returns a special type of React component that allows the renderer to render the component while memoizing the output. Therefore, if the component’s props are shallowly equal, the React.memo() component will bail out the updates.

What is React Fiber?
Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

⬆ Back to Top

What is the main goal of React Fiber?
The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

from documentation

Its main goals are:

Ability to split interruptible work in chunks.
Ability to prioritize, rebase and reuse work in progress.
Ability to yield back and forth between parents and children to support layout in React.
Ability to return multiple elements from render().
Better support for error boundaries.


What are controlled components?
A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function.

For example, to write all the names in uppercase letters, we use handleChange as below,
```
handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()})
}
```


What are uncontrolled components?
The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

In the below UserProfile component, the name input is accessed using ref.
```
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {"Name:"}
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
In most cases, it's recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
 
<h1>What are Higher-Order Components?</h1>
A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.

const EnhancedComponent = higherOrderComponent(WrappedComponent);
HOC can be used for many use cases:

Code reuse, logic and bootstrap abstraction.
Render hijacking.
State abstraction and manipulation.
Props manipulation.
 

