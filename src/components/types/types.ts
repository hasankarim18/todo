export type TTodoState = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: string;
};

export type TTodoInitialState = {
  todos: TTodoState[];
};
