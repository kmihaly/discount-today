import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CSpinner } from "@coreui/react";

import { ErrorBoundary } from "./components";

import "./scss/style.scss";

const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const LandingPage = React.lazy(() => import("./views/LandingPage/LandingPage"));
const GoodForYouPage = React.lazy(() => import("./views/GoodForYouPage/GoodForYouPage"));
const SearchPage = React.lazy(() => import("./views/SearchPage/SearchPage"));
const ImpressumPage = React.lazy(() => import("./views/ImpressumPage/ImpressumPage"));
const ContactPage = React.lazy(() => import("./views/ContactPage/ContactPage"));
const PrivacyPolicyPage = React.lazy(() => import("./views/PrivacyPolicyPage/PrivacyPolicyPage"));
const Page404 = React.lazy(() => import("./views/Page404/Page404"));
const Page500 = React.lazy(() => import("./views/Page500/Page500"));

const App = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="good-for-you" element={<GoodForYouPage />} />
            <Route
              path="search"
              element={
                <Suspense
                  fallback={
                    <div>
                      <CSpinner />
                    </div>
                  }
                >
                  <SearchPage />
                </Suspense>
              }
            />
            <Route path="impressum" element={<ImpressumPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          <Route path="404" element={<Page404 />} />
          <Route path="500" element={<Page500 />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
