import "./App.css";
import Navbar from "./Page/Navbar";
import Home from "./Page/Home";
import { Route, Routes } from "react-router-dom";
import Listplanet from "./Page/List/Listplanet";
import Listpeople from "./Page/List/Listpeople";
import Liststarship from "./Page/List/Liststarship";
import Detailpeople from "./Page/Detail/Detailpeople";
import Detailplanet from "./Page/Detail/Detailplanet";
import Detailship from "./Page/Detail/Detailship";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-planet" element={<Listplanet />} />
          <Route path="/list-people" element={<Listpeople />} />
          <Route path="/list-ship" element={<Liststarship />} />
          <Route path="/detail-planet" element={<Detailplanet />} />
          <Route path="/detail-people" element={<Detailpeople />} />
          <Route path="/detail-ship" element={<Detailship />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
