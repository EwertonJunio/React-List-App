const initialState = {
    todos: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADICIONAR_ITEM":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.payload.id,
                        texto: action.payload.texto,
                        concluido: false,
                    },
                ],
            };
        case "ALTERNAR_ITEM":
            return {
                ...state,
                todos: state.todos.map((item) =>
                    item.id === action.payload.id ? {...item, concluido: !item.concluido } :
                    item
                ),
            };
        case "DELETAR_ITEM":
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload.id),
            };
        default:
            return state;
    }
};

export default reducer;