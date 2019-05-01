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
  content: {
    width: "100%"
  },
  drawer: {
    width: `${drawerWidth}px`,
    flexShrink: 0,
  },
  drawerPaper: {
    width: `${drawerWidth}px`,
    boxShadow: `0 2px 6px 0 rgba(72, 122, 157, 0.3)`,
  },
  toolbar: theme.mixins.toolbar,
});

export default styles;