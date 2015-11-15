# About this folder
This folder will hold all of your **flux** actions if you are using flux.
You can include actions into your components or stores like this:

```javascript
import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'
import request from'superagent';
import jsonp from 'superagent-jsonp';

var AppActions = {
  pullStopData(lat, long){
    var runDispatch = function(data) {
		AppDispatcher.handleNewAction({
	    	actionType:AppConstants.PULL_DATA,
	    	item: data.body
    	})	
    };

    request
   .get('http://api.hrtb.us/api/stops/near/' + lat + '/' + long + '/')
   .use(jsonp)
   .end(function(err, res){
      runDispatch(res);
    });  
  },
```
