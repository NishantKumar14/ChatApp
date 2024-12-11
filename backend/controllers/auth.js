export const userSignup = async (req, res) => {
    try {
        const {fullName, userName, password, confirmPassword, email, gender} = req.body;
    } catch (error) {
        
    }
};

export const userLogin = async (req, res) => {
    res.send('userLogin page');
};

export const userLogout = async (req, res) => {
    res.send('userLogout page');
};