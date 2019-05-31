import React from 'react';
import { Icon, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';

function SideMenu({ location: { pathname } }) {
  return (
    <Menu defaultSelectedKeys={[pathname]} mode="inline" theme="dark">
      <Menu.Item key="/search-video">
        <Link to="/search-video">
          <Icon type="search" />
          <span>Search</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/saved-video">
        <Link to="/saved-video">
          <Icon type="save" />
          <span>Saved</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

SideMenu.propTypes = {};

export default withRouter(SideMenu);
