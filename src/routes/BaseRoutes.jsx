import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "../components/Login/Login";
import Products from "../components/Products/Products";
import Comments from "../components/Users/Comments";
import Post from "../components/Users/Post";
import UserComponent from "../components/Users/UserComponent";
import Users from "../components/Users/Users";
import Sidebar from "../layouts/menu/Sidebar"
import ProtectedRoute from "./ProtectedRoute";
export default function BaseRoutes() {
   const location = useLocation();
   const renderHeaderSidebarComponent = () => {
      if (!(location.pathname == "/")) {
         return (
            <>
               {/* <Header /> */}
               <Sidebar {...location} />
               {/* <Footer /> */}
            </>
         );
      }
   };

   return (
      <>
         {renderHeaderSidebarComponent()}

         {/* <SidebarMenu /> */}


         <Routes>
            <Route path="/" element={<Login />} />
     
            <Route element={<ProtectedRoute />}>
               <Route path="/products" element={<Products />} />
               <Route path="/users" element={<UserComponent />}>
                  <Route path="user" element={<Users />} />
                  <Route path="post" element={<Post />} />
                  <Route path="comments" element={<Comments />} />
               </Route>
               <Route path="*" element={<div>page not found</div>} />
            </Route>
         </Routes>

      </>
   );
}
