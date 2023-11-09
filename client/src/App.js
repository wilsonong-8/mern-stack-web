import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Register, Error, ProtectedRoute } from './pages';
import {
  AllAdverts,
  MyAdvert,
  ChatPage,
  SellingGuide,
  PastTransaction,
  MortgageBankers,
  PropertyAgents,
  Profile,
  Menu,
} from './pages/dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        >
          <Route index element={<AllAdverts />} />
          <Route path="/my-advert" element={<MyAdvert />} />
          <Route path="/chat-page" element={<ChatPage />} />
          <Route path="/past-transaction" element={<PastTransaction />} />
          <Route path="/selling-guide" element={<SellingGuide />} />
          <Route path="/mortgage-banker" element={<MortgageBankers />} />
          <Route path="/property-agent" element={<PropertyAgents />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
