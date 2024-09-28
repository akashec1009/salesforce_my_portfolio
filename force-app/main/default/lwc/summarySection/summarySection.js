import { LightningElement } from 'lwc';

export default class SummarySection extends LightningElement {
        // Array of skills with their proficiency levels
        skills = [
            { name: 'Apex Programming', proficiency: '85%' },
            { name: 'Lightning Web Components (LWC)', proficiency: '90%' },
            { name: 'REST API Integration', proficiency: '75%' },
            { name: 'Salesforce Administration', proficiency: '80%' }
        ];
}