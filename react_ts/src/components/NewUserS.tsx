import React, { useState, ChangeEvent, FormEvent } from "react";

const NewUserS = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [flag, setFlag] = useState(false);
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newUser = { name, email }
        console.log(newUser)
    };
    const handleClick = () =>{
        setFlag(true) 
    }
    return (
        <div>
            <fieldset>
                <legend><h2>Create Users</h2></legend>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="name">
                            Name{" "}
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email">
                            Email{" "}
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit" onClick={handleClick}>Create User</button>
                </form>
            </fieldset>
            {
                flag &&
                <fieldset>
                    <legend>
                        <h3>User Info</h3>
                    </legend>
                    <p>Name : {name}</p>
                    <p>Email : {email}</p>
                </fieldset>
            }
        </div>
    );
};

export default NewUserS;
