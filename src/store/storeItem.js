export const ACTION_TYPES = {
  INSERT_DATA: "insertData",
  DELETE_DATA: "deleteData",
  MODIFY_DATA: "modifyData",
  ISDONE_DATA: "isDoneData",
};
export const initState = {
  count: 0,
  dataList: [],
};
export const insertData = (dataItem) => {
  return {
    type: ACTION_TYPES.INSERT_DATA,
    payload: dataItem,
  };
};

export const deleteData = (id) => {
  return {
    type: ACTION_TYPES.DELETE_DATA,
    payload: { id },
  };
};
export const modifyData = (id, localContents) => {
  return {
    type: ACTION_TYPES.MODIFY_DATA,
    payload: { id, localContents },
  };
};
export const isDoneData = (id, isDone) => {
  return {
    type: ACTION_TYPES.ISDONE_DATA,
    payload: { id, isDone },
  };
};
const storeItem = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INSERT_DATA: {
      const newDataItem = {
        ...action.payload,
      };
      return {
        count: state.count + 1,
        dataList: [...state.dataList, newDataItem],
      };
    }
    case ACTION_TYPES.DELETE_DATA: {
      return {
        count: state.count,
        dataList: state.dataList.filter((item, idx) => {
          return item.id !== action.payload.id;
        }),
      };
    }
    case ACTION_TYPES.MODIFY_DATA: {
      const localContents = action.payload.localContents;
      return {
        count: state.count,
        dataList: state.dataList.map((item, idx) => {
          if (item.id === action.payload.id) {
            return { ...item, contents: localContents };
          }
          return item;
        }),
      };
    }
    case ACTION_TYPES.ISDONE_DATA: {
      const isDone = action.payload.isDone;
      return {
        count: state.count,
        dataList: state.dataList.map((item, idx) => {
          if (item.id === action.payload.id) {
            return { ...item, isDone: !isDone };
          }
          return item;
        }),
      };
    }
    default:
      return state;
  }
};
export default storeItem;
