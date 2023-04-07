import '../App.css';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function ErrorAlert({ showAlert, setShowAlert, alertMessage }) {
  return (
    <Snackbar
      open={showAlert}
      autoHideDuration={6000}
      onClose={() => setShowAlert(false)}
    >
      <Alert
        severity="error"
        onClose={() => setShowAlert(false)}
        sx={{ width: '100%' }}
      >
        {alertMessage}
      </Alert>
    </Snackbar>
  );
}

export default ErrorAlert;
