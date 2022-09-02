import "../../assets/styles/input.css"

function Input(props) {

    function focus() {
        props.callBack()
    }

    function blur() {
        props.callBackBlur()
    }
    // in questo caso intrappolo l'evento del cambiamento che avrà al suo interno anche il valore dell'input
    function change(event) {
        // qui specifico che voglio estrapolare il valore dell'input
        props.callBackChange(event.target.value)
    }

    return (
        <div className="inputbox">
            <input
                type={props.type}
                style={props.objCss}
                onFocus={focus}
                onBlur={blur}
                onChange={change}
                placeholder={props.place}
            />
        </div>
    )
}

export default Input;