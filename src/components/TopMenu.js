import React from 'react';
import { Icon, Menu, Divider } from 'antd';
import { Link, withRouter } from 'react-router-dom';

function TopMenu({ location: { pathname } }) {
  return (
    <Menu defaultSelectedKeys={[pathname]} mode="horizontal">
      <Menu.Item key="/search-video">
        <Link to="/search-video">
          <Icon type="search" />
          <span>Search Video</span>
        </Link>
      </Menu.Item>
      <Divider type="vertical" />
      <Menu.Item key="/saved-video">
        <Link to="/saved-video">
          <Icon type="save" />
          <span>Saved Video</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

TopMenu.propTypes = {};

export default withRouter(TopMenu);
