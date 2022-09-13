export const ACTION_TYPES = {
  INSERT_DATA: "insertData",
  DELETE_DATA: "deleteData",
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
const storeItem = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INSERT_DATA: {
      const newDataItem = {
        ...action.payload,
      };
      return {
        count: state.count + 1,
        dataList: [newDataItem, ...state.dataList],
      };
    }
    case ACTION_TYPES.DELETE_DATA: {
      return {
        count: state.count - 1,
        dataList: state.dataList.filter((item, idx) => {
          return item.id !== action.payload.id;
        }),
      };
    }
    default:
      return state;
  }
};
export default storeItem;
