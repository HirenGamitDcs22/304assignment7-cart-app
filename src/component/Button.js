import moduleName from 'module'

var Button=({ title })=>{
    return (
        <button>{title}</button>
    )
}

var defaultProps = {
    title: 'Button'
}

export default Button