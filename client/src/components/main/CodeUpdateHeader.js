import React, {Component} from 'react';
import {Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import PropTypes from 'prop-types';

class CodeUpdateHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const appBarStyle = { flexGrow: "1", backgroundColor: "#484848"};
        const {heading, justifyAlignment} = this.props;
        return (
            <div>
                <AppBar position="static" style={appBarStyle}>
                    <Toolbar>
                        <Grid
                            justify={justifyAlignment}
                            container
                            spacing={10}
                        >
                            <Grid item>
                                <Typography variant={"h4"} color={"inherit"} aria-label={heading}>{heading}</Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <br/>
            </div>
        );
    }

}
CodeUpdateHeader.propTypes ={
    heading: PropTypes.string.isRequired,
    justifyAlignment: PropTypes.string.isRequired,
};
export default CodeUpdateHeader;
