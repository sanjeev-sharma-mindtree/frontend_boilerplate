import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import {
    Grid,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Button,
    Typography,
    Paper,
    FormControl,
    InputLabel,
    TextField,
    styled,
    Stack,
    MenuItem
} from '@mui/material';
import Check from '@mui/icons-material/Check';
import { StepIconProps } from '@mui/material/StepIcon';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCampaigns } from '../../features/campaign/campaignSlice';

const steps = [
    {
        label: 'Campaign Details',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    },
    {
        label: 'Consumer Actions',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
    },
    {
        label: 'Incentives',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    },
    {
        label: 'Restrictions',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    },
    {
        label: 'Settings',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    },
    {
        label: 'Summary',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    }
];

const CustomInputLabel = styled(InputLabel)({
    '& .MuiInputLabel-standard.MuiInputLabel-root': {
        position: "relative !important"
    } 
})

const CustomInput = styled(TextField)({
    'label + &': {
        marginTop: 20,
    },
    '& .MuiInputBase-input': {
        // borderRadius: 4,
        position: 'relative',
        backgroundColor: '#fcfcfb',
        // border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '8px 10px',
        // transition: transitions.create([
        //     'border-color',
        //     'background-color',
        //     'box-shadow',
        // ]),
        // '&:focus': {
        //     boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        //     borderColor: theme.palette.primary.main,
        // },
    },
});

const CustomStepLabel = styled(StepLabel)({
    '& .MuiStepLabel-label': {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        fontSize: '16px',
        color: '#000000',
        fontWeight: 500
    },
    '& .MuiStepLabel-label.Mui-active': {
        color: '#12409F'
    }
})

const CustomDescription = styled(Typography)({
    color: '#1D2129',
    fontSize: '14px',
    letterSpacing: '0px'
})

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState }) => ({
      color: '#114AA4', //theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
      display: 'flex',
      height: 22,
      alignItems: 'center',
      ...(ownerState.active && {
        color: '#784af4',
      }),
      '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
      },
      '& .QontoStepIcon-circle': {
        width: 22,
        height: 22,
        borderRadius: '50%',
        border: ownerState.active ? '2px solid #114AA4' : '1px solid #B9B9B9'
      },
    }),
  );

function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
  
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }

export default function CreateCampaignView() {
    //get campaign data from store using useAppSelector
    const campaign = useAppSelector(state => state.campaign)
    const { campaignsList } = campaign;
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    useEffect(() => {
        // dispatch action to fetch campaigns list when component is rendered
        dispatch(fetchCampaigns())
    }, [])

    return (
        // <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container sx={{ flexGrow: 1, p: 3 }} spacing={2}>
            <Grid item xs={8}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography>Campaign Details</Typography>
                    <Stack direction="row" spacing={1} mb={1}>
                        <Button variant="outlined">Save</Button>
                        <Button variant="contained">Next Step</Button>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Paper sx={{p:2, height: "100%"}}>
                    <Box
                        component="form"
                        noValidate
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { sm: '1fr 1fr' },
                            gap: 2,
                            p: 2
                        }}
                    >
                        <FormControl variant="standard">
                            <CustomInputLabel shrink htmlFor="channel">
                                Channels*
                            </CustomInputLabel>
                            <CustomInput select fullWidth placeholder='Select...' id="channel">
                                <MenuItem key="web" value="web">Web</MenuItem>
                                <MenuItem key="app" value="app">App</MenuItem>
                                <MenuItem key="oydd" value="oydd">OYDD</MenuItem>
                            </CustomInput>
                        </FormControl>
                        <FormControl variant="standard">
                            <CustomInputLabel shrink htmlFor="campaignName">
                                Campaign Name
                            </CustomInputLabel>
                            <CustomInput fullWidth placeholder="Enter campaign name" id="campaignName" />
                        </FormControl>
                        <FormControl variant="standard">
                            <CustomInputLabel shrink htmlFor="campaignDescription">
                                Campaign Description*
                            </CustomInputLabel>
                            <CustomInput multiline rows={2} fullWidth placeholder="Enter campaign description" id="campaignDescription" />
                        </FormControl>
                        <FormControl variant="standard">
                            <CustomInputLabel shrink htmlFor="additionalInfo">
                                Additional Information
                            </CustomInputLabel>
                            <CustomInput multiline rows={2} fullWidth placeholder='Enter additional information' id="additionalInfo" />
                        </FormControl>
                        <Button variant="contained" size="small" sx={{width: '40%'}}>Add Product</Button>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper sx={{p: 2, height: "100%"}}>
                    <Typography variant='h6'>
                        Campaign Name
                    </Typography>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <CustomStepLabel StepIconComponent={QontoStepIcon}>
                                    {step.label}
                                    {
                                        activeStep === index ?
                                            <KeyboardArrowUpOutlinedIcon fontSize='small' htmlColor='#8E8E8E' /> :
                                            <KeyboardArrowDownOutlinedIcon fontSize='small' htmlColor='#8E8E8E' />
                                    }
                                </CustomStepLabel>
                                <StepContent>
                                    <CustomDescription>{step.description}</CustomDescription>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Paper>
            </Grid>
        </Grid>
        // </Box>
    )
}