import React from 'react';
import Grid from '@mui/material/Grid';
import './style/footer.css';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import RedeemIcon from '@mui/icons-material/Redeem';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
    return (
        <Grid className="footer">
            <Grid className="footerUpper" container >
                <Grid item xs={12} sm={6} md={2}>
                    <Typography variant="h6">ABOUT</Typography>
                    <Typography>Contact Us</Typography>
                    <Typography>About Us</Typography>
                    <Typography>Careers</Typography>
                    <Typography>Flipkart Stories</Typography>
                    <Typography>Press</Typography>
                    <Typography>Corporate Information</Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Typography variant="h6">GROUP COMPANIES</Typography>
                    <Typography>Myntra</Typography>
                    <Typography>Flipkart Wholesale</Typography>
                    <Typography>Cleartrip</Typography>
                    <Typography>Shopsy</Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Typography variant="h6">HELP</Typography>
                    <Typography>Payments</Typography>
                    <Typography>Shipping</Typography>
                    <Typography>Cancellation & Returns</Typography>
                    <Typography>FAQ</Typography>
                    <Typography>Report Infringement</Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Typography variant="h6">CONSUMER POLICY</Typography>
                    <Typography>Cancellation & Returns</Typography>
                    <Typography>Terms of Use</Typography>
                    <Typography>Security</Typography>
                    <Typography>Privacy</Typography>
                    <Typography>Sitemap</Typography>
                    <Typography>Grievance Redressal</Typography>
                    <Typography>ERP Compliance</Typography>
                    
                </Grid>
                <Grid item xs={12} sm={6} md={2} >
                    <Typography variant="h6">Mail Us:</Typography>
                    <Typography>
                        Flipkart Internet Private Limited,
                        Building Alyssa, Begonia &
                        Clove Embassy Tech Village,
                        Outer Ring Road, Devarabeesanahalli Village,
                        Bengaluru, 560103,
                        Karnataka, India
                    </Typography>
                    <Typography sx={{color:'teal'}}>Socials:</Typography>
                    <Typography><FacebookIcon /> <XIcon /> <YouTubeIcon /></Typography>
                    

                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Typography variant="h6">Registered Office Address:</Typography>
                    <Typography>
                        ShopE7 Internet Private Limited,
                        Building Alyssa, Begonia &
                        Clove Embassy Tech Village,
                        Outer Ring Road, Devarabeesanahalli Village,
                        Bengaluru, 560103,
                        Karnataka, India
                        CIN: U51109KA2012PTC066107
                        Telephone: <span>044-45614700</span>
                    </Typography>

                </Grid> 

               
            </Grid> <hr />
            <Grid className="lowerfooter">
                <Grid> <StorefrontIcon/> Become a Seller</Grid>
                <Grid> <AutoAwesomeIcon/> Advertise</Grid>
                <Grid> < RedeemIcon /> Gift Cards</Grid>
                <Grid> <HelpOutlineIcon/> Help Center</Grid>
                <Grid> <CopyrightIcon/> 2007-2024 Shope7.com</Grid>
                <Grid>6</Grid>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="Payment methods"></img>
            </Grid>
        </Grid>

    );
}

export default Footer;
