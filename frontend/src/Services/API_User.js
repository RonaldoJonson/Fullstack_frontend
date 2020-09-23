import SimpleRestAPI from './API';

export const Login = (email, password) => {
    const api = new SimpleRestAPI(); 

    console.log(email, password);

    const body = {
        "email": email,
        "password": password
    }
    
    api.PostData('/login', body, (response) => {
        console.log(response);
    })
}


export const Register = (name, email, password) => {
    const api = new SimpleRestAPI(); 
    
    console.log(name, email, password);

    const body = {
        "name": name,
        "email": email,
        "password": password
    }

    api.PostData('/signup', body, (response) => {
        console.log(response);
    })
}