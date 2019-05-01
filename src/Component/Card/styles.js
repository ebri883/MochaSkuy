const styles = theme => ({
    card: {
      maxWidth: '100%',
      marginTop: 15,
    },
    media: {
      height: 0,
      paddingTop: '40%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  });

  export default styles;