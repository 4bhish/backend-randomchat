# Backend Chatbot

Backend Chatbot is a Node.js application that provides random sentences through a RESTful API endpoint using Express.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your/repository.git
   cd backend-chatbot

### test
npm test

## Usage

1. **Start the Server:**

   Start the development server using the following command:

   ```bash
   npm run dev

## API: Request Random Sentences

To retrieve a random sentence from the backend chatbot, send a GET request to the following endpoint:

## Dependencies

This project relies on the following npm packages:

- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [Cors](https://www.npmjs.com/package/cors): Connect/Express middleware that can be used to enable CORS with various options.
- [Jest](https://jestjs.io/): JavaScript Testing Framework.
- [Supertest](https://www.npmjs.com/package/supertest): Super-agent driven library for testing HTTP servers.

## Example Response

When you send a GET request to `/api/random-response`, you will receive a JSON response containing a random sentence:

{
  "statusCode": 200,
  "message": "success",
  "response": "The sky is blue because it's a reflection of the ocean."
}


## License

This project is licensed under the ISC License. See the LICENSE file for details.








