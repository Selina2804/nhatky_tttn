import React, { createContext, useContext } from 'react';
// Tạo Context, mặc định là 'light'
const ThemeContext = createContext('light'); 
// Lấy giá trị từ Context
function Child() {
  const theme = useContext(ThemeContext); 
  return <div>Theme hiện tại là: {theme}</div>;
}

function App() {
  return (
    
    <ThemeContext.Provider value="dark"> {/* Cung cấp giá trị cho Context */}
      <Child />
    </ThemeContext.Provider>
  );
}

export default App;