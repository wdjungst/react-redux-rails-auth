const user = (state = {}, action) => {
  switch(action.type) {
    case 'USER':
      let { id, role, first_name, last_name } = action;
      return { id, role, first_name, last_name };
    default:
      return state;
  }
}

export default user;
