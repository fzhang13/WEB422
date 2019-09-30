import { Component, OnInit, OnDestroy } from '@angular/core';
import {EmployeeRaw} from '../../data/employeeRaw';
import {EmployeeService} from '../../data/employee.service';
import {PositionService} from '../../data/position.service';
import {Position} from '../../data/position';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  paramSubScription: any;
  employeeSubscription: any;
  getPositionsSubcription: any;
  getPositionsSub: any;
  saveEmployeeSubscription: any;
  employee: EmployeeRaw; 
  positions: Position[];
  successMessage = false;
  failMessage = false;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private positionService: PositionService) { }

  ngOnInit() {
    this.paramSubScription = this.route.params.subscribe((params) => {
      this.employeeSubscription = this.employeeService.getEmployee(params['_id']).subscribe((emp) => {
        this.employee = emp[0];

        this.getPositionsSub = this.positionService.getPositions().subscribe(data => {
          this.positions = data;
        });

      });
    });
  }

  onSubmit() {
    this.saveEmployeeSubscription = this.employeeService.saveEmployee(this.employee).subscribe(() => {
      this.successMessage = true;


      setTimeout(() => {
        this.successMessage = false;
      }, 2500);
    },
      () => {
        this.failMessage = true;
        setTimeout(() => {
          this.failMessage = false;
        }, 2500);
      });
  }

  ngOnDestroy() {
    if (this.paramSubScription) { this.paramSubScription.unsubscribe(); }
    if (this.employeeSubscription) { this.employeeSubscription.unsubscribe(); }
    if (this.getPositionsSub) { this.getPositionsSub.unsubscribe(); }
    if (this.saveEmployeeSubscription) { this.saveEmployeeSubscription.unsubscribe(); }
  }
}

