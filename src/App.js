import logo from './logo.svg';
import './App.css';
import Home from './Home/home';
import India from './India/india';
import German from './German/german';
import America from './America/america';
import Australia from './Australia/australia';
import MyFunction from './FunctionComp/myfunction';
import Student from './FunctionComp/student';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Sahana Learn React
        </a>
      </header>
      <Home></Home>
      <table align="center">
        <tr>
      <td><India></India></td>
      <td><German></German></td></tr>
      <tr>
      <td><America> </America></td>
      <td><Australia></Australia></td></tr></table>
     <MyFunction></MyFunction>
     <Student></Student>
    
    
      
    </div>
   
  );
}

export default App;
