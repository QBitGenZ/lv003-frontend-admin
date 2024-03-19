import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import ProductManagement from "./pages/ProductManagement";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/admin' element={<App />}></Route>
            <Route path='/admin/dashboard' element={<Dashboard />}></Route>
            <Route
                path='/admin/user-management'
                element={<UserManagement />}></Route>
            <Route
                path='/admin/category-management'
                element={<Dashboard />}></Route>
            <Route
                path='/admin/product-management'
                element={<ProductManagement />}></Route>
            <Route
                path='/admin/order-management'
                element={<Dashboard />}></Route>
            <Route
                path='/admin/post-management'
                element={<Dashboard />}></Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
