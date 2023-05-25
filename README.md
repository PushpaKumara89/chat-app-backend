# Chat App Backend

Short description of your project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chat-app-backend.git

2. Install the dependencies:

   ```bash
   cd chat-app-backend 
   npm install 

3. Set up environment variables:

- Create a .env file in the root directory.
- Add the following variables in the .env file:
   ```bash
   PORT=3000
  
You can customize the PORT value to the desired port number.

4. Start the server:

   ```bash
   npm start

## Usage

- The server provides a REST API for chat functionality.
- Socket.IO is used for real-time communication between clients and the server.
- Clients can join a specific room and exchange messages within that room.

## WebSocket Events

- `join`:

  - Join a room.
  - Data:
    - `room`: The room name (string).
    - `user`: The user name (string).
  - Emits:
    - `user joined`: Notifies other clients in the room about a new user joining.
  - `message`:

    - Send a message in a room. 
    - Data:
      - room: The room name (string). 
      - user: The user name (string). 
      - message: The message content (string). 
    - Emits:
      - new message: Broadcasts the new message to all clients in the room.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, 
please open an issue or a pull request in this repository.

## License

This project is licensed under the MIT License.

