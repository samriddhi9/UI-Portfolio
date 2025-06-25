import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  personalProjects = [
    {
      name: 'Portfolio Website',
      description: 'Personal portfolio built with Angular and SCSS.'
    }
  ];

  professionalProjects = [
    {
      name: 'U.S. Chamber of Commerce Foundation',
      description: 'Led the UI development of the TCS USCCF NGO platform from scratch using Angular and HTML. ' +
        'As the sole frontend engineer, I crafted a clean, responsive, and intuitive interface to support the project\'s ' +
        'social impact mission. Built for scalability, accessibility, and seamless cross-device performance.'
    },
    {
      name: 'Order Management System',
      description: 'Built with a dynamic Angular UI, this robust Order Management System empowers ' +
        'e-commerce businesses with full visibility and control over order workflows—from placement ' +
        'to returns—across several marketplaces.'
    },
    {
      name: 'Warehouse Management System',
      description: 'As part of a collaborative frontend team, Contributed to building Anchanto’s Warehouse' +
        ' Management System—an enterprise-grade platform that transforms traditional warehouses into intelligent order' +
        ' fulfillment centers. Leveraging Angular, JavaScript, HTML, and SCSS, we developed a highly responsive UI that ' +
        'delivers real-time inventory visibility and supports scalable logistics and warehousing operations.'
    },
    {
      name: 'Edifecs Value Insight',
      description: 'Sole UI engineer on Edifecs’ value-based payment platform, refactoring and optimizing Angular ' +
        'interfaces for healthcare contract workflows. Improved performance, accessibility, and usability across payer–provider' +
        ' systems to support scalable APMs.'
    }
  ];
}
