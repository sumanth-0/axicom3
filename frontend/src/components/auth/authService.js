const mockUser = {
  email: 'user@example.com',
  password: '123' // Use a secure password in a real application
};

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === mockUser.email && password === mockUser.password) {
        resolve({ email: mockUser.email });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000); // Simulate network delay
  });
};

export const logout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000); // Simulate network delay
  });
}; 