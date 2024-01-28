import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { router } from "./constants/routesConfig";
import store from "./store";
import { ThemeProvider } from "./components";
import { makeServer } from "./mirage";

makeServer();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
