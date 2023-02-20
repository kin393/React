
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




 
 
 

