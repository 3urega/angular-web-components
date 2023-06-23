import { Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import * as componentInterfaces from './interfaces';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store/reducers/app.reducer';
import { takeUntil } from 'rxjs/operators';
import { NotificationService } from 'app/services/notifications.service';

@Component({
  standalone: true,
  selector: 'app-bgimage',
  templateUrl: './bgimage.component.html',
  // imports: [],
  styleUrls: ['./bgimage.component.scss']
})
export class BgimageComponent implements OnInit, OnDestroy {
  public ngDestroyed$ = new Subject();
  public lang: string;
  @Input() public items?: Array<componentInterfaces.iconItem>;
  
  @Input() public bgImage: string;
  @Input() public subtitle: string;
  @Input() public title: string;
  @Input() public text: string;

  @Input() public titleImage?: string;
  @Input() public button?: componentInterfaces.Button;
  @Input() public options?: componentInterfaces.Options;
  // Generic button click event 
  @Output() public buttonClicked: EventEmitter<string> = new EventEmitter();

  constructor(
    private store: Store<AppState>,
    private notifications: NotificationService
  ) { }

  ngOnInit() {
    // Tipo de componente por defecto
    this.options = {
      componentType: 
        this.options && this.options.componentType ? 
        this.options.componentType : 
        componentInterfaces.componentType.onlyTitle,
      iconType:
        this.options && this.options.iconType ? 
        this.options.iconType :
        componentInterfaces.iconType.icon
    }

    this.store.select(state => state.utils.lang).pipe(
      takeUntil(this.ngDestroyed$)
    ).subscribe((lang: string) => {
      this.lang = lang;
    });
  }
  
  public buttonClick() {
    // TODO: borrar popup
    this.notifications.warn('Pàgina web en construción')
    // this.buttonClicked.emit('app-bgimage-click');
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

}
