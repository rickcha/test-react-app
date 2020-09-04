import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoadingPage from "./page/loading";
import AuthProvider, { useAuth } from "./context/auth";

const indexPage = lazy(() => import("./page/index"));
const firstPage = lazy(() => import("./page/first"));
const TopProvider = lazy(() => import("./context/top"));
const MiddleProvider = lazy(() => import("./context/middle"));
const BottomProvider = lazy(() => import("./context/bottom"));

function FirstApp() {
  return (
    <TopProvider>
      <MiddleProvider>
        <BottomProvider>
          <Suspense fallback={<LoadingPage />}>
            <Switch>
              <Route exact path="/" component={indexPage} />
              <Route exact path="/first" component={firstPage} />
            </Switch>
          </Suspense>
        </BottomProvider>
      </MiddleProvider>
    </TopProvider>
  );
}

function SecondApp() {
  return (
    <TopProvider>
      <MiddleProvider>
        <BottomProvider>
          <Suspense fallback={<LoadingPage />}>
            <Switch>
              <Route exact path="/" component={indexPage} />
              <Route exact path="/first" component={firstPage} />
            </Switch>
          </Suspense>
        </BottomProvider>
      </MiddleProvider>
    </TopProvider>
  );
}

function ContainerApp() {
  const { auth } = useAuth();

  if (auth === "1") return <FirstApp />;
  return <SecondApp />;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<LoadingPage />}>
          <SecondApp />
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
