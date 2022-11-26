import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Main from './Main';
import './includes/css/app.css';


function App() {

return (
<Router basename="/tictactoe">
  <Routes>
    <Route path="/"exact element={<Main />} />
  </Routes>
</Router>
)};

export default App;
