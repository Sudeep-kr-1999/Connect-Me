import './App.css';
import ChatBox from './components/ChatBox/ChatBox';
import ChatList from './components/ChatList/ChatList';
import Navigation from './components/Navigation/Navigation';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <div className="parent-container">
          <Navigation/>
          <ChatList/>
          <ChatBox/>
      </div>
    </div>
  );
}

export default App;
