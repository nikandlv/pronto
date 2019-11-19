import React from 'react'
import withDynamic from '../../../Data/withDynamic';
import {Dialog, DialogContent, Grid, Drawer} from '@material-ui/core'
function MediaPickerDialog(props) {
    const state = props.MediaPicker;
    return <Dialog open={state.open} fullWidth maxWidth="lg">
        <DialogContent>
            <Drawer variant="permanent">
                abc
            </Drawer>
        </DialogContent>
    </Dialog>
}

export default withDynamic(MediaPickerDialog).injectReducer("MediaPicker").build()