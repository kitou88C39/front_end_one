import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './Technic.module.scss';

const useStyles = makeStyles({
    root: {
      width: 730,
      maxWidth: '100%',  
    },
  });
  
  const Technic: React.FC = () => {
    const classes = useStyles();

    return (
        <>
    <Box p={2}>
<      Box display='flex' justifyContent='center' p={1} >
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6">
            Programming language
            </Typography>
            <Typography color="textSecondary">
              Ruby / JavaScript / TypeScript
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box display='flex' justifyContent='center' p={1} >
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6">
            Framework　
            </Typography>
            <Typography color="textSecondary">
              Ruby on Rails  / React
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box display='flex' justifyContent='center' p={1} >
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6">
            Database
              </Typography>
              <Typography color="textSecondary">
                MySQL / PostgreSQL
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                AWS
              </Typography>
              <Typography color="textSecondary">
                EC2 / ECS / ECR / Lambda / SQS / SNS / Elastic Beanstalk / S3 / Cloud9 / CloudWatch / CloudFormation / RDS / Route53
              </Typography>
            </CardContent>
          </Card>
        </Box>
    </Box>
    
      </>
  );
}

export default Technic;
