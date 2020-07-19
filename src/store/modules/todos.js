const state = {
    todos: []
};

const getters = {
    getTodos: (state) => state.todos
};

const mutations = {
    ADD_TODO: (state, payload) => {
        const newTask = {
            id: payload.newId,
            task: payload.task,
            completed: false,
        };
        state.todos.unshift(newTask);
    },
    TOGGLE_TODO: (state, payload) => {
        const item = state.todos.find((todo) => todo.id === payload);
        item.completed = !item.completed;
    },
    DELETE_TODO: (state, payload) => {
        state.todos = state.todos.filter((todo) => todo.id !== payload);
    }
};

const actions = {
    addTodo: (context, payload) => {
        context.commit("ADD_TODO", payload);
    },
    toggleTodo: (context, payload) => {
        context.commit("TOGGLE_TODO", payload);
    },
    deleteTodo: (context, payload) => {
        context.commit("DELETE_TODO", payload);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};