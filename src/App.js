import './App.css';

function App() {
  const handleClick = () => {
    // implementation details
  };
  
  return (
    <div className="center-image">
      <img 
      style={{
        height: 102,
        width: 102,
      }}
      src={require('./logo.png')}/>
    <div>

      <div>
        <button type="button" onClick={handleClick} className="login_button">
        Login
      </button>
      <div>
        <button type="button" onClick={handleClick} className="signup_button">
        Sign Up Test
      </button>
      </div>
  
      
      </div>
    

    </div>
      <div className='Welcome-message' >Welcome to Toggle!</div>
    </div>
    
    
    
  );

}

  
export default App;

