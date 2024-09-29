import { Paper, Box, Container } from "@mui/material";
import * as React from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Avatar from "@mui/material/Avatar";
import BadgeIcon from "@mui/icons-material/Badge";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
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
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BusinessIcon from "@mui/icons-material/Business";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FlagIcon from "@mui/icons-material/Flag";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const contactDetails = () => {
  return (
    <div>
      <Box>
        <h2 className="fw-bold mb-2">
          What’s the best way for employers to contact you?
        </h2>
        <p className=" fs-5 my-2 mb-3" style={{ color: "#828baa" }}>
          We suggest including an email and phone number.
        </p>
        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <div className="row">
                <div className="col-auto">
                  <Avatar
                    variant="rounded"
                    sx={{
                      width: "8rem",
                      height: "8rem",
                      border: "1px dashed gray",
                      p: 1,
                      fontSize: "5rem",
                      backgroundColor: "#e7e7e7",
                    }}
                  >
                    <BadgeIcon
                      fontSize="120px"
                      width="2rem !important"
                      height="2rem !important"
                      sx={{ color: "#aba6a6" }}
                    />
                  </Avatar>
                </div>
                <div className="col-auto align-content-center text-center">
                  <p className="fs-7 mb-1 text-muted">
                    Add a photo to your resume
                  </p>
                  <Button
                    variant="contained"
                    startIcon={<AddAPhotoIcon />}
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                  >
                    Add a photo
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(event) => console.log(event.target.files)}
                      multiple
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <label
              for="exampleInputEmail1"
              class="form-label fw-bold text-muted fs-7"
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
          <div className="col-12 col-md-6 mb-4">
            <label
              for="exampleInputEmail1"
              class="form-label fw-bold text-muted fs-7"
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
          <div className="col-12 col-md-12 mb-4">
            <label
              for="exampleInputEmail1"
              class="form-label fw-bold text-muted fs-7"
            >
              Country
            </label>
            <Paper square={false}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{ background: "#f9fafb" }}
                fullWidth
              >
                <MenuItem value={10}>India</MenuItem>
                <MenuItem value={20}>US</MenuItem>
                <MenuItem value={30}>Australia</MenuItem>
              </Select>
            </Paper>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <label
              for="exampleInputEmail1"
              class="form-label fw-bold text-muted fs-7"
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
          <div className="col-12 col-md-3 mb-4">
            <label
              for="exampleInputEmail1"
              class="form-label fw-bold text-muted fs-7"
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
          <div className="col-12 col-md-3 mb-4">
            <label
              for="exampleInputEmail1"
              class="form-label fw-bold text-muted fs-7"
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
          <div className="col-12 col-md-3 mb-4">
            <label
              for="exampleInputEmail1"
              class="form-label fw-bold text-muted fs-7 fs-7"
            >
              Email Id
            </label>
            <Paper square={false}>
              <TextField
                id="outlined-basic"
                sx={{ background: "#f9fafb" }}
                fullWidth
              />
            </Paper>
          </div>
          <div className="col-12">
            <h6 className="fw-bold fs-6">Add Section</h6>
          </div>
          <List>
            <div className="row">
              <div className="col-4">
                <ListItemButton>
                  <ListItemIcon>
                    <ContactEmergencyIcon color="red" />
                  </ListItemIcon>
                  <ListItemText primary="Driving Licence" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <FlagIcon />
                  </ListItemIcon>
                  <ListItemText primary="Nationality" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Date Of birth" />
                </ListItemButton>
              </div>
              <div className="col-4">
                <ListItemButton>
                  <ListItemIcon>
                    <BusinessIcon />
                  </ListItemIcon>
                  <ListItemText primary="Address" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <LinkedInIcon />
                  </ListItemIcon>
                  <ListItemText primary="Linked In" />
                </ListItemButton>
              </div>
            </div>
          </List>
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
          <Paper sx={{}} className="rs_slider p-2 pt-md-3 px-md-3">
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
                p: { xs: 1, md: 2 },
                overflow: "auto",
                background: "white",
              }}
            >
              <Container sx={{ p: { xs: 1, md: 1 } }}>
                {steps[activeStep].description}
              </Container>
            </Box>

            <Box
              position={"sticky"}
              bottom={0}
              backgroundColor="white"
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
