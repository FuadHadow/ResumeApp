import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getHeaderData() {
    return {
      name: 'Fuad Hadow',
      role: 'Software Developer, Web Developer, Graphic Designer',
      image: 'assets/images/Fuad.jpg'
    };
  }

  getAboutData() {
    return {
      description: `Hello! I am Fuad Hadow. Software Developer, Web Developer and Graphic Designer .`,
      basicInfo: {
        age: 24,
        email: 'eng.hadow@gmail.com',
        phone: '+1416-569-9203',
        address: '15 Martha Eaton Way, North York, ON',
        languages: 'English, Somali'
      }
    };
  }

  getSkills() {
    return [
      { name: 'HTML', level: 80 },
      { name: 'CSS', level: 75 },
      { name: 'JavaScript', level: 60 },
      { name: 'SASS', level: 60 },
      { name: 'Bootstrap', level: 75 },
      { name: 'Photoshop', level: 70 }
    ];
  }

  getPortfolio() {
    return [
      { title: 'Recent Project', category: 'Web Development', image: 'assets/images/project1.jpg' },
      { title: 'Startup Project', category: 'Web Development', image: 'assets/images/project-2.jpg' },
      { title: 'Food Order Project', category: 'Web Development', image: 'assets/images/project-3.jpg' },
      { title: 'Web Advertising Project', category: 'Web Development', image: 'assets/images/project-4.jpg' }
    ];
  }

  getExperience() {
    return [
      {
        date: 'May 2023  - Present',
        company: 'Freeluncer',
        role: 'Fullstack Software Developer',
        description: `Work on various tasks, improving web performance, and developing responsive web Apps.`
      },
      {
        date: 'May 2019  - April 2023',
        company: 'NIEC',
        role: 'Software Developer / IT Technnican',
        description: `Collaborated with   teams to design and implement web applications.`
      },
      {
        date: 'March 2017 - April 2019',
        company: 'Tabaarak ICT',
        role: 'Software Developer',
        description: `Assisted in developing internal tools, optimizing websites for search engines.`
      }
    ];
  }

  getEducation() {
    return [
      {
        date: '2013 - 2018',
        degree: 'B.Sc. of Information Technology',
        institution: 'Simad University'
      },
      {
        date: '2024',
        degree: 'FulStack .NET Cloud Software Developer',
        institution: 'Humber Collage'
      },
      {
        date: '2009 - 2012',
        degree: 'High School',
        institution: 'Horsed Secondary School'
      }
    ];
  }

  getReferences() {
    return [
      {
        name: 'Eng Dalmar',
        position: 'CTO / Tabaarak ICT',
        image: 'assets/images/reference-image-1.jpg',
        description: 'A great professional with exceptional skills in project management.'
      },
      {
        name: 'Ali',
        position: 'SG / NIEC',
        image: 'assets/images/reference-image-2.jpg',
        description: 'Highly recommended for teamwork and leadership qualities.'
      },
      {
        name: 'Omar',
        position: 'Client / SOMAID',
        image: 'assets/images/reference-image-3.jpg',
        description: 'A creative developer with an eye for design and functionality.'
      }
    ];
  }

  getContact() {
    return {
      address: '15 Martha Eaton Way, North York, ON',
      phone: '+1416-569-9203',
      email: 'eng.hadow@gmail.com'
    };
  }
}
