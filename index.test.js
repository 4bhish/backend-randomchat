import request from 'supertest';
import { app, server } from './index.js';

describe('GET /api/random-response', () => {

    beforeAll(() => {
        app.listen(8000, () => {
            console.log('Server started on port 8000');
        });
    });

    test('should respond with a string', async () => {
        const response = await request(app).get('/api/random-response');

        console.log('Response:', response.body);

        expect(response.status).toBe(200);
        expect(response.body.statusCode).toBe(200);
        expect(response.body.message).toBe('success');
        expect(typeof response.body.response).toBe('string');
    });

    test('should respond with random sentences', async () => {
        const numRequests = 100;
        const responses = [];

        for (let i = 0; i < numRequests; i++) {
            const response = await request(app).get('/api/random-response');
            responses.push(response.body.response);
        }

        const uniqueResponses = new Set(responses);

        console.log('Unique Responses:', uniqueResponses);

        expect(uniqueResponses.size).toBeGreaterThan(1);

        const expectedSentences = [
            "The sky is blue because it's a reflection of the ocean.",
            "Have you ever tried turning it off and on again?",
            "Why do birds suddenly appear, every time you are near?",
            "The mitochondrion is the powerhouse of the cell.",
            "To be or not to be, that is the question.",
            "42 is the answer to life, the universe, and everything.",
            "I can haz cheezburger?",
            "Did you know that the Eiffel Tower can be 15 cm taller during the summer?",
            "Computers make very fast, very accurate mistakes.",
            "Why is a raven like a writing desk?"
        ];

        uniqueResponses.forEach(response => {
            expect(expectedSentences).toContain(response);
        });
    });

    afterAll( () => server.close(() => console.log("Server has been shutdown")));
});
