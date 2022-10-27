# Secret Escapes - Tech Test

I built the app using CRA with TypeScript. I used React router for routing and Apollo for fetching data from the GraphQL API link that was provided. I also used Sass for styling for you to get a sense of how I like to style components. I started off by putting together a [Figma design](https://www.figma.com/file/NaWT3MaBCsDHYo4bX2GrGe/HolidaySearch?node-id=2%3A98) with all the screens on mobile. I managed to implement all the acceptance criteria in under 3 hours but I did spend more time than that working on the designs and thinking about how I would approach the project.

## Running the app

In the project directory, you'll need to first install the project's dependencies, run:

### `yarn install`

Once that's finished, you'll want to run the tests, so next run:

### `yarn test`

Finally to spin up the app on your local development server, run:

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Feature checklist 

### Acceptance criteria
- [X] Users shoulde be able to search by free text
- [X] Search results should show the total number of results
- [X] Search results should only include the first 10 sales in the list
- [X] Each search result should link to the sale detail page
- [X] Browser navigation should work (e.g. going from search results to sale details andclicking the back button should take you back to search results)

### Technical requirements

- The application must be built in react (it’s recommended to use Create React App toget you started, but this is not a requirement)
- There must be a simple way to run the application as a standalone project (supported out the box with CRA)

<b>I built the app using CRA as per your reccomendation</b>

- Code should be provided either via a link to a git repository or in a zip file

<b>I have sent a zip file hosted on Google Drive via email </b> 

- A Readme file should be included with instructions on how to run the application. And any other information you think is relevant. 

<b>You'll find the instructions on running the application above and information on what I would have done with more time below.</b>

- If you are comfortable using TypeScript then please do so, however this is not a requirement

<b>I used TypeScript as that's what I've used for the past year but I did make a trade off to skip some typing for speed.

- Unit tests are not required

<b>Given more time I would have done a lot of testing, see below in the 'Giuen more time' section.</b>

- Server side rendering is not required

<b> I did look into SSR and saw how you would do it with Apollo, when you create the client there's an option to use a memory cache. I saw a good example use case with React Router's MemoryRouter component in the App.tsx file. If I had more time I would have implemented it but I felt the core features were more important.



## Given more time, I should have;

- Written a lot more unit and integration tests, along with an end-to-end test to test the user flow. I wrote a small test suite for my `Button` component so you can see how I follow React Testing Library best practice.

- Looked at refactoring out the wrapper components I used for speed.

- Worked on making it fully responsive with layouts across mobile, tablet, and desktop.

- Refactored my styles to lean on a global theme with top-level variables that would have led to fewer styles at the component level. For small projects I normally use Tailwind or Vanilla-Extract CSS, but I thought Tailwind would be too distracting for someone that hasn't used it before. After research I found Vanilla-Extract and CRA don't mix well and would have required me overriding a bunch of CRA's Webpack configuration - so I decided to just go with Sass instead.

- I would have implemented SSR for better performance and optimisation of static content.

- I would implemented pagination on the Destination list page, using dynamic routes with the page number in the URL to then query GraphQL using an offset to get the data for that page.
