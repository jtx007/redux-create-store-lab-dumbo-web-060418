export default function createStore(reducer) {
  // add your code here
  let state
  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  function  getState() {
    return state
  }

  newFunction();


  return {
    getState,
    dispatch
  }




  function newFunction() {
    dispatch({ type: '@@INIT' });
  }
}

function render() {
  const container = document.getElementById('container');
}
