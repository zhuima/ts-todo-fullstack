import { Request, Response } from 'express'
import { ITodo } from '../../types/todo'
import Todo from '../../models/todo'

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find()
    res.status(200).json({ todos })
  } catch (error) {
    throw error
  }
}

const getTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo: ITodo | null = await Todo.findById(req.params.id)

    res.status(200).json({
      message: 'Todo retrieved successfully',
      todo,
    })
  } catch (error) {
    throw error
  }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, 'name' | 'description' | 'status'>
    const todo: ITodo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    })

    const newTodo: ITodo = await todo.save()
    const allTodos: ITodo[] = await Todo.find()

    res.status(201).json({
      message: 'Todo added successfully',
      todo: newTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error
  }
}

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req

    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    )

    const allTodos: ITodo[] = await Todo.find()
    res.status(200).json({
      message: 'Todo updated successfully',
      todo: updateTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error
  }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleteTodo: ITodo | null = await Todo.findByIdAndDelete(req.params.id)

    const allTodos: ITodo[] = await Todo.find()

    res.status(200).json({
      message: 'Todo deleted successfully',
      todo: deleteTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error
  }
}

export { getTodos, getTodo, addTodo, updateTodo, deleteTodo }
