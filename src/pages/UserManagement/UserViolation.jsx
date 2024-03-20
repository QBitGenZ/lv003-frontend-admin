const UserViolation = ({ title, date }) => {
    return (
        <div id='UserViolation'>
            <div className='violation-title'>{title}</div>
            <div className='violation-date'>{date}</div>
        </div>
    );
};

export default UserViolation;
