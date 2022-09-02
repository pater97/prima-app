import "../../assets/styles/button.css"

function ButtonTrhee (props) {
    return(
        <div className={`${props.classCss}`}>
            <h2>
                {props.label}
            </h2>
        </div>
    )
}

export default ButtonTrhee;