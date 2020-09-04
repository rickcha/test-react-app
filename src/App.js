import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoadingPage from "./page/loading";

const indexPage = lazy(() => import("./page/index"));
const firstPage = lazy(() => import("./page/first"));
const TopProvider = lazy(() => import("./context/top"));
const MiddleProvider = lazy(() => import("./context/middle"));
const BottomProvider = lazy(() => import("./context/bottom"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
