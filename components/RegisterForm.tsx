const RegisterForm = () => {
    return (
        <form className="container">
            <label htmlFor="email">Email address</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                required
            />
            <small>Well never share your email with anyone else.</small>

            <div className="grid">
                <label htmlFor="password">
                    Password
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                </label>
                <label htmlFor="email">
                    Repeat Password
                    <input
                        type="password"
                        id="repeatpassword"
                        name="repeatpassword"
                        placeholder="Password"
                        required
                    />
                </label>
            </div>

            <button type="submit">Register</button>
        </form>
    );
};
export default RegisterForm;
