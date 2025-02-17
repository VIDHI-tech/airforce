import { Suspense } from "react";
import routes from "~react-pages";
import { useRoutes } from "react-router-dom";
import { ApplicationFooter } from "./layouts/application-layout";

export function App() {
  const appRoutes = useRoutes(routes);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ApplicationFooter>{appRoutes}</ApplicationFooter>
    </Suspense>
  );
}
