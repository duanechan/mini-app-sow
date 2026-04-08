import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import Login from "./pages/Login.jsx";
import PriceList from "./pages/PriceListPage.jsx";

const queryClient = new QueryClient();

const rootRoute = createRootRoute();
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});
const priceListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/price-list",
  component: PriceList,
});

const routeTree = rootRoute.addChildren([loginRoute, priceListRoute]);
const router = createRouter({ routeTree });

function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </main>
  );
}

export default App;
