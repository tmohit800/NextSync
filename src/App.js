import AppRoutes from "./Routes";
import "./styles.scss";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="header">Header</div>
        <div className="content">
          <div className="sidebar">Sidebar</div>
          <div className="section">
            <div className="section-panel">
              <AppRoutes />
            </div>
            <div className="footer">Footer</div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
