# Want to copy my portfolio website?

## Follow these steps:

1. Download this project by [clicking here](https://github.com/ritwickrajmakhal/ritwickrajmakhal.github.io/archive/refs/heads/portfolio-page.zip)
1. Download Node js from [here](https://nodejs.org/en/download/) if you don't have it already.
1. Open the project folder in terminal and run `npm install` to install all the dependencies.
1. Run `npm start` to start the development server.
1. Now open `package.json` file from the project folder and change the following:
   - Change `homepage` to your own github page url.
     ```json
     "homepage": "https://username.github.io",
     ```
   - Change `name` to your own name.
     ```json
     "name": "username",
     ```
1. Now goto the public folder and change the following files:
   - Replace meta content and title from `index.html` with your own.
     ```html
     <meta
       name="description"
       content="A portfolio website of Ritwick Raj Makhal"
     />
     <title>Ritwick Raj Makhal</title>
     ```
   - Replace the `favicon.ico` with your own favicon.
   - Delete googlec5aa079041f4b14e.html from the public folder.
   - Replace logo192.png and logo512.png with your own logo.
   - Replace `short_name and `name`from`manifest.json` with your own.
     ```json
     "short_name": "Ritwick",
     "name": "Ritwick Raj Makhal",
     ```
1. Now go to the src folder and open config.json file and change the following attributes.
   - `name` : Your name
   - `shortDesc` : Write a short description about your self.
   - `description` : Write a long description about your self.
   - `imgUrl` : Add a url of your square shaped image.
   - `education` : It is the array of your education details, means you can add as many as education details.
     ```json
     {
       "instituteName": "Enter your institute name",
       "imageUrl": "Add a url of your institute's square shaped image",
       "desc": "A small description about your education"
     },
     {
       "instituteName": "Enter another institute name",
       "imageUrl": "Add a url of another institute's square shaped image",
       "desc": "A small description about another education"
     },
     ```
     ... and so on.
   - `socialHandles` : Add four social handles.
     ```json
     "socialHandles": [
               {
                   "logo": "Add logo of social media platform",
                   "profile": "Add your profile url"
               },
               ... so on up to 4 social handles
     ]
     ```
   - `skills` : Add your skills.
     ```json
     "skills": [
               {
                   "name": "Add your skill name",
                   "value": "Add your skill rating out of 100"
               },
               ... so on
     ]
     ```
   - `resume` : Add your resume url.
   - `nav` : Add your navigation items.
     ```json
     "nav": {
                "logo: "Enter a alphabet to show as logo",
                "links" : [
                  {
                    "name": "Contact",
                    "url": "#contact"
                  },
                  Left all the links as it is
                  {
                    "name": "Github",
                    "url": "github.com/username"
                  }
                  ...
                  and add your own links
                ]
            }
     ```
   - `portfolios` : Add your portfolios.
     ```json
     "portfolios": [
               {
                   "title": "Add your portfolio name",
                   "desc": "Add a short description about your portfolio",
                   "imgUrl": "Add a url of your portfolio of same sized like other portfolios",
                   "techs": [
                       "Add your portfolio's tech stack",
                       "Add your portfolio's tech stack",
                       "Add your portfolio's tech stack"
                   ],
                   "iframeUrl": "Add a url of your portfolio",
                   "downloadUrl": "Add a url of your portfolio's source code if available else leave it empty",
                   "categories": [
                       "Add your portfolio's category",
                       "Add your portfolio's category"
                   ]
               },
               ... so on
     ]
     ```
    - `apis`: Add your api keys.
      ```json
      "apis": {
        "formspree": "Create a formspree account and create a form then add your form key here. example: https://formspree.io/f/your-form-key",
      }
      ```
1. Now create a github repository with name `username.github.io` where `username` is your github username.
1. Now open the project folder in terminal and run `npm run deploy` to deploy the project to github pages.
1. Now open your github page url in browser and see your portfolio website live.
