const styles = theme => ({
    root: {
      flexGrow: 1,
      paddingBottom: 15,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      maxWidth: 368,
      paddingBottom: 50,
    },
    Header:{
      marginBottom: 10,
    },
    Avatar: {
      margin: 'auto',
      marginTop: 10,
      marginBottom: 10,
      maxWidth: '100%',
      maxHeight: '100%',
      // padding: 17,
    },
    isi: {
      width: 366,
      height: 50
    },
    text: {
      float: 'left',
    },
    icon: {
      float: 'right',
    },
    button: {
      marginTop: 5,
      float: 'right',
    },
    input: {
        display: "none",
      }
  });
    
  export default styles;