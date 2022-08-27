import React from "react";
import CastList from "../components/castList";
import SampleCast from "./sampleCastData";
import { MemoryRouter } from "react-router";
import Grid from "@material-ui/core/Grid";

export default {
    title: "Home Page/CastList",
    compononet: CastList,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    ],
};

export const Basic = () => {
    const castmembers = [
        { ...SampleCast, order: 0},
        { ...SampleCast, order: 1},
        { ...SampleCast, order: 2},
        { ...SampleCast, order: 3},
        { ...SampleCast, order: 4},
        { ...SampleCast, order: 5},
    ];
    return (
        <Grid container spacing={5}>
            <CastList
            castmembers={castmembers}
            />
        </Grid>
    );
};
Basic.storyName = "Default";