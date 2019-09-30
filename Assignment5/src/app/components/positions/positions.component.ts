import { Component, OnInit } from '@angular/core';
import {PositionService} from '../../data/position.service';
import {Position} from '../../data/position';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  private positions: Position[];
  private getPositionSub;
  private loadingError: boolean = false;

  constructor(private p : PositionService) { }

  ngOnInit() {
    this.getPositionSub = this.p.getPositions()
    .subscribe(
      positions => this.positions = positions,
      function(e) { this.loadingError = true; }
    );
  }

  ngOnDestroy() {
    console.log(this.getPositionSub);
    if(this.getPositionSub != 'undefined') {
      this.getPositionSub.unsubscribe();
    }
  }

}