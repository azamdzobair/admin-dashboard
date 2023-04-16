import React from 'react';

const AdminUser = ({ setShow, setAdmin, admin, }) => {
    const handleRemove = (id) => {
        const arr = admin.filter((user) => user.id !== id);
        setAdmin(arr);

    }
    return (
        <div >
            <h1>
                AdminUser
            </h1>
            <article>
                {
                    admin?.map((user) => (
                        <div className="cart_box" key={user.id}>
                            <div className="cart_img">
                                <img src={user.img} alt='' />
                                <p>{user.name}</p>
                            </div>

                            <div>

                                <button onClick={() => handleRemove(user.id)} >Remove</button>
                            </div>
                        </div>
                    ))}

            </article>

        </div>


    );
};

export default AdminUser;