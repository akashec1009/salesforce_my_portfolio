import { LightningElement } from 'lwc';
import Hero_Image from '@salesforce/resourceUrl/Hero_Image';
import pdfResource from '@salesforce/resourceUrl/myresume';

export default class Portfolio extends LightningElement {
    heroImageUrl = Hero_Image;
    
       // Personal Information
       name = 'Akash Prajapati';
       email = 'akashec1009.com';
       phone = '+917007562983';
       location = 'Noida, India';
       github = 'https://github.com/akashec1009';
       Linkedin = 'https://www.linkedin.com/in/akash-prajapati-963a2212b/';

       downloadPdf() {
        
        const link = document.createElement('a');
        link.href = pdfResource; 
        link.download = 'akash_resume_salesforce.pdf'; 
        link.target = '_blank'; // Opens in a new tab
        link.click(); 
    }
   
       // Class for navbar toggling
       navbarClass = 'navbar-collapsed';
   
       // Function to toggle navbar on mobile devices
       toggleNavbar() {
           if (this.navbarClass === 'navbar-expanded') {
               this.navbarClass = 'navbar-collapsed';
           } else {
               this.navbarClass = 'navbar-expanded';
           }
       }
       scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}