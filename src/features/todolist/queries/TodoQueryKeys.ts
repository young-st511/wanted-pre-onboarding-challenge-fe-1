export const TodoKeys = {
  Todos: ["todo"],
  TodoId: function (id: string) {
    return [this.Todos, id];
  },
} as const;
