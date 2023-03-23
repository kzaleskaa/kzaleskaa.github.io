const projects = [
  {
    image:
      "https://user-images.githubusercontent.com/62251989/227055648-7415cd41-291c-46c3-9b35-5ac10af6afdc.png",
    title: "Image to Text - thesis",
    description: `Engineering thesis "Application of deep learning techniques in
      the image-to-text synthesis". During the research of the topic, three models were realized: RNN + CNN, RNN+CNN+attention mechanism, ViT+GPT. The results were compared using metrics used in the evaluation of natural language processing tasks - BLEU, ROUGE, METEOR.`,
    tags: ["RNN", "CNN", "Transformer", "ViT", "GPT", "attention mechanism"],
    github: "",
    live: "",
  },
  {
    image:
      "https://user-images.githubusercontent.com/62251989/149663561-90e99712-58a9-40c6-9822-69a7092d582b.png",
    title: "Spotify Gesture Controller",
    description:
      "The app allows users to perform basic actions on the Spotify platform (pause, next, like/unlike, previous/next song, volume up/down) by making dynamic hand movements. The application was developed using pyQT, Recurrent Neural Networks (Tensorflow) and OpenCV.",
    tags: ["Python", "Tensorflow", "RNN", "OpenCV", "pyQT"],
    github: "https://github.com/kzaleskaa/spotify-gesture-controller",
    live: "",
  },
  {
    image:
      "https://user-images.githubusercontent.com/62251989/227058825-975a5919-ef2d-405c-8714-05504f3c487a.png",
    title: "Social Media App",
    description:
      "A fullstack web application that allows you to create an account, publish posts, follow other users, like and comment on posts. The application uses a djoser library which is a REST implementation of Django authentication system. JSON Web Token is a selected authentication backend.",
    tags: [
      "Django",
      "React",
      "PostgreSQL",
      "Redux",
      "React Router",
      "Django Rest Framework",
    ],
    github: "https://github.com/kzaleskaa/social-media-app",
    live: "",
  },
  {
    image:
      "https://user-images.githubusercontent.com/62251989/227054897-7c17d3f2-d5b0-43e4-b8fa-b41f70885156.png",
    title: "Coffeeroasters Subscription Site",
    description:
      "3-page coffee subscription website build with React and mobile-first workflow. There is a selection for creating coffee subscriptions and an order summary modal.",
    tags: ["React", "SPA", "lazy-loading", "React Router"],
    github: "https://github.com/kzaleskaa/coffeeroasters-subscription-site",
    live: "https://coffeeroasters-subscription-site-kzaleskaa.netlify.app/home",
  },
];

export default projects;
