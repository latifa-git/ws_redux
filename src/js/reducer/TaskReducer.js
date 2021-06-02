import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../type";

const initialState = {
  taskList: [
    {
      id: 0,
      description: "deep learning",
      isDone: true,
    },
    {
      id: 1,
      description: "cyber_security",
      isDone: true,
    },
    {
      id: 2,
      description: "administration linux",
      isDone: true,
    },
    {
      id: 3,
      description: "Data science",
      isDone: false,
    },
  ],
};

const TaskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, taskList: { ...state.taskList, payload } };
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((el) => el.id !== payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        taskList: state.taskList.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
case EDIT_TASK:
    return {...state, taskList:state.taskList.map(el =>el.id === payload.id ? {...el,description:payload.value}: el) }


    default:
      return state;
  }
};
export default TaskReducer;
