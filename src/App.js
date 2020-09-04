import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoadingPage from "./page/loading";

const indexPage = lazy(() => import("./page/index"));
const firstPage = lazy(() => import("./page/first"));
const secondPage = lazy(() => import("./page/second"));
const FirstProvider = lazy(() => import("./context/first"));
const SecondProvider = lazy(() => import("./context/second"));
const ThirdProvider = lazy(() => import("./context/third"));

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <FirstProvider>
        <SecondProvider>
          <ThirdProvider>
            <BrowserRouter>
              <Suspense fallback={<LoadingPage />}>
                <Switch>
                  <Route exact path="/" component={indexPage} />
                  <Route exact path="/first" component={firstPage} />
                  <Route exact path="/second" component={secondPage} />
                </Switch>
              </Suspense>
            </BrowserRouter>
          </ThirdProvider>
        </SecondProvider>
      </FirstProvider>
    </Suspense>
  );
}

export default App;
