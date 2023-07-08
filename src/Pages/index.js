import IndexLayout from "../Layouts/IndexLayout";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Destinations from "./Destinations/Destinations";
import PageDetail from "./PageDetail/PageDetail";
import VerifiAcount from "./VerifiAcount/VerifiAcount";
import Faqs from "./Faqs/Faqs";
import BlogPage from "./BlogPage/BlogPage";
import SellerForm from "./SellerForm/SellerForm";
import DestinosFormPage from "./DestinosFormPage/DestinosFormPage";
import AdminDestinos from "../Components/AdminDestinos/AdminDestinos";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexLayout />,

    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/destinos",
                element: <Destinations />,
            },
            {
                path: "/details/:id",
                element: <PageDetail />,
            },
            {
                path: "/users/verify/:verify_code",
                element: <VerifiAcount />,
            },
            {
                path: "/signout",
                element: <IndexLayout />, //Revisar despues je
            },
            {
                path: "/faqs",
                element: <Faqs />,
            },
            {
                path: "/Blog",
                element: <BlogPage />,
            },
            {
                path: "/sellers",
                element: <SellerForm />,
            },
            {
                path: "/new/destinos",
                element: <DestinosFormPage />,
            },
            {
                path: "/destinos/:id",
                element: <AdminDestinos />,
            },
        ],
    },
]);
