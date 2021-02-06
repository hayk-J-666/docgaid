import {rerenderEntireTree} from './../render';

let state = {
    y: 1,
}

export let rerender = () => {
rerenderEntireTree(state);
state.y = state.y + 1
}
export default state;