# Assignment 1 - ReactJS app.

Name: Yang Gao

## Overview.

This repository contains a React-based movie discovery application utilizing the TMDB API to fetch and display movie data. Key features include a dynamic movie list with pagination, genre filtering, and the ability to mark favorites. The application leverages React Query for data fetching, Material-UI for styling components, and localStorage for persisting user preferences. It is structured with reusable components like PageTemplate and AddToFavoritesIcon to ensure modularity and scalability.

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ watchlist functionality
+ pagination
+ New Material UI components are included

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]
1.Install Dependencies
2.Set Up TMDB API Key
3.Start the Development Server
4.Verify Configuration
The application should now be running at http://localhost:3000.

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 
   path="/movies/favorites" element= FavoriteMoviesPage
   path="/reviews/:id" element=MovieReviewPage  
   path="/movies/:id" element=MoviePage 
   path="/movies/:id/recommendations" element=RecommendationsPage
   path="/" element= HomePage 
   path="*" element=Navigate to="/" 
   path="/reviews/form" element=AddMovieReviewPage 
   path="/movies/upcoming" element=UpcomingMoviesPage  
   path="/movies/trending" element=TrendingPage 
   path="/movies/popular" element=PopularPage


## Routing.

### Routing


1. `/`  
   - Page: Home Page  
   - Description: Displays a list of movies fetched from TMDB.

2. `/movies/:id`  
   - Page: Movie Details  
   - Description: Displays detailed information about a specific movie, including its overview, release date, and cast.

3. `/movies/popular`  
   - Page: Popular Movies  
   - Description: Shows a list of currently popular movies.

4. `/movies/trending`  
   - Page: Trending Movies  
   - Description: Displays movies trending on TMDB.

5. `/movies/:id/reviews` 
   - Page: Movie Reviews  
   - Description: Provides detailed user reviews of a specific movie.

6. `/favorites`  
   - Page: Favorite Movies  
   - Description: Displays a list of movies marked as favorites by the user.

7. `/search` 
   - Page: Search Results  
   - Description: Shows movies based on the search query entered by the user.  


## Independent learning (If relevant).

### Independent Learning  

1. Pagination for Movie Listings  
- Description: Implemented pagination to display movies in chunks, enhancing user experience when navigating large datasets.  
- Source Code:  
  - `src/pages/homePage.js`  
  - `src/components/templateMovieListPage.js`  
- References:  
  - ["React Pagination Tutorial with Hooks"](https://www.freecodecamp.org/news/how-to-build-pagination-in-react/)  
  - [React Documentation on Hooks](https://reactjs.org/docs/hooks-overview.html)  

---

2. React Query for Data Fetching  
- Description: Leveraged `react-query` for efficient data fetching, caching, and state management.  
- Source Code:  
  - `src/api/tmdb-api.js`  
  - `src/pages/homePage.js`  
- References:  
  - [React Query Documentation](https://tanstack.com/query/v4/docs/overview)  
  - ["Fetching Data with React Query"](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-react-query/)  

---

 3. Material-UI Components for Styling 
- Description: Used Material-UI components to create responsive and visually consistent user interfaces.  
- Source Code:  
  - `src/components/filterMoviesCard/index.js`  
  - `src/components/cardIcons/addToFavorites.js`  
- References:  
  - [Material-UI Documentation](https://mui.com/)  
  - ["Building Responsive React Apps with MUI"](https://www.smashingmagazine.com/2021/04/building-responsive-react-apps-mui/)  

---

4. Integration with TMDB API 
- Description: Researched TMDB API endpoints and implemented custom functions for fetching movies, genres, and reviews.  
- Source Code:  
  - `src/api/tmdb-api.js`  
  - `src/pages/movieDetailsPage.js`  
- References:  
  - [TMDB API Documentation](https://developers.themoviedb.org/3)  
  - ["Working with APIs in React"](https://www.digitalocean.com/community/tutorials/working-with-apis-in-react)  

---

 5. Dynamic Routing Using React Router
- Description: Added dynamic routing for movie details, reviews, and filter options.  
- Source Code:  
  - `src/App.js`  
  - `src/pages/movieDetailsPage.js`  
- References:  
  - [React Router Documentation](https://reactrouter.com/en/main)  
  - ["Dynamic Routing in React"](https://blog.bitsrc.io/implementing-dynamic-routing-in-react-5c0c9e169d8b)  

---

6. Local Storage for State Persistence**  
- Description: Used localStorage to persist user-selected favorites across sessions.  
- Source Code:  
  - `src/pages/homePage.js`  
  - `src/components/cardIcons/addToFavorites.js`  
- References:  
  - ["Persisting State in React Using LocalStorage"](https://www.smashingmagazine.com/2020/01/persistence-patterns-react/)  
  - [MDN Web Docs on localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)  

---

