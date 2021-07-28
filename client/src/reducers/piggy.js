let initialState = [
    {
        id: 1,
        money: 50
    },
    {
        id: 2,
        money: 30
    },
    {
        id: 3,
        money: 100
    }
];

const piggy = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default piggy;