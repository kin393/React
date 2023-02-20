
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


<img width="1263" alt="lifecycle" src="https://user-images.githubusercontent.com/34294833/220131531-c3d94d1c-c944-4577-8c3c-99fd295847ea.png">


What are Pure Components?
React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called. In functional components we use React.memo() API. React.memo() is a higher-order component. It takes a React component as its first argument and returns a special type of React component that allows the renderer to render the component while memoizing the output. Therefore, if the component’s props are shallowly equal, the React.memo() component will bail out the updates.
 
 
 

