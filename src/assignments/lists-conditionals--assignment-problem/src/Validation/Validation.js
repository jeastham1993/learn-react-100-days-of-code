const validation = (props) => {

    let outputText = null;

    if (props.textLength > 5){
        outputText = 'Text too long';
    }
    else if (props.textLength < 5) {
        outputText = 'Text too short';
    }

    return (
        outputText
    )
}

export default validation;