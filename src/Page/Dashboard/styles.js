const styles = theme => ({
    centerLoading: {
        position: 'absolute',
        left: '50%',
        top: '50%',
      },
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3 ,
    },
});

export default styles;