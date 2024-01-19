import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutMain from "./components/ui/Layout/LayoutMain";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./context/CartProvider";



const router = createBrowserRouter([
	{
		path:"/",
		element:<LayoutMain />,
		children:[
			{index:true, element:<Home />},
			{path:"/cart", element:<Cart />}
	]
	}
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<CartProvider> 
			<RouterProvider router={router}/>
		</CartProvider>
	</React.StrictMode>
);
