import type { ReactElement } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { pageLayout } from "@/app/pageLayout";
import { Home } from "@/pages/Home";
import { ErrorPage } from "@/pages/ErrorPage";

type GuestGuardProps = {
  children: ReactElement;
};

type AuthGuardProps = {
  children: ReactElement;
};

function GuestGuard({ children }: GuestGuardProps) {
  const isAuthorized = true;

  if (!isAuthorized) return <Navigate to="/login" />;

  return children;
}

function AuthGuard({ children }: AuthGuardProps) {
  const isAuthorized = false;

  if (isAuthorized) return <Navigate to="/" />;

  return children;
}

export function appRouter() {
  return createBrowserRouter([
    {
      element: pageLayout,
      errorElement: <ErrorPage />,
      loader: async () => {
        return <div>Loader</div>;
      },
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/feed",
          element: <div>feed</div>,
        },
      ],
    },
  ]);
}
