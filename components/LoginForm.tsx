const LoginForm = () => {
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

            <button type="submit">Login</button>
        </form>
    );
};
export default LoginForm;
