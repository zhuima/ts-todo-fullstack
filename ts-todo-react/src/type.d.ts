interface ITodo {
  _id: string
  name: string
  description: string
  status: boolean
  createdAt?: Date
  updatedAt?: Date
}

type TodoProps = {
  todo: ITodo
}

type ApiDataType = {
  message: string
  status: string
  todos: ITodo[]
  todo?: ITodo
}
