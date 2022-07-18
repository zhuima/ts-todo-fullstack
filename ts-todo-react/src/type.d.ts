interface ITodo {
  _id: string
  name: string
  description: string
  status: boolean
  createdAt?: Date
  updatedAt?: Date
}

interface TodoProps {
  todo: ITodo
}

type ApiDataType = {
  message: string
  status: string
  data: ITodo[]
  todo?: ITodo
}
