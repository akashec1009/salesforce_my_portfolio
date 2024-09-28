import { LightningElement, track } from 'lwc';

export default class SkillComponentWithFlip extends LightningElement {
 
    @track skills = [
        { id: 1, name: 'Salesforce Developer', description: 'Expert in developing applications on the Salesforce platform.' },
        { id: 2, name: 'Salesforce Administrator', description: 'Skilled in managing and configuring Salesforce applications.' },
        { id: 3, name: 'Lightning Web Components (LWC)', description: 'Proficient in building modern web apps using LWC.' },
        { id: 4, name: 'REST API Integration', description: 'Experienced in integrating third-party APIs with Salesforce.' },
        { id: 5, name: 'Apex Programming', description: 'Strong knowledge of Apex for server-side programming.' },
        { id: 6, name: 'Data Migration', description: 'Expert in data migration using Data Loader and other tools.' }
    ];
}