export function queryReducer(state: any, action: any) {
  console.log("action:",action);
  
  switch (action.type) {
    case 'search': {
      return { products:action.data,currentPage:action.currentPage };
    }
    case 'pagination': {
      return {products:action.data, currentPage:action.currentPage };
    }
   
    default: {
      throw new Error('Unknown action: ' + action.type);
    }
  }
}