import "../../assets/styles/button.css"

function ButtonTwo (props) {
    return(
        <div style={props.objCss}>
            <h2>
                {props.label}
            </h2>
        </div>
    )
}

export default ButtonTwo;