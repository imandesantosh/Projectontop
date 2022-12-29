import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ContractsService } from '../../services/contracts.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit, AfterViewInit {
  contracts: any = [];
  title: any = 'ABC';
  date = new Date();
  isOpen = false;
  objectkeys = Object.keys;
  constructor(private contractsService: ContractsService) {}

  ngOnInit(): void {
    this.contractsService.getContracts().subscribe((data) => {
      this.contracts = data;
    });
  }

  ngAfterViewInit(): void {}
}
