import { Navigate, Route, Routes } from "react-router-dom"
import { lazy } from "react"
import LazySuspense from "./components/LazySuspense"
const LazySignIn = lazy(()=> import("./pages/user/SignIn"))
const LazySignUp = lazy(()=> import("./pages/user/SignUp"))
const LazyForgotPassword = lazy(()=> import("./pages/user/ForgotPassword"))
const LazyUserMain = lazy(() => import("./pages/user/Main"))
const LazyHome = lazy(()=> import("./pages/user/Home"))
const LazyAdminMain = lazy(() => import("./pages/admin/Main"))
const LazyDashboard = lazy(() => import("./pages/admin/Dashboard"))
const LazyAuthMain = lazy(() => import("./pages/auth/Main"))
const LazyLandingPage = lazy(() => import("./pages/landing/LandingPage"))
const LazyViewBoat = lazy(() => import("./pages/user/ViewBoat"))
const LazyBookMyTicket = lazy(() => import("./pages/user/BookMyTicket"))


const UserRoutes = () => {
  return (
    <LazyUserMain>
      <Routes>
        <Route path="/home" element={<LazySuspense component={LazyHome}/>}/>
        <Route path="/forgotpassword" element={<LazySuspense component={LazyForgotPassword}/>}/>
        <Route path="/signin" element={<LazySuspense component={LazySignIn}/>}/>
        <Route path="/signup" element={<LazySuspense component={LazySignUp}/>}/>
        <Route path="/bookmyticket" element={<LazySuspense component={LazyBookMyTicket}/>}/>
        <Route path="/viewboat" element={<LazySuspense component={LazyViewBoat}/>}/>
      </Routes>
    </LazyUserMain>
  )
}
const AuthRoutes = () => {
  return (
    <LazyAuthMain>
      <Routes>
        {/* <Route path="/landingpage" element={<LazySuspense component={LazyLandingPage}/>}/> */}
      </Routes>
    </LazyAuthMain>
  )
}


const AdminRoutes = () => {
  return (
    <LazyAdminMain>
      <Routes>
        <Route path="/dashboard" element={<LazySuspense component={LazyDashboard}/>}/>
      </Routes>
    </LazyAdminMain>
  )
}

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/landing"/>}/>
      {/* <Route path="/landingpage" element={<LazySuspense component={LazyLandingPage}/>}/> */}
      <Route exact path="/landingpage" element={<LazySuspense component={LazyLandingPage}/>}/>

      
      <Route path="/forgot-password" element={<LazySuspense component={LazyForgotPassword}/>}/> 
      <Route path="/user/*" element={<LazySuspense component={UserRoutes}/>}/>
      <Route path="/admin/*" element={<LazySuspense component={AdminRoutes}/>}/>
      <Route path="/auth/*" element={<LazySuspense component={AuthRoutes}/>}/>
    </Routes>
  )
}

export default App
