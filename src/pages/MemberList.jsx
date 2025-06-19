import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import MemberContext from "../contexts/MemberContext"
import MemberCard from "../components/MemberCard"

function MemberList() {
    const { members } = useContext(MemberContext)

const navigate = useNavigate()
    
const memberList = members.map(m => (
    <MemberCard key={m.id} member={m} />
))

return (
<>
<button type="button" onClick={() => {navigate('/members/new')}}>Create New Member</button>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>VIEW</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </tr>
        </thead>
        <tbody>
            {memberList}
        </tbody>
    </table>
</>
)}

export default MemberList
