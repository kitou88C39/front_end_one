import React from "react";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import './About.module.scss';

const About: React.FC = () => {
  return (
      <>
        <Box p={2}>
        <Box display='flex' justifyContent='center' p={1}>
        <Typography variant='h5' >
            About
        </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
            <Typography variant='body1' align='left'>
            私の名前は Masaomi Kito です。<br />
            Youtube chabnel『KITOCODE』を運営する<br />
            フロントエンド開発者及びWebデザイナーです。<br/>
            Webデザイン、フロントエンドに関する技術をYoutubeで発信中。<br/>
            好きな言語・フレームワークは『TypeScript』と『React』です。<br/>
            趣味は、音楽とギターの演奏です。<br/>
            </Typography>
        </Box>
      </Box>
      </>
  );
}

export default About;