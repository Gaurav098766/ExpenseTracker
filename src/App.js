import { BrowserRouter, Route,Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ViewExpense from "./Pages/ViewExpense";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route path="/viewExpense" element={<ViewExpense/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
