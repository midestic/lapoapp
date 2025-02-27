import {
  createBrowserRouter,
  createRoutesFromElements,
  NavLink,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import DashboardDisplay from "./displays/dashboard/DashboardDisplay";

import CardProfile from "./displays/cardProfile/CardProfile";
import CreateProfile from "./displays/createProfile/CreateProfile";
import RequestCard from "./displays/requestCard/RequestCard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<DashboardDisplay />} />
      <Route path="cardrequest" element={<RequestCard />} />
      <Route path="cardprofile" element={<CardProfile />} />
      <Route path="createprofile" element={<CreateProfile />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
