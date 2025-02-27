import './App.css';
import { Container, Grid } from '@mui/material';
import { Routes, Route, Navigate, Outlet, useLocation, Router } from "react-router-dom";
import SearchAppBar from './components/SearchAppBar';
import InfoBox from './components/InfoBox';
import BasicPagination from './components/BasicPagination';
import jobs from './jobs.json';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Routes>
      <Route path = "/" element={<Layout/>}>
      <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <SearchAppBar />
      <Container maxWidth="lg" sx={{ mt: '10px' }}>
        <Grid container spacing={2}>
          {jobs.slice(0, 5).map((job, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <InfoBox job={job} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Outlet />
      <BasicPagination />
    </div>
  );
}
