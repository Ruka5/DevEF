import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import Post from "./components/Post";
import PostRedirect from "./components/PostRedirect";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
            {/* /post/1 */}
            <Route path='/post/:id/:name' element={<Post />} />
            <Route path='/post/*' element={<PostRedirect />} />
          </Routes>
          {/* <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </Card> */}

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

// function App() {
//   const title = "Blog Post";
//   const body = "This is my blog post";
//   const comments = [
//     { id: "1", text: "Comment one" },
//     { id: "2", text: "Comment two" },
//     { id: "3", text: "Comment three" },
//   ];

//   const loading = false;
//   const showComments = true;

//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   const commentBlock = (
//     <div className='comments'>
//       <h3>Comments({comments.length})</h3>
//       <ul>
//         {comments.map((comment, index) => (
//           <li key={index}>{comment.text}</li>
//         ))}
//       </ul>
//     </div>
//   );

//   return (
//     <div className='container'>
//       <h1>{title.toUpperCase()}</h1>
//       <p>{body}</p>
//       <br></br>
//       {Math.random() * (5 + 5)}

//       {/* ternary operation */}
//       {showComments && commentBlock}
//     </div>
//   );
// }

// import React from "react";

// function App() {
//   return React.createElement(
//     "div",
//     { className: "container" },
//     React.createElement("h1", {}, "My App")
//   );
// }
