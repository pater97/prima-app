import "../../assets/styles/button.css"

function Button (props) {
    return(
        <div style={
            {
                backgroundColor: props.bgColor,
                width: props.width,
                height: props.height
            }
        }>
            <h2>
                {props.label}
            </h2>
        </div>
    )
}

export default Button;