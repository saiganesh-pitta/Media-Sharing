import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import LeftSideBar from "./components/Leftsidebar";
import PostListProvider from "./Store/Store-posts";
import { Route, Routes } from "react-router-dom";
import PostListData from "./components/PostListData";
import CreatePost from "./components/CreatPost";
import Fetching from "./components/Fetching";
import Header from "./components/Header";


function App() {
  return (
    <PostListProvider>
      <div className="display">
        <div className="left-container">
          <LeftSideBar></LeftSideBar>
        </div>
        <div id="rigth-cont" className="right-container">
          <Header></Header>
           <Routes>
            <Route path="/"  element={<PostListData/>}/>
            <Route path="/Creat-Post"  element= {<CreatePost/>}/>
            <Route path="/Fetch"  element= {<Fetching/>} />
           </Routes>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}
export default App;
