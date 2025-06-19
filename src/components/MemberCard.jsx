import { useNavigate } from "react-router-dom"

function MemberCard({ member, onDelete }) {

const navigate = useNavigate()

    const onClick = (e) => {
        const { name, id } = e.target
        switch (name) {
            case "view":
                navigate(`/members/view/${id}`)
                break
            case "edit":
                navigate(`/members/edit/${id}`)
                break
            case "delete":
                onDelete(id)
                navigate(`/members`)
                break
            default:
                break
        }
    }

    return (
        <>
            <tr id={member.id}>
                <td>{member.id}</td>
                <td>{member.member}</td>
                <td>
                    <button type="button" onClick={onClick} id={member.id} name="view" className="btn red">
                        👓
                    </button>
                </td>
                <td>
                    <button type="button" onClick={onClick} id={member.id} name="edit" className="btn orange">
                        ✏️
                    </button>
                </td>
                <td>
                    <button type="button" onClick={onClick} id={member.id} name="delete" className="btn yellow">
                        🚫
                    </button>
                </td>
            </tr>
        </>
    )
}

export default MemberCard
