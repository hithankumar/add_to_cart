import { Component, OnInit } from '@angular/core';
import { IScrumboardItems } from './scrumBoardItems';
import { WelcomeService } from './welcome.service';

@Component({
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent implements OnInit {
    public pageTitle: string = 'Scrum board';
    scrumBoardItems: IScrumboardItems[];
    errorMessage : string;

    constructor(private _welcomeService: WelcomeService){}
    ngOnInit(): void{
        this._welcomeService.getScrumBoardItems()
                            .subscribe(scrumItems => this.scrumBoardItems = scrumItems,
                                        error => this.errorMessage = <any>error);
    };
}
