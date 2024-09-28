import { Paper, Box } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import "./../assets/scss/pages/slider.scss";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import GrainIcon from "@mui/icons-material/Grain";
const steps = [
  {
    label: "Select campaign settings",
    description: (
      <div>
        <h1>sdfsdf</h1>
      </div>
    ),
  },
  {
    label: "Create an ad group",
    description:
    (
      <div>
        <h1>two</h1>
      </div>
    ),
  },
  {
    label: "Create an ad",
    description: (
      <div>
        <h1>three</h1>
      </div>
    ),
  },
];

function Details() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <section>
      <div className="row">
        <div className="col">
          <Paper sx={{}} className="rs_slider p-3">
            <div role="presentation">
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  underline="hover"
                  sx={{ display: "flex", alignItems: "center" }}
                  color="inherit"
                  href="/"
                >
                  <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  Home
                </Link>
                <Typography
                  sx={{
                    color: "text.primary",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  Create Resume
                </Typography>
              </Breadcrumbs>
              <Box>
                <h1 className="fw-bold">
                  What’s the best way for employers to contact you?
                </h1>
                <p>We suggest including an email and phone number.</p>
              </Box>
            </div>

            <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
              {steps[activeStep].description}
            </Box>

            <MobileStepper
              variant="progress"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Paper>
        </div>
        <div className="col-12 col-md-4 d-none d-lg-flex"></div>
      </div>
    </section>
  );
}

export default Details;
