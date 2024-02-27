import CreateCustomer from "./Components/Features/Customers/CreateCustomer";

import Customer from "./Components/Features/Customers/Customer";
import AccountOperations from "./Components/Features/Account/AccountOperations";
import BalanceDisplay from "./Components/Features/Account/BalanceDisplay";
import './App.css'
import { useSelector } from "react-redux";
// import store from "./store";



function App() {
  const fullName=useSelector((state)=>state.customer.fullName);
  return (
    <div>
      <h1>🏦 Welcome to Canara Bank ⚛️</h1>
      {
        fullName==="" ? (
          <CreateCustomer/>
        ) : (
          <>
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
          </>
        )
      }
     
    </div>
  );
}

export default App;