import { useEffect, useState } from 'react';
import './App.css';
import PostList from './PostList';

function App() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
     // useEffect này sẽ chạy MỘT LẦN duy nhất sau khi component được mount (render lần đầu tiên)
    async function fetchPostList(){
      // ...
      try{
        const requestUrl='http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      console.log({responseJSON});
      
      const {data} = responseJSON;
      // cập nhật lại thì nó sẽ render lại lần nữa
      setPostList(data)
      }
      catch (error){
        console.log("Lỗi không kết nói được danh sách post",error.message);
      }
    }
    // Lúc đầu chạy đầu
    console.log('POST list effect')
    fetchPostList();
    // do Dependency array đang là rỗng nên nó chỉ chạy đúng lần đầu
  }, []); 
  // Lúc đầu chạy sau, nhưng setPostList(data) sẽ render lại nên lúc đó còn 1 mình nó thực hiện
  useEffect(() => {
    console.log('TODO list effect');
    // sau đây không có [] thì nó sẽ luôn luôn chạy mỗi lần render
  });
  return (
    <div className="App">
      <h1>React PostList</h1>
     <PostList posts={postList}/>
    </div>
  );
}

export default App;
