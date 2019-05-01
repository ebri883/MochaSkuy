const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  logo: {
    marginLeft: '30%',
    marginTop: '5%',
    marginBottom: '5%',
    maxWidth: '40%',
    maxHeight: '40%',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
});

export default styles;