// rafce 引入模板
// prot 引入类型 snippets
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"
import Button from "./Button"

// 读取所有属性值
const Header = ({ title, onAdd, showAddTask }) => {
    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === "/" && (
                <Button
                    color={showAddTask ? "red" : "green"}
                    text={showAddTask ? "Close" : "Add"}
                    onClick={onAdd}
                />
            )}
        </header>
    )
}

// 设置默认属性
Header.defaultProps = {
    title: "Task Tracker",
}

// 设置属性类型
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// 使用 style 属性配置样式
{
    /* <h1 style={headingStyle}>{props.title}</h1>
const headingStyle = {color: "red", backgroundColor: "#888888"} */
}

export default Header
