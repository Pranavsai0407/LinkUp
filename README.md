<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->
<!-- PROJECT LOGO -->
<br />


## Table of Contents
- [Features](#features)
- [About Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Prerequisites](#Prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## Features
- User Authentication
  - Registration: Allows users to create an account with email, password, and username.
  - Login: Users can log into their accounts with a valid email and password combination.
  - Logout: Securely log out from the application, invalidating the JWT token.
- Chat Functionality
  - Real-Time Messaging: Instant communication between users via WebSockets.
  - Personal Messaging: Private one-on-one chats between users.
  - Group Chat Support: Multiple users can join and interact in group chats.
  - Emoji Support: Users can add emojis to their messages for expressive conversations.
- AI Chatbot Integration
  - Gemini-1.5 Flash API: Users can interact with an AI chatbot for assistance or general conversation.
  - Chatbot Suggestions: Provides suggestions or answers to user queries in real-time.
- File Handling
  - File Upload: Users can upload and share files and images in chats (via Multer).
  - Profile Picture Upload: Upload a profile picture during registration or update it later.
  - File Download: Users can easily download shared files directly from the chat.
- Message Management
  - Message History: Users can view their chat history, either in personal chats or group conversations.
- User Profile
  - Profile Page: Displays user details like name, email, and profile picture.
  - Update Profile: Users can update their profile information and upload a new profile picture.
  - Contacts and User List
  - Contact List: Users can view a list of their contacts and start conversations.
- Channels (Group Chats)
  - Create Channels: Users can create group chats (channels) and add members.
  - View Channels: List all channels the user is a part of.
- Real-Time Features
  - Sockets for Real-Time Updates: All chats, typing indicators, and presence status are updated in real-time via Socket.io.
- Security
  - JWT Authentication: Protects routes and ensures secure access to resources.
  - Password Hashing: All passwords are hashed before being stored in the database for security.
- Additional Features
  - Search: Users can search for contacts, group chats, and chat messages.
  - Responsive Design: The entire application is fully responsive and optimized for desktop and mobile devices.
  - Error Handling: Proper error messages for invalid login, registration, or message send failures.



### Technologies Used

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.


* [![React][React.js]][React-url]
* ![Node.js](https://nodejs.org/static/images/logo.svg)
- Node.js

![Express.js](https://expressjs.com/images/express-facebook-share.png)
- Express.js

![MongoDB](https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png)
- MongoDB

![Docker](https://pbs.twimg.com/profile_images/1749553035133566976/hMA0FbDk_400x400.jpg)
- Docker
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.



### Prerequisites

Make sure you have the following software installed on your local machine:
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) (Optional, for running the judge in a containerized environment)

  

### Installation


1. **Clone the repository**
    ```bash
    git clone https://github.com/Pranavsai0407/LinkUp.git
    cd LinkUp
    ```

2. **Install backend dependencies**
    ```bash
    cd ./server
    npm install
    ```
3. **Back to Root Directory**
    ```bash
    cd ..
    ```
4. **Install frontend dependencies**
    ```bash
    cd ./client
    npm install
    ```

5. **Set up environment variables**
    Create a `.env` file in the `server` directory and add your configuration details:
    ```
    PORT=5000
    JWT_KEY="your-jwt-key"
    ORIGIN="http://localhost:5173"
    DATABSE_URL="your-mongodDb-url"
    ```

6. **Set up environment variables**
    Create a `.env` file in the `client` directory and add your configuration details:
    ```env
    VITE_SERVER_URL="http://localhost:5000"
    VITE_SOCKET_URL="http://localhost:3001"
    VITE_API_KEY="Your-Google-AI-API-KEY"
    ```

7. **Start the backend server**
    ```bash
    cd ./server
    nodemon index.js or node index.js
    ```

8. **Start the frontend server**
    ```bash
    cd ./client
    npm run dev
    ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Project Structure

```plaintext
├── backend/
│   ├── controllers/
│   ├── databases/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── Dockerfile
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── .env
│   ├── Dockerfile
│   ├── index.html
│   ├── .eslintrc.cjs
│   ├── vite.config.js
│   └── package.json
└── README.md
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

- Name: 
  - PADAMATI PRANAV SAI
- Email:
  - 2201ai49_padamati@iitp.ac.in
- University:
  - IIT Patna
- Dept:
  - Artificial Intelligence and Data science


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com


