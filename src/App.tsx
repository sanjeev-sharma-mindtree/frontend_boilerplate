import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./features/common/index.css"
const HomeView = React.lazy(() => import('./features/common/HomeView'))
const CampaignView = React.lazy(() => import('./features/campaign/CampaignView'))
const CampaignDetailsView = React.lazy(() => import('./features/campaign/CampaignDetailsView'))
const IncentiveView = React.lazy(() => import('./features/incentive/IncentiveView'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
    children: [
      {
        path: '/',
        element: <CampaignView />,
      },
      {
        path: '/campaign/:campaignID',
        element: <CampaignDetailsView/>
      },
      {
        path: '/incentive',
        element: <IncentiveView />,
      },
    ]
  }
]);

function App() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
