import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import MyAccount from './Pages/MyAccount/MyAccount';
import MyOrderPage from './Pages/MyOrder/MyOrderPage';
import MangeOrder from './Pages/Admin/ManageOrder/MangeOrder';
import Shop from './Pages/Shop/Shop';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Payment from './Pages/Dashboard/Payment/Payment';
import CreateAdmin from './Pages/Admin/MakeAdmin/CreateAdmin';
import AdminRoute from './AdminRoute/AdminRoute';
import AddProductPage from './Pages/Admin/AddProduct/AddProductPage';
import OrderPlacement from './Pages/OrderPlacement/OrderPlacement';
import ReviewPage from './Pages/Dashboard/ReviewPage/ReviewPage';
import ManageProductPage from './Pages/Admin/ManageProductPage/ManageProductPage';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Switch>


            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/shop'>
              <Shop></Shop>
            </Route>
            <Route path='/account'>
              <MyAccount></MyAccount>
            </Route>

            <PrivateRoute path='/order/:id'>
              <OrderPlacement></OrderPlacement>
            </PrivateRoute>
            <PrivateRoute path='/my-orders'>
              <MyOrderPage></MyOrderPage>
            </PrivateRoute>
            <PrivateRoute path='/payment'>
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path='/review'>
              <ReviewPage></ReviewPage>
            </PrivateRoute>

            <AdminRoute path='/admin/add-product'>
              <AddProductPage></AddProductPage>
            </AdminRoute>
            <AdminRoute path='/admin/manage-orders'>
              <MangeOrder></MangeOrder>
            </AdminRoute>
            <AdminRoute path='/admin/manage-products'>
              <ManageProductPage></ManageProductPage>
            </AdminRoute>
            <AdminRoute path='/admin/create'>
              <CreateAdmin></CreateAdmin>
            </AdminRoute>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
