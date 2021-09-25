import music_player from "../assets/images/MusicPlayer.png";
import assessment_system from "../assets/images/AssessmentSystem.png";
import qna from "../assets/images/QnA.png";
import portal from "../assets/images/Portal.png";
import cricscore from "../assets/images/Cricscore.jpg";
import insta_clone from "../assets/images/InstaClone.png";
import tic_tac_toe from "../assets/images/TicTacToe.png";
import snake_game from "../assets/images/SnakeGame.png";

const projects = [
  {
    title: "Online Music Player",
    technology: "MEAN Stack(MongoDb, ExpressJs, Angular, NodeJs)",
    description: "An Online Music Player web application.",
    points: [
      {
        name: "Features",
        all_points: [
          "Login and Signup",
          "Upload songs by Admin",
          "Listen songs",
          "View Playlists",
          "Create Custom Playlists",
        ],
      },
    ],
    links: {
      github: "https://github.com/ayanshaikh18/SDP_Online_Assessment_System",
      demo: "",
    },
    poster: music_player,
  },
  {
    title: "Online Assessment System",
    technology: "Django",
    description: "Web application to automate the Assessment",
    points: [
      {
        name: "Functionalities",
        all_points: [
          "Login and Signup",
          "Manage assessments using Virtual classrooms",
          "Automate the Lab Grading Process",
          "Compile & Run code",
          "Create & View Blogs",
        ],
      },
    ],
    links: {
      github: "https://github.com/ayanshaikh18/SDP_Online_Assessment_System",
      demo: "",
    },
    poster: assessment_system,
  },
  {
    title: "Instagram Clone",
    technology: "MERN Stack(MongoDb, ExpressJs, React, Nodejs)",
    description: "Instagram clone web application created using MERN stack.",
    points: [
      {
        name: "",
        all_points: [
          "Image upload and hosting is done using Firebase bucket",
          "MongoDb Atlas is used to store all the users' data",
          "Whole UI is designed using CSS only without any CSS framework or Library.",
        ],
      },
    ],
    links: {
      github: "https://github.com/ayanshaikh18/insta-clone",
      demo: "https://insta-clone-18.herokuapp.com/",
    },
    poster: insta_clone,
  },
  {
    title: "QnA - Doubt Solving Forum",
    technology: "ASP .NET core",
    description: "Online Web application for CSE community to discuss any issue or doubts",
    points: [
      {
        name: "Functionalities",
        all_points: [
          "Login and Signup",
          "Post Questions",
          "View answers & vote them based on correctness or effectiveness",
          "Markdown editor support for presenting questions in effective manner",
        ],
      },
    ],
    links: {
      github: "https://github.com/ayanshaikh18/DoubtSolvingForum",
      demo: "",
    },
    poster: qna,
  },
  {
    title: "University Portal",
    technology: "ASP .NET core",
    description: "University Portal for Admin, Faculties and Students of University",
    points: [
      {
        name: "Admin & Faculty Functionalities",
        all_points: [
          "Manage subjects",
          "Provide subjects' access to respective faculties",
          "Manage students' results & submissions",
        ],
      },
      {
        name: "Admin Functionalities",
        all_points: [
          "Manage Subjects",
          "Provide subjects' access to respective faculties",
        ],
      },
    ],
    links: {
      github: "https://github.com/ayanshaikh18/Online-Student-Portal",
      demo: "",
    },
    poster: portal,
  },
  {
    title: "Cricscore",
    technology: "React Native",
    description: "Mobile application to get Cricket updates",
    points: [
      {
        name: "Features",
        all_points: [
          "View Scores of Matches including Past and Live Matches",
          "Schedule and list of upcoming matches",
          "Match Details like venue & Man Of the Match, Winner of the Match",
        ],
      },
    ],
    links: {
      github: "https://github1s.com/ayanshaikh18/Cricscore-React-Native",
      demo: "",
    },
    poster: cricscore,
  },
  {
    title: "Snake Game",
    technology: "HTML, Bootstrap, Javascript",
    description: "Snake game developed using HTML, CSS & Javascript",
    points: [
    ],
    links: {
      github: "https://github.com/ayanshaikh18/snake-game",
      demo: "https://ayanshaikh18.github.io/snake-game/",
    },
    poster: snake_game,
  },
  {
    title: "Tic Tac Toe",
    technology: "HTML, Bootstrap, Javascript",
    description: "Simple Tic Tac Toe game developed using HTML & Javascript",
    points: [
    ],
    links: {
      github: "https://github.com/ayanshaikh18/tic-tac-toe",
      demo: "https://ayanshaikh18.github.io/tic-tac-toe/",
    },
    poster: tic_tac_toe,
  },
];

export default projects;
