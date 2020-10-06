import React from 'react';
function Food({favorite}){
  return <h1>I like {favorite}</h1>;
}
function App() {
  
  return (
    <div>
      hello!!
      <Food favorite="kimchi" />
    </div>);
}

export default App;
