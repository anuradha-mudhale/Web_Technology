function StudentList({stud})
{
        return(
            <>
                <ul>
                    {
                    stud.map((student)=>(
                        <li key={student.id} >
                            <p>ID:{student.id}</p>
                            <p>Name:{student.name}</p>
                            <p>Age:{student.age}</p>
                            <p>course:{student.course}</p>
                        </li>
                       ))
                    }
               </ul>
            </>
        );
}
export default StudentList;