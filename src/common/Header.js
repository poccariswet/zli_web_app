import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import NavigationClose from 'material-ui/NavigationClose';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const Header = () => (
  <div>
    <AppBar
      title="Zli"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      iconElementLeft={<IconButton><MoreVertIcon /></IconButton>}
      onLeftIconButtonClick={(e) => console.log(e)}
    />
  </div>
);

export default Header;
