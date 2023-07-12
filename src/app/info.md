By default, all components created within this app folder are server components
[Learn more about server components](https://nextjs.org/docs/getting-started/react-essentials)
Server components should really be any non-interactive component, meaning the user doesn't interact with the component in a way that would change it's output. I don't think this applies to link components - this would be more like things you do in the cart that change something within their component, or other components that are effected by the change you made

# App Routing

- Folders are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the root folder down to a final leaf (Component?) folder that includes a page.js file
- Files are used to create UI that is shown for a route segment

App routing supports nested routing by nesting folders inside eachother. So app>category>pickles would define as myapp.com/category/pickles

Awesome section about [Component Hierarchy](https://nextjs.org/docs/app/building-your-application/routing#component-hierarchy) - how components are used with eachother

Only contents that are returned by page.js or route.js files are publically accessible/routable
