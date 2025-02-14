import { Suspense } from "react";
import routes from "~react-pages";
import { useLocation, useRoutes } from "react-router-dom";
import DefaultLayout from "./layouts/app-layout";

export function App() {
  const appRoutes = useRoutes(routes);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {appRoutes}
    </Suspense>
  );
}


// import { Suspense } from "react";
// import routes from "~react-pages";
// import { useRoutes } from "react-router-dom";
// import DefaultLayout from "./layouts/app-layout";

// export function App() {
//   const appRoutes = useRoutes(routes);

//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <DefaultLayout>{appRoutes}</DefaultLayout>
//     </Suspense>
//   );
// }
