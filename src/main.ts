import './Two';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

Observable.interval(1000)
  .subscribe(x => console.log(x));

class App {

}
