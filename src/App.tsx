import React from 'react';
import 'antd/dist/antd.css';
import FirstForm from './components/first-form';
import CreatedForm from './components/created-form';

function App() {
  return (
    <div className="App">
      <div>表单测试

        {/* <FirstForm /> */}

        <CreatedForm />
      </div>
    </div>
  );
}

export default App;
