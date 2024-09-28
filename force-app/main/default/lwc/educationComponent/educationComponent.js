import { LightningElement } from 'lwc';

export default class EducationComponent extends LightningElement {
    educations = [
        {
            id: 1,
            degree: 'Bachelor of Technology',
            institution: 'United College of Engineering and Research',
            duration: 'September 2015 - June 2019',
            description: 'Graduated in ECE, focused on software development and data structures.'
        },
        {
            id: 2,
            degree: '10+2',
            institution: 'Shri Ram Public School',
            duration: 'September 2012 - June 2014',
            description: ' Rigorous study schedules with extracurricular activities, focused to develop both academically and personally'
        }
    ];
}