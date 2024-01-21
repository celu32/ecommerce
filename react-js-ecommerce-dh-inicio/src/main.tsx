import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutMain from "./components/ui/Layout/LayoutMain";
import Home from "./pages/Home/Home";
import { CartProvider } from "./context/CartProvider";
import Checkout from "./pages/Checkout/Checkout";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient

const router = createBrowserRouter([
	{
		path:"/",
		element:<LayoutMain />,
		children:[
			{index:true, element:<Home />},
			{path:"/checkout", element:<Checkout />}
	]
	},
	{
		path:"/login", element:<p>login</p>,
	},
	{
		path:"/ldashboard", element:<p>dashboard</p>,
	}
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<CartProvider> 
				<RouterProvider router={router}/>
			</CartProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
