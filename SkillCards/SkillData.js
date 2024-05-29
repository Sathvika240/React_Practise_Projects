export default function Skill({skill,level,color}){
    
    return(
    <div className="skill-list">
        <button className="skill" style={{background:color}}>
            {skill}
            <span>
            {level ==="advanced" ? "🤣" :(level ==="beginner" ? "😥" : (level ==="intermediate" ?"😁" :undefined))}
            {/* {level==="advanced" && "🤣"}
            {level==="beginner" && "😥"}
            {level==="intermediate" && "😁"} */}
            </span>
        </button>
    </div>
    );
}