// LoginPage.js
import * as React from 'react';
import { useState } from 'react';
import { Modal, Box, InputAdornment, IconButton, Stack, Alert, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormProvider, FCheckBox, FTextField } from './form';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const defaultValues = {
    email: 'minhhc@gmail.com',
    password: '123',
    remember: true,
  };

  const navigate = useNavigate();
  const location = useLocation();

  const isOpen = location.pathname === "/login";


  const methods = useForm({ defaultValues });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
    // setError('afterSubmit', { message: 'Server Response Error' }); // Uncomment to simulate an error
  };

  navigate("/");

  return (
    <Modal
    open={isOpen} onClose={() => navigate("/")}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    {
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        backgroundColor: '#f5f5f5', 
      }}
    >
      <Box
        sx={{
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {!!errors.afterSubmit && (
              <Alert severity="error">{errors.afterSubmit.message}</Alert>
            )}
            <Typography variant="h6" component="h2" align="center">
              Login Page
            </Typography>
            <FTextField name="username" label="Username" />
            <FTextField
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'hide password' : 'show password'}
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FCheckBox name="remember" label="Remember me" />
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Login
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Box>
    </Box>
}
    </Modal>
  );
}