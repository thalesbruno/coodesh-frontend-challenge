/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import WcIcon from '@material-ui/icons/Wc';
import EmailIcon from '@material-ui/icons/Email';
import CakeIcon from '@material-ui/icons/Cake';
import PhoneIcon from '@material-ui/icons/Phone';
import PublicIcon from '@material-ui/icons/Public';
import HomeIcon from '@material-ui/icons/Home';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import ShareIcon from '@material-ui/icons/Share';
import Avatar from '@material-ui/core/Avatar';
import { Divider } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import Link from './Link';

const styles = (theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  avatar: {
    width: '100px',
    height: '100px',
    // position: 'absolute',
    // border: `solid 1px ${theme.palette.grey[500]}`,
    // top: '0',
    // marginTop: '-50px',
    // right: '40%',
  },
});

const useStyles = makeStyles(() => ({
  field: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const {
    children, url, classes, onClose, ...other
  } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Avatar alt="Patient picture" src={url} className={classes.avatar} />
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const PatientCard = ({ handleClose, open, patient }) => {
  const classes = useStyles();
  const date = new Date(patient.dob.date);

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
        url={patient.picture.medium}
      >
        {`${patient.name.title} ${patient.name.first} ${patient.name.last}`}
      </DialogTitle>
      <DialogContent dividers>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.field}>
              <WcIcon />
              <Typography>{patient.gender}</Typography>
            </div>
            <div className={classes.field}>
              <EmailIcon />
              <Typography>{patient.email}</Typography>
            </div>
            <div className={classes.field}>
              <CakeIcon />
              <Typography>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</Typography>
            </div>
            <div className={classes.field}>
              <PhoneIcon />
              <Typography>{patient.phone}</Typography>
            </div>
            <div className={classes.field}>
              <PublicIcon />
              <Typography>{patient.nat}</Typography>
            </div>

          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.field}>
              <HomeIcon />
              <Typography>Address:</Typography>
            </div>
            <Typography>
              {`${patient.location.street.name}, ${patient.location.street.number}`}
            </Typography>
            <Typography>{`${patient.location.city}, ${patient.location.state}`}</Typography>
            <Typography>{patient.location.country}</Typography>
            <Typography gutterBottom>{`Postcode: ${patient.location.postcode}`}</Typography>
            <div className={classes.field}>
              <FingerprintIcon />
              <Typography>{patient.id.value || 'null'}</Typography>
            </div>
          </Grid>
        </Grid>
        <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <div xs={12} className={classes.field}>
            <Link color="primary" underline="none" to={`/${patient.login.uuid}`}>
              <ShareIcon />
              <Typography>Share</Typography>
            </Link>
          </div>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

PatientCard.defaultProps = {
  patient: {},
};

PatientCard.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  patient: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
};

export default PatientCard;
