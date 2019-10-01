import React from 'react';
import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';
import TopMenu from './components/TopMenu';
import SavedVideo from './containers/SavedVideo';
import SearchVideo from './containers/SearchVideo';
import VideoModal from './containers/VideoModal';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <TopMenu />
      <Content>
        <div
          style={{
            padding: '0 15px',
            minHeight: 'calc(100vh - 48px)'
          }}
        >
          <Switch>
            <Route path="/search-video" component={SearchVideo} />
            <Route path="/saved-video" component={SavedVideo} />
            <Redirect to="/search-video" />
          </Switch>
        </div>
      </Content>
      <VideoModal />
    </Layout>
  );
}

App.propTypes = {};

export default App;
