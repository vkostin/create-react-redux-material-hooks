import React from 'react';
import { makeStyles } from "@material-ui/core/styles/";
import Typography from "@material-ui/core/Typography";
import { useGet } from "../hooks/useGet/useGet";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {},
}));

const HomePage = () => {
    const classes = useStyles();
    const url = "http://fathomless-wave-08869.herokuapp.com/posts"; //compileFooUrl({ fooId: this.props.fooId });

    const {isLoading, data, error} = useGet({url});

    return (
        <div className={classes.root}>
            <Card>
                <CardContent>
                    <Typography>Test</Typography>
                    {isLoading && <Typography>Loading</Typography>}
                    {error && <Typography>Error</Typography>}
                    {error && <Typography variant="body2">{error}</Typography>}
                    <List>

                        {data && data.map((x, idx) =>
                            <ListItem key={idx}>
                                <Grid container>
                                    <Grid item>
                                        <Typography varian={"h4"}>{x.id} {x.title}</Typography>

                                    </Grid>
                                    <Grid item>
                                        {x.body}
                                    </Grid>
                                </Grid>
                                <Divider/>
                            </ListItem>
                        )}
                    </List>
                </CardContent>
            </Card>
        </div>
    );
};

// HomePage.propTypes = {};
//
// HomePage.defaultProps = {};

export default HomePage;