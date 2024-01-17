// 引入组件
// 引入 useState
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
    // 定义是否出现新增任务框
    const [showAddTask, setShowAddTask] = useState(false)

    // 定义一个 useState
    // 变量 + 设置变量的方法
    // 默认值
    const [tasks, setTasks] = useState([])

    // 定义一个 useEffect
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])

    // 发送请求获取任务列表
    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks")
        const data = await res.json()
        return data
    }

    // 发送请求获取任务列表
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }

    // 新增任务
    const addTask = async (task) => {
        const res = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        })

        const data = await res.json()

        setTasks([...tasks, data])

        // 生成随机数 id
        // const id = Math.floor(Math.random() * 10000) + 1
        // 通过 useState 新增任务
        // const newTask = { id, ...task }
        // setTasks([...tasks, newTask])
    }
    // 删除任务
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE",
        })
        // 设置 useState 数据
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // 设置任务提醒
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        })

        const data = await res.json()

        setTasks(
            tasks.map((task) => (task.id === id ? { ...task, reminder: !data.reminder } : task))
        )
    }

    return (
        <Router>
            <div className="container">
                <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {showAddTask && <AddTask onAdd={addTask} />}
                                {tasks.length > 0 ? (
                                    <Tasks
                                        tasks={tasks}
                                        onDelete={deleteTask}
                                        onToggle={toggleReminder}
                                    />
                                ) : (
                                    "No Tasks To Show"
                                )}
                            </>
                        }
                    />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
