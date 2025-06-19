

function GuestFieldInputButtons({ addInput, removeInput }) {

const onClick = (e) => {
    const { name } = e.target
    switch(name) {
        case "add":
            addInput()
            break;
        case "remove":
            removeInput()
            break
        default:
            break
    }
}

return (
<>
<button type="button" id="add" name="add" onClick={onClick}> + </button>
<button type="button" id="remove" name="remove" onClick={onClick}> - </button>
</>
)}

export default GuestFieldInputButtons
