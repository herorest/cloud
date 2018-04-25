export function actionCreator(type){
    return function(data){
    	return {
    	    type: type,
    	    data: data
    	}
    }
}
