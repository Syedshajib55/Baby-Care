import React from 'react';
import { Switch, Route, NavLink, useHistory, useRouteMatch } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import './Dashboard.css'
import Review from './Review/Review';

const Dashboard = () => {
    const { admin, logOut } = useAuth()
    // console.log(admin);
    let { path, url } = useRouteMatch();
    const history = useHistory()

    const handleLogOut = () => {
        const confirmLogOut = window.confirm('Are you sure to log out?')
        if (confirmLogOut) {
            logOut()
            history.replace('/')
        }
    }
    return (
        <div>
            <div className="md:container md:mx-auto px-5 lg:px-0 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                    <ul className='lg:mt-8 mt-0 text-center lg:text-left'>
                        <li>
                            {admin ? <div>
                                <NavLink activeClassName='active' className='lg:block mr-5 lg:mr-0 font-semibold mb-2 text-lg' to={`${url}/manage-orders`}>Manage Orders</NavLink>
                                <NavLink activeClassName='active' className='lg:block mr-5 lg:mr-0 font-semibold mb-2 text-lg' to={`${url}/manage-all-products`}>Manage Products</NavLink>
                                <NavLink activeClassName='active' className='lg:block mr-5 lg:mr-0 font-semibold mb-2 text-lg' to={`${url}/add-product`}>Add Product</NavLink>
                                <NavLink activeClassName='active' className='lg:block mr-5 lg:mr-0 font-semibold mb-2 text-lg' to={`${url}/make-admin`}>Make Admin</NavLink>
                                <button className='font-semibold underline' onClick={handleLogOut}>Log Out</button>
                            </div> :
                                <div>
                                    <NavLink activeClassName='active' className='lg:block mr-5 lg:mr-0 font-semibold mb-2 text-lg' to={`${url}/my-orders`}>My Orders</NavLink>
                                    <NavLink activeClassName='active' className='lg:block mr-5 lg:mr-0 font-semibold mb-2 text-lg' to={`${url}/review`}>Review</NavLink>
                                    <NavLink activeClassName='active' className='lg:block mr-5 lg:mr-0 font-semibold mb-2 text-lg' to={`${url}/payment`}>Payment</NavLink>
                                    <button className='font-semibold underline' onClick={handleLogOut}>Log Out</button>
                                </div>
                            }
                        </li>
                    </ul>
                    <div className='col-span-6'>
                        <Switch>
                            <Route exact path={path}>
                                {admin && (<ManageOrders />)}
                                {!admin && (<MyOrders />)}
                            </Route>
                            <AdminRoute exact path={`${path}/manage-orders`}>
                                <ManageOrders></ManageOrders>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/manage-all-products`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/add-product`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/make-admin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            {/* uporrer sob admin hobe */}
                            <Route exact path={`${path}/my-orders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route exact path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;