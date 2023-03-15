import { useQuery } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getTodos } from "../api/Api";
import Footer from "../components/commen/Footer";
import TDDetail from "../pages/TDDetail";
import TDLists from "../pages/TDLists";
import TDMain from "../pages/TDMain";
import TDWrite from "../pages/TDWrite";

const Router = () => {
  const {isLoading, isError, data} = useQuery("todos", getTodos)  

  if(isLoading) {
    return <div>로딩 중...</div>
  }
  
  if(isError) {
    return <div> 오류가 발생했습니다.</div>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TDMain data={data}/>} />
        <Route path="/todoWrite" element={<TDWrite/>} />
        <Route path="/todolists" element={<TDLists data={data}/>}/>
        <Route path="/todolists/:id" element={<TDDetail data={data}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default Router;