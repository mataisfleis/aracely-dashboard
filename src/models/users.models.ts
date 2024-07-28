export interface User {
	id: number;
	name: string;
	email: string;
	password: string;
}

const users: Array<User> = [
	{
	  id: 1,
	  name: 'John Doe',
	  email: 'john.doe@test.com',
	  password: 'hola12345gaga',
	},
	{
	  id: 2,
	  name: 'Jane Doe',
	  email: 'jane.doe@test.com',
	  password: 'secret',
	},
	{
	  id: 3,
	  name: 'Jack Doe',
	  email: 'jack.doe@test.com',
	  password: 'password',
	},
  ];
