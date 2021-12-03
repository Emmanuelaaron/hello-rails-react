const LOAD_GREETING = 'GREETINGS/LOAD_GREETING';

const initialState = [];

export const loadGreeting = (payload) => ({
  type: LOAD_GREETING,
  payload,
});

export const fetchGreeting = () => async (dispatch) => {
  await fetch('http://localhost:3000/api/v1/greeting', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data.code === 200) {
        dispatch(loadGreeting(data.greeting));
      }
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;