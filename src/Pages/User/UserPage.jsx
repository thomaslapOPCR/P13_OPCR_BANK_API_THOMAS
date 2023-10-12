import React, { useEffect,useState  } from 'react';
import styles from "../../style/main.module.css"
import accountData from "../../data/appData.json"
import Account from "../../Components/Account/Account.jsx";
import {useNavigate} from 'react-router-dom';
import {updateProfiles} from "../../services/requestApi";
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../store/userSlice';

const UserPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.token);
    const [isEditing, setIsEditing] = useState(false);
    const user = useSelector((state) => state.user.user);

    const [lastName, setLastName] = useState(user.lastName);
    const [firstName, setFirstName] = useState(user.firstName);

    const [error, setError] = useState('');

    const isAuthenticated = useSelector((state) => state.user.authenticated);

    useEffect( () => {
        if (!isAuthenticated) {
            navigate("/Sign-in");
        }
    }, [isAuthenticated,navigate]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {

        const trimFirstName = firstName.trim();
        const trimLastName = lastName.trim();

        if (trimFirstName === '' || trimLastName === '') {
            setError('First name and last name cannot be empty.');
            return;
        }

        if (/[^a-zA-Z\s]/.test(trimFirstName) || /[^a-zA-Z\s]/.test(trimLastName)) {
            setError('First name and last name should only contain letters and spaces.');
            return;
        }

        dispatch(updateProfile({ firstName, lastName }));
        await updateProfiles(token, { firstName, lastName });

        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setIsEditing(false);
    };

    return (
        <div className={styles['bg-dark-main']}>
            <div className={styles.header}>
                <h1>
                    Welcome back<br />
                    {isEditing ? (
                        <form className={styles.form}>
                            <div className={styles.formInputs}>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <p className={styles.error}>{error}</p>
                            <div className={styles.formButton}>
                                <button type="button" onClick={handleSaveClick}>Save</button>
                                <button type="button" onClick={handleCancelClick}>Cancel</button>
                            </div>
                        </form>
                    ) : (
                        `${firstName} ${lastName}`
                    )}
                </h1>
                {!isEditing && (
                    <button className={styles['edit-button']} onClick={handleEditClick}>
                        Edit Name
                    </button>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accountData.accounts.map((account, index) => (
                <Account
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </div>
    );
};


export default UserPage;