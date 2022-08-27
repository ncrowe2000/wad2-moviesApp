 import React from "react";
 import Cast from "../castCard";
 import Grid from "@material-ui/core/Grid";

 const CastList = ( {castmembers, action} ) => {
    let castCards = castmembers.map((c) => (
        <Grid key={(c.order)} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Cast key={(c.order)} cast={c} action={action} />
        </Grid>
    ));
    return castCards;
 };

 export default CastList;
