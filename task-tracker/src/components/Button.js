import PropTypes from "prop-types"

// 读取属性值并存储至变量
const Button = ({ color, text, onClick }) => {
    return (
        // 定义点击事件
        <button className="btn" style={{ backgroundColor: color }} onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: "steelblue",
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button
