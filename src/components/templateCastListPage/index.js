 import React from "react";
 import Header from "../headerMovieList";
 import { Grid } from "@material-ui/core";
 import { makeStyles } from "@material-ui/core/styles";
 import CastList from "../castList"

 const useStyles = makeStyles({
    root: {
      padding: "20px",
    },
  });


  function CastListPageTemplate({castmembers, title}) {
    const classes = useStyles();
    let displayedCastMembers = castmembers

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
        <CastList castmembers={displayedCastMembers}></CastList>
        </Grid>
        </Grid>
    )
  }
  export default CastListPageTemplate;

