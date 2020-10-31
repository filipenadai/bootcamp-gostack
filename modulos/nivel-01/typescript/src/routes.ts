import { Request, Response } from 'express';
import createUser from './services/createUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'f.nadai05@gmail.com',
        password: '123456',
        techs: [
            'Node.JS',
            'React.JS',
            'React Native',
            { title: 'JavaScript', experience: 100 }
        ],
    });
    return response.json({ message: 'Hellow World' });
}