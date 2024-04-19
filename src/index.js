import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import ProductManagement from "./pages/ProductManagement";
import CategoriesManagement from "./pages/CategoriesManagement";
import OrderManagement from "./pages/OrderManagement";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/user-management' element={<UserManagement />}></Route>
            <Route
                path='/category-management'
                element={<CategoriesManagement />}></Route>
            <Route
                path='/product-management'
                element={<ProductManagement />}></Route>
            <Route
                path='/order-management'
                element={<OrderManagement />}></Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
