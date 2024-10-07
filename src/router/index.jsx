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
import Reservation from "@/pages/mix/reservation";
import AddAnimal from "@/pages/mix/addAnimal";

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
                element: <Reservation serviceType="foster" />,
            },

            {
                path: "confirmOrder",
                element: <h1>确认订单</h1>,
            },
            {
                path: "pay",
                element: <h1>付款</h1>,
            },
        ],
    },
    {
        path: "beauty",
        element: <h1>美容</h1>,
        children: [
            {
                path: "",
                element: <h1>美容主页</h1>,
            },
            {
                path: "storeDetails/:storeId",
                element: <h1>美容店详情</h1>,
            },
            {
                path: "reservation/:storeId",
                element: <Reservation serviceType="beauty" />,
            },
            {
                path: "addAnimal",
                element: <h1>添加宠物</h1>,
            },
            {
                path: "selectNurse",
                element: <h1>选择美容师</h1>,
            },
            {
                path: "selectTime",
                element: <h1>选择时间</h1>,
            },
            {
                path: "nurseDetails",
                element: <h1>美容师详情</h1>,
            },
        ],
    },
    {
        path: "medical",
        element: <h1>医疗</h1>,
        children: [
            {
                path: "",
                element: <h1>医疗主页</h1>,
            },
            {
                path: "symptom",
                element: <h1>症状</h1>,
            },
            {
                path: "advice",
                element: <h1>咨询</h1>,
            },
            {
                path: "hospitalDetails",
                element: <h1>医院详情</h1>,
            },
        ],
    },
    {
        path: "wiki",
        element: <h1>百科</h1>,
        children: [
            {
                path: "",
                element: <h1>百科主页</h1>,
            },
            {
                path: "wikiDetails",
                element: <h1>百科详情</h1>,
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
        element: <AddAnimal/>,
    },
    {
        path: "selectAnimalType",
        element: <h1>宠物品类选择</h1>,
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