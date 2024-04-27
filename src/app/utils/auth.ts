type User = {
    username: string;
    password: string;
  };
  
  const users: User[] = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
  ];
  
  export const authenticate = (username: string, password: string): boolean => {
    return users.some(user => user.username === username && user.password === password);
  };
  