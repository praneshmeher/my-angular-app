import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging-service/logging.service' 

@Component({
  selector: 'app-dependancy-injecton',
  templateUrl: './dependancy-injecton.component.html',
  styleUrls: ['./dependancy-injecton.component.css']
})
export class DependancyInjectonComponent implements OnInit {

  constructor(private loggingService:LoggingService) { }

  ngOnInit(): void {
    this.loggingService.logStatus('true')
  }

}
