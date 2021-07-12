import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import './Navbar.module.scss';

const Navbar: React.FC = () => {
    return (
     <>
        <AppBar
          color='default'
          position='static'
          style={{ alignItems:'center'}}
        >
        <Toolbar>
         <AnchorLink href='#about' style={{
          TextDecoderation: 'none',
          color: 'inherit'

         }}>
          <Button>
            ABOUT
          </Button>
          </AnchorLink>
          <AnchorLink href='#skills' style={{
           textDexoderation: 'none',
           color:'inherit'
          }}>
          <Button color='inherit'>
            SKILLS
          </Button>   
         </AnchorLink>
        </Toolbar>
        </AppBar>
      </>
    );
}

export default Navbar;