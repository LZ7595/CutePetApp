import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@/pages/home";
import About from "@/pages/home/about";
import Mine from "@/pages/home/mine";
import HomeIndex from "@/pages/home/homeIndex";
import Login from "@/pages/login";
import Register from "@/pages/register";
import Foster from "@/pages/foster";
import FosterIndex from "@/pages/foster/fosterIndex";
import StoreDetails from "@/pages/foster/storeDetails";
import FosterReservation from "@/pages/foster/reservation";
import AddAnimal from "@/pages/mix/addAnimal";
import Order from "@/pages/mix/order";
import Pay from "@/pages/mix/pay";
import Beauty from "@/pages/beauty";
import BeautyIndex from "@/pages/beauty/beautyIndex";
import ProductDetails from "@/pages/beauty/productDetails";
import BeautyReservation from "@/pages/beauty/reservation";
import SelectNurse from "@/pages/beauty/selectNurse";
import NurseDetails from "@/pages/mix/nurseDetails";
import Medical from "@/pages/medical";
import MedicalIndex from "@/pages/medical/medicalIndex";
import SymptomDetails from "@/pages/medical/symptomDetails";
import HospitalDetail from "@/pages/medical/hospitalDetail";
import Wiki from "@/pages/wiki";
import WikiIndex from "@/pages/wiki/wikiIndex";
import WikiDetails from "@/pages/wiki/wikiDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/home" replace />,
    },
    {
        path: "home",
        element: <Home />,
        children: [
            {
                path: "",
                element: <HomeIndex />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "mine",
                element: <Mine />,
            },
        ],
    },
    {
        path: "foster",
        element: <Foster />,
        children: [
            {
                path: "",
                element: <FosterIndex />,
            },
            {
                path: "storeDetails/:storeId",
                element: <StoreDetails />,
            },
            {
                path: "reservation/:storeId",
                element: <FosterReservation />,
            }
        ],
    },
    {
        path: "beauty",
        element: <Beauty />,
        children: [
            {
                path: "",
                element: <BeautyIndex />,
            },
            {
                path: "productDetails/:productId",
                element: <ProductDetails />,
            },
            {
                path: "reservation/:productId",
                element: <BeautyReservation />,
            },
            {
                path: "selectNurse",
                element: <SelectNurse />,
            },

        ],
    },
    {
        path: "medical",
        element: <Medical />,
        children: [
            {
                path: "",
                element: <MedicalIndex />,
            },
            {
                path: "symptom/:symptomId",
                element: <SymptomDetails/>,
            },
            {
                path: "advice",
                element: <h1>咨询</h1>,
            },
            {
                path: "hospitalDetail/:hospitalId",
                element: <HospitalDetail/>,
            },
        ],
    },
    {
        path: "wiki",
        element: <Wiki/>,
        children: [
            {
                path: "",
                element: <WikiIndex/>,
            },
            {
                path: "wikiDetails/:wikiId",
                element: <WikiDetails />,
            },
        ],
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "addAnimal",
        element: <AddAnimal />,
    },
    {
        path: "order/:orderId",
        element: <Order />
    },
    {
        path: "pay/:orderId",
        element: <Pay />
    },
    {
        path: "nurseDetails/:nurseId",
        element: <NurseDetails/>,
    },
    // 独立的 about 子路由
    {
        path: "about",
        element: <About />,
        children: [
            {
                path: "",
                element: <h1>关注(默认页)</h1>,
            },
            {
                path: "referral",
                element: <h1>推荐</h1>,
            },
            {
                path: "dynamic",
                element: <h1>动态</h1>,
            },
            {
                path: "publish",
                element: <h1>发表</h1>,
            },
            {
                path: "search",
                element: <h1>搜索</h1>,
            },
        ],
    },
    // 独立的 mine 子路由
    {
        path: "mine",
        element: <Mine />,
        children: [
            {
                path: "",
                element: <h1>我的主页</h1>,
            },
            {
                path: "myDetails",
                element: <h1>我的详情</h1>,
            },
            {
                path: "myOrder",
                element: <h1>我的订单</h1>,
            },
            {
                path: "message",
                element: <h1>消息</h1>,
            },
            {
                path: "likedRecords",
                element: <h1>被点赞记录</h1>,
            },
            {
                path: "profileSettings",
                element: <h1>账号设置</h1>,
            },
            {
                path: "setting",
                element: <h1>设置</h1>,
            },
            {
                path: "issue",
                element: <h1>问题</h1>,
            },
        ],
    },
]);

export default router;