import logo from './../../logo.svg';
import './App.css';
//import * as React from 'react';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import Paper from '@mui/material/Paper'
import ComboBox from './combobox'
import IconCheckboxes from './checkbox'
import FloatingActionButtons from './fab'
import ErrorRadios from './radiogroup'
import RadioGroupRating from './rating';
import MusicPlayerSlider from './slider';
import ImageAvatars from './avatar';
import BadgeVisibility from './badge';
import NestedList from './list';
import Header from './header';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import DenseTable from './table';
import DescriptionAlerts from './alert';
import TransitionAlerts from './transitionalert';
import SimpleBackdrop from './backdrop';
import AlertDialogSlide from './slidedialog';
import CircularWithValueLabel from './circularprogressbar';
import CircularIntegration from './interactiveprogressbutton';
import LinearWithValueLabel from './linearprogressbar';
import TransitionsSnackbar from './transitionsnackbar';
import AccordionExpandIcon from './accordionexpand';
import FixedBottomNavigation from './bottomnavigationbar';
import CustomSeparator from './breadcrumbs';
import UsePagination from './pagination';
import BasicSpeedDial from './speeddial';
import FullWidthTabs from './fixedtab';
import ColorTabs from './coloredtab';
import HorizontalNonLinearStepper from './nonlinearhorizontalstepper';

function App() {
  return (
    <div>
      <Container maxWidth="lg" className="App">
        <Box display="flex" justifyContent="space-evenly">
          <ImageAvatars />
          <CircularWithValueLabel />
          <CustomSeparator />
        </Box>

        <Box
          position="absolute"
          top={40}
          right={1510}
          width={340}
          height={100}
        >
          <Paper elevation="20">
            <DenseTable />
            <CircularIntegration />
            <AccordionExpandIcon />
          </Paper>
        </Box>

        <Box
          position="absolute"
          top={40}
          right={5}
          width={340}
          height={340}
        >
          <Paper elevation="20">
            <HorizontalNonLinearStepper />
            <CircularIntegration />
          </Paper>
        </Box>

        <Header />
        
        <Box display="flex" justifyContent="space-around">
            <DescriptionAlerts />
            <TransitionAlerts />
            <TransitionsSnackbar />
            <SimpleBackdrop />
            <AlertDialogSlide />
        </Box>
        <ColorTabs />

        <Box display="flex" justifyContent="space-between">
          <Paper elevation={1} style={{ padding: 16, flex: 1, marginRight: 4 }}>
            <NestedList />
          </Paper>
          <Paper elevation={1} style={{ padding: 16, flex: 1, marginLeft: 0 }}>
            <BadgeVisibility />
          </Paper>
          <Paper elevation={1} style={{ padding: 16, flex: 1, marginLeft: 4 }}>
            <MusicPlayerSlider />
          </Paper>
        </Box>

        <Paper elevation={15}>
          <ComboBox />
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h4" component="h1" gutterBottom>
            My First React App + Material-UI
          </Typography>
          <RadioGroupRating />
          <Typography variant="h7" component="h3">
            Smash that like button
          </Typography>
          <IconCheckboxes />
          <LoadingButton loading loadingPosition="start" color="primary" startIcon={<SaveIcon />}>
            English
          </LoadingButton>
          <Button variant="contained" color="secondary" startIcon={<SendIcon />}>
            Spanish
          </Button>
          <LinearWithValueLabel />
          <ErrorRadios />
        </Paper>
        <BasicSpeedDial />
        <FloatingActionButtons />
        <UsePagination />
        <FixedBottomNavigation />
      </Container>
    </div>
    
  );
  
}

export default App;