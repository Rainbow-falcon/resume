import { Paper, Box, Container } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import "./../assets/scss/pages/slider.scss";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import GrainIcon from "@mui/icons-material/Grain";

const contactDetails = () => {
  return (
    <div>
      <Box>
        <h1 className="fw-bold">
          What’s the best way for employers to contact you?
        </h1>
        <p className=" fs-4 my-3" style={{ color: "#828baa" }}>
          We suggest including an email and phone number.
        </p>
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <div class="mb-3">
              <label
                for="exampleInputEmail1"
                class="form-label fw-bold text-muted"
              >
                First Name
              </label>
              <Paper square={false}>
                <TextField
                  id="outlined-basic"
                  sx={{ background: "#f9fafb" }}
                  fullWidth
                />
              </Paper>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <label
              for="exampleInputEmail1"
              class="form-label fw-bold text-muted"
            >
              Last name
            </label>
            <Paper square={false}>
              <TextField
                id="outlined-basic"
                sx={{ background: "#f9fafb" }}
                fullWidth
              />
            </Paper>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <label
              for="exampleInputEmail1"
              class="form-label fw-bold text-muted"
            >
              Country
            </label>
            <Paper square={false}>
              <TextField
                id="outlined-basic"
                sx={{ background: "#f9fafb" }}
                fullWidth
              />
            </Paper>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <label
              for="exampleInputEmail1"
              class="form-label fw-bold text-muted"
            >
              Town or City
            </label>
            <Paper square={false}>
              <TextField
                id="outlined-basic"
                sx={{ background: "#f9fafb" }}
                fullWidth
              />
            </Paper>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <label
              for="exampleInputEmail1"
              class="form-label fw-bold text-muted"
            >
              Post Code
            </label>
            <Paper square={false}>
              <TextField
                id="outlined-basic"
                sx={{ background: "#f9fafb" }}
                fullWidth
              />
            </Paper>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <label
              for="exampleInputEmail1"
              class="form-label fw-bold text-muted"
            >
              Phone Number
            </label>
            <Paper square={false}>
              <TextField
                id="outlined-basic"
                sx={{ background: "#f9fafb" }}
                fullWidth
              />
            </Paper>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <label
              for="exampleInputEmail1"
              class="form-label fw-bold text-muted"
            >
              Emil Id
            </label>
            <Paper square={false}>
              <TextField
                id="outlined-basic"
                sx={{ background: "#f9fafb" }}
                fullWidth
              />
            </Paper>
          </div>
        </div>
      </Box>
    </div>
  );
};
const WorkHistory = () => {
  return (
    <div>
      <h1>ima from step WorkHistory</h1>
    </div>
  );
};
const Education = () => {
  return (
    <div>
      <h1>ima from step Education</h1>
    </div>
  );
};
const Qualifications = () => {
  return (
    <div>
      <h1>ima from step Qualifications</h1>
    </div>
  );
};
const Skills = () => {
  return (
    <div>
      <h1>ima from step onSkillse</h1>
    </div>
  );
};
const PersonalStatement = () => {
  return (
    <div>
      <h1>ima from step PersonalStatement</h1>
    </div>
  );
};
const References = () => {
  return (
    <div>
      <h1>ima from step References</h1>
    </div>
  );
};
const Finalise = () => {
  return (
    <div>
      <h1>ima from step Finalise</h1>
    </div>
  );
};

const steps = [
  {
    description: <div>{contactDetails()}</div>,
  },
  {
    description: <div>{WorkHistory()}</div>,
  },
  {
    description: <div>{Education()}</div>,
  },
  {
    description: <div>{Qualifications()}</div>,
  },
  {
    description: <div>{PersonalStatement()}</div>,
  },
  {
    description: <div>{References()}</div>,
  },
  {
    description: <div>{Finalise()}</div>,
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
          <Paper sx={{}} className="rs_slider p-2 pt-md-5 px-md-5">
            <div role="presentation" className="p-1 p-md-3">
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
            </div>

            <Box
              sx={{
                width: "100%",
                height: "calc(100vh - 276px)",
                p: {xs: 1, md:3},
                overflow: "auto",
                background: "white",
              }}
            >
              <Container sx={{p: {xs: 1, md:1}}}>{steps[activeStep].description}</Container>
            </Box>

            <Box
              position={"sticky"}
              bottom={0}
              borderTop={"1px dashed #d1cccc"}
              p={2}
            >
              <MobileStepper
                variant="progress"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    variant="contained"
                    size="large"
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
                    variant="contained"
                    className="btn btn-primary"
                    size="large"
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
            </Box>
          </Paper>
        </div>
        <div
          className="col-12 col-md-4 d-none d-lg-flex align-items-center justify-content-center"
          style={{ backgroundColor: "#c0cdf0" }}
        >
          <img
            src={require("./../assets/images/resume.jpg")}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Details;
