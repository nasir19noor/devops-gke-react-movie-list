# Movie List
This application will generate movie list fetch the data from The Movie Database https://www.themoviedb.org/

### Generate API
Please follow these steps to generate API Key from https://www.themoviedb.org/
1. Visit this website: https://www.themoviedb.org/
2. Click on Login, There you will see a link to sign up.
3. Fill up the form and click on Signup button.
4. Check your mail and verify your account and login with your credentials.
5. Click on Profile and Settings
6. Click on API menu from left side
7. To generate an API, click on Click Here from Request an API Key
8. Choose Developer if you are an individual, From this article, I am selecting Developer
9. You will see Terms and Conditions page and here click Agree button
10. Fill the details for your application
11. Once you filled and click Submit button. There you will see your API key, URL and other important details.

### Create .env
create .env under folder frontend with this format
```
VITE_TMDB_API_KEY=Your-Key
```

###  Run The Application
To run application, under frontend directory run this command
```
npm run dev
```
![image](https://s3.ap-southeast-1.amazonaws.com/upload.nasir.id/react-vite.png)

Check it via browser
![image](https://s3.ap-southeast-1.amazonaws.com/upload.nasir.id/movie-list.png)

###  Run The Application Via Docker
To Build the docker image, under react-movie directory run this command
```
docker build -t react-movie .
```

To run docker image, run this command
```
docker run -p 5173:5173 react-movie
```

Check it via browser
![image](https://s3.ap-southeast-1.amazonaws.com/upload.nasir.id/movie-list.png)