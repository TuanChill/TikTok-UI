import React from 'react';
import { Fragment } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import DefaultLayout from '~/layouts/DefaultLayout';
import { publicRoutes } from '~/routes';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {publicRoutes.map((route, index) => {
                let Layout = DefaultLayout;

                if (route.layout) {
                    Layout = route.layout;
                } else if (route.layout === null) {
                    Layout = Fragment;
                }

                const Page = route.component;
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Route>,
    ),
);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
