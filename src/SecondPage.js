import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink, Link } from "react-router-dom";
import Resume2 from "./Resume2.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Personal Details", "Company Details", "Email Verification"];
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "If you want to go next page,Click here ";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

function SecondPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => 2);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => 1 - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <h3 style={{ textAlign: "center" }}>Add your Company Details</h3>
      <NavLink exact to="/Resume2" component={Resume2}></NavLink>
      <div className="divClass ">
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div style={{ textAlign: "center" }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
                component={Link}
                to="./"
              >
                Back
              </Button>
              
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
                component={Link}
                to="./ThirdPage"
              >
                {activeStep === steps.length ? "Finish" : "Next"}
              </Button>
            </div>
            <br />
          </div>
        )}
      </div>
    </div>
  );
}

export default SecondPage;
