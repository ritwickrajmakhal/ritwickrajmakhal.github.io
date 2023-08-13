# Want to use this portfolio template?

1. Clone this repository. (Make sure you've installed git)
   ```bash
   git clone ritwickrajmakhal.github.io
   ```
1. Open `ritwickrajmakhal.github.io` folder and run the following command. (Make sure you've installed Node js)
   ```
   npm i
   ```
1. Now go to `ritwickrajmakhal.github.io/src` you'll find a file called `config.json`.This file looks like a json file and you have to fill all the values by following the instructions.
   ```json
   {
     "website": {
       "user": {
         "name": "Enter Your Name",
         "shortDesc": "Enter a short description about yourself (3-7 words)",
         "desc": "Enter a long description about yourself (15-30 words)",
         "imgUrl": "Url of your image ()",
         "socialHandles": [
           {
             "logo": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
             "profile": "https://github.com/ritwickrajmakhal/"
           },
           {
             "logo": "https://i.ibb.co/K6mqsxK/facebook.png",
             "profile": "https://facebook.com/ritwickrajmakhal"
           },
           {
             "logo": "https://i.ibb.co/SszSKgg/linkedin.png",
             "profile": "https://www.linkedin.com/in/ritwick-raj-makhal-017a10217"
           },
           {
             "logo": "https://i.ibb.co/VV7nmXv/gmail.jpg",
             "profile": "ritwickrajmakhal11@gmail.com"
           }
         ],
         "skills": [
           {
             "name": "MERN Stack",
             "value": 50
           },
           {
             "name": "Python",
             "value": 70
           }
         ]
       },
       "nav": {
         "logo": "r",
         "links": [
           {
             "name": "Home",
             "url": "/"
           },
           {
             "name": "About",
             "url": "#about"
           },
           {
             "name": "Portfolio",
             "url": "#portfolio"
           },
           {
             "name": "Contact",
             "url": "#contact"
           }
         ]
       },
       "portfolios": [
         {
           "imgUrl": "https://i.ibb.co/71xyv6M/online-music-player.png",
           "title": "Online Music Player",
           "desc": "An interactive online music player platform offering a vast library of songs for seamless streaming.",
           "techs": ["HTML", "CSS", "Js", "RapidAPI"],
           "iframeUrl": "https://ritwickrajmakhal.github.io/online-music-player/"
         },
         {
           "imgUrl": "https://i.ibb.co/Wgw8fkN/desktop-music-player.png",
           "title": "Desktop Music Player",
           "desc": "A sleek and intuitive application for organizing and enjoying your favorite tunes with seamless playback and customizable features.",
           "techs": ["Python", "Tkinter", "pygame mixer"],
           "iframeUrl": "https://i.ibb.co/CQxFkhV/offline-music-player-demo.png"
         },
         {
           "imgUrl": "https://i.ibb.co/3NFw8fK/food-recepie-search.png",
           "title": "Food Recipe Search",
           "desc": "Your ultimate culinary companion - a Food Recipe Search website bringing you a world of delightful dishes at your fingertips.",
           "techs": ["React", "Bootstrap", "Edamam API"],
           "iframeUrl": "https://ritwickrajmakhal.github.io/food-recipe-search/"
         },
         {
           "imgUrl": "https://i.ibb.co/gmcFS9w/Text-Utils.png",
           "title": "Text Utility",
           "desc": "Streamline and enhance your text with our all-in-one Text Utility website - simplifying tasks from formatting to analysis.",
           "techs": ["React", "Bootstrap"],
           "iframeUrl": "https://ritwickrajmakhal.github.io/TextUtils/"
         }
       ]
     }
   }
   ```
