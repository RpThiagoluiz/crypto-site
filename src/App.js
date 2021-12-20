import { Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import AppRoutes from "routes";
import { Navbar } from "components";
import "./App.css";

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <AppRoutes />
        </div>
      </Layout>

      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Cryptoverse {"\n"} All rights reserverd
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);
export default App;
