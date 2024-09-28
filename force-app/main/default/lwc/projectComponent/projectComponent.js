import { LightningElement, track } from 'lwc';

export default class ProjectComponent extends LightningElement {
    @track projects = [
        { id: '1', name: 'Recruitment System', description: 'Recruitment system is a used to hire new talent', technology: 'Technology Used: Salesforce admin, declarative approach '},
        { id: '2', name: 'My Portfolio', description: 'Created Portfolio to showcase skills and projects',
             technology: 'Technology Used : HTML, CSS, JS' },
        { id: '3', name: 'Employee Onboarding System', description: 'An employee onboarding system is use to integrate new employees into the company.',
             technology: 'Technology Used : LWC, Apex Class, Apex Trigger, Async Apex, Rest API Interagtion'
         }
        
    ];
    
}