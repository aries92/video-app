import React from 'react';
import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';
import Sidebar from './components/SideMenu';
import SavedVideo from './containers/SavedVideo';
import SearchVideo from './containers/SearchVideo';
import VideoModal from './containers/VideoModal';

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Sidebar />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', paddingLeft: '15px' }}>
          <h1>Video App</h1>
        </Header>
        <Content>
          <div
            style={{
              margin: '45px 0 0',
              padding: '0 15px',
              minHeight: 'calc(100vh - 109px)'
            }}
          >
            <Switch>
              <Route path="/search-video" component={SearchVideo} />
              <Route path="/saved-video" component={SavedVideo} />
              <Redirect to="/search-video" />
            </Switch>
          </div>
        </Content>
      </Layout>
      <VideoModal />
    </Layout>
  );
}

App.propTypes = {};

export default App;
