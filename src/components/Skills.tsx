import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
// import Card from '@material-ui/core/Card';
// import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './Skills.module.scss';

const useStyles = makeStyles({
  root: {
    width: 730,
    maxWidth: '100%',  
  },
});

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <>
     <Box p={2}>
      <Box display='flex' justifyContent='center' p={1}>
        <Typography variant='h5'>
            Skills
        </Typography>
      </Box>
      {/* <Box display='flex' justifyContent='center' p={1}>
       <Card className={classes.root}>
        <CardContent>
         <Typography variant='h6'>
            Programming language
         </Typography>
         <Typography color='textSecondary'>
            Ruby / PHP / JavaScript / TypeScript
         </Typography>
        </CardContent>
       </Card>
      </Box>
      <Box display='flex' justifyContent='center' p={1}>
       <Card className={classes.root}>
        <CardContent>
         <Typography variant='h6'>
         　Framework / Library
         </Typography>
          <Typography color='textSecondary'>
            Ruby on Rails / React / Vue / Laravel
          </Typography>
        </CardContent>
       </Card>
      </Box>
      <Box display='flex' justifyContent='center' p={1}>
       <Card className={classes.root}>
        <CardContent>
         <Typography variant='h6'>
            DATABASE
         </Typography>
         <Typography color='textSecondary'>
            MySQL / PostgreSQL
         </Typography>
        </CardContent>
       </Card>
      </Box>
      <Box display='flex' justifyContent='center' p={1}>
       <Card className={classes.root}>
        <CardContent>
         <Typography variant='h6'>
            AWS
         </Typography>
         <Typography color='textSecondary'>
            EC2 / ECS / ECR / LAMDA / SQS / SNS 
         </Typography>
        </CardContent>
       </Card>
      </Box> */}

     </Box>
    </>
  );
}

export default Skills;