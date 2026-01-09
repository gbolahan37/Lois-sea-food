import './team.css'


const TeamCard = () => {
    return(
        <div className="team-card">
            <img src="/download (1).jpg" alt="" />

        </div>
    )
}

function Team() {
  return (
    <div className='team'>
        <div className="team-header">
            <h3>Meet Our Team</h3>
            <p>The talented people behind your unforgettable dining experience</p>
        </div>
        <div className="team-details">
            <TeamCard />
        </div>
    </div>
  )
}
export default Team