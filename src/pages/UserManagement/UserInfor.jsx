const UserInfor = ({
    userID,
    userName,
    userPhone,
    userGender,
    userAge,
    onClick,
}) => {
    return (
        <tr id={userID} onClick={onClick}>
            <td>{userID}</td>
            <td>{userName}</td>
            <td>{userPhone}</td>
            <td>{userGender}</td>
            <td>{userAge}</td>
        </tr>
    );
};

export default UserInfor;
