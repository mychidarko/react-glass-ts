# React Glass TS

React Glass TS is a simple react + ts boilerplate which focuses on providing a simple and pain-free developer experience. This package uses typescript, if you prefer javascript, you can get the javascript version [here](https://github.com/darko-mychi/react-glass).

## Features

### Scalable Project Structure

Although react docs say you can arrange your project in any way that feels convenient to you, there are a couple of techniques that you can emplore in your directory structure that makes scaling/working on your projects much easier. Some of these have been done by default here. Just download and you're good to go.

### Glass Router (GlassRX)

**Glass router has been published as an independent package. You can check it out [here](https://github.com/darko-mychi/glass-router)**

**Glass router's source files are available in `utils/glass/router`. You can directly modify glass router there or install the published package if your prefer.**

Glass router is a wrapper around `react-router-dom` which provides a clean and developer friendly syntax and usage for your apps.

Glass router is initialized in `src/routes.ts`. That's where you need to import your routes. Each view has a routes file in which all routes relating to that view are defined. This file is then imported in the main routes file.

```ts
import home from "./views/Home/routes";
import login from "./views/Login/routes";

const routes = [
  ...home,
  ...login,
];
```

Glass router is inspired by vue router and so uses the exact same syntax but includes `react-router` specific options like `exact` and `render`.

Route with `exact` prop

```ts
import Home from "./Home"

export default [
  {
    path: "/",
    exact: true,
    component: Home,
    name: "home",
  },
];
```

Route with `render` instead of `component`.

```ts
{
  path: "*",
  render: () => <h2>Page Not Found</h2>,
},
```

#### Routing with glass router

All routing operations can be performed on the glassrouter object no matter the component type you're using.

Just as said above, the Glass Router (GlassRX) uses a syntax fairly the same as vue-router's syntax. As such, you can simply import the router object and call the `push` method.

```ts
import { GlassRouter } from "./utils/glass/router";

return GlassRouter.push("/auth/login");
```

Just like vue-router, you can navigate to a route by passing an object instead like this:

```ts
return GlassRouter.push({ name: "login" });
```

The name here is the name given to the route when the route was defined:

```ts
{
  path: "/",
  exact: true,
  component: Home,
  name: "home",
},
```

Routing with the route name is a good practice, as it prevents repition and easily allows you to change the route path and not break your app in any way.

GlassRX also provides a simple way to route when using JSX, just as done with `react-router`

```ts
import { Link } from "./utils/glass/router";

<Link to="/home">Homepage</Link>
```

Unlike the base `react-router` link, you can also use named routes here:

```ts
<Link to={{ name: "home" }}>Homepage</Link>
```

**Check out the glassRX repo for updates.**

### GlassX

One more Vue inspired feature, GlassX is a state management solution that follows a syntax close to VueX. GlassX is based on Reactn and actually uses [reactn](https://www.npmjs.com/package/reactn) features under the hood, so after creating your glassX store, you can use `useGlobal` and all other reactn methods to mutate and read your global state.

For now, glassX just provides a clean way to break up your components states and reducers into seperate files and import them as modules just as done in VueX.

Both updating and reading your state require you to use directly use reactn as done in `src/views/Home/Home.tsx` since glassX hasn't developed those features due to performance issues.

Example state.ts

```ts
const state = {
  initial: "name",
};

export default state;
```

Example reducer.ts

```ts
export const SET_USER = (state, dispatch, payload) => ({
  user: { ...state.user, ...payload },
});
```

Example read and update state:

```tsx
import { useGlobal } from "reactn";
import { useTitle } from "../../utils/hooks";

export default function Home() {
  useTitle("Home");

  const [something, setSomething] = useGlobal("something");

  setTimeout(() => {
    setSomething("hobies");
  }, 3000);
  ...
```

**GlassX is still under development, you can check this page for updates and new features.**

### Glass Fetch (GlassFX)

Glass fetch is an http client written as a wrapper around axios. Although axios is simple and easy to use Glass fetch takes axios to an even better level with it's personalization. Axios is easy to use, but glass fx is made for your project.

Axios vs GlassFX

```ts
// axios
axios.get("BASEURL/movies").then(...)...

// GlassFX
$get("movies").then(...)...
```

After login:

```ts
// axios
const headers = {
    Authorization: `Bearer ${TOKEN}`,
};

axios.get("BASEURL/user/me", headers).then(...)...

// GlassFX
$get("user/me").then(...)...
```

All you need to do to get started with GlassFetch is configure your base URL and your token save string in `src/config/constants.ts`

```ts
export const TOKEN_STORAGE_KEY = "token";
export const USER_STORAGE_KEY = "user";
export const API_URL = "https://api.com/";
export const APP_NAME = "";
export const APP_TITLE = "";
```

## More

There are additional readme files in sub directories which give you information about the items in that sub directory.

You can go through those files for more info about the items in there.
