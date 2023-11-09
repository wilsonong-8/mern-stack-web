# MERN Stack Web + Mobile (React Native) Application for CE301 Individual Project

<br>

### Welcome to the SellMyHDB Web + Mobile Application. This application has been developed using React and React Native for the frontend, supported by a Node.js + Express.js backend with a MongoDB database. It has been meticulously crafted to empower users with the resources, information, and a user-friendly platform for independently selling their HDB properties.

<br>

## TABLE OF CONTENTS
<ol>
<li>Features</li>
<li>Technologies Used</li>
<li>Installation</li>
<li>Running</li>
<li>Technical Documents - React Frontend</li>
<li>Technical Documents - NodeJS Backend</li>
<li>Technical Documents - React Native Frontend</li>

</ol>

<br>

## Features

#### Main Page:

View and search for available property listings, including details such as address, area, unit type, size, and price. Users can interact with the listings by clicking on them to view more information or start a chat with the property owner.

#### My Advertisement:

Create, edit, and manage your own property advertisements. Upload images, provide details about the property, and set the selling price.

#### Chat History:

Communicate with other users through a chat messaging system. View a list of conversations and exchange messages in real-time.

#### Past Transactions:

Access a list of past property transactions and search for specific transactions using filters such as area, unit type, and price range.

#### Selling Guide:

Learn about the 14 Steps Selling Guide for selling properties. The guide is presented in an accordion format for easy navigation.

#### Mortgage Bankers:

Browse and search for mortgage bankers who can assist with financing options for property purchases. View their profiles, including contact information and the bank they represent.

#### Property Agents:

Explore a directory of property agents who can provide professional assistance with real estate transactions. View their profiles, including contact information and the company they work for.

#### Profile:

Manage your user profile, including personal information such as name, email, and contact number.


#### Admin Function:

Admin function can be accessed through the web application to add/edit/delete banker or agent profiles. Admins are also able to delete advertisements that do not adhere to the rules.

<br>

## Technologies Used

<ol>
    <li>React</li>
    <li>React Native</li>
    <li>NodeJs</li>
    <li>MongoDB</li>
    <li>ExpressJs</li>
    <li>Mongoose</li>
    <li>SCSS (Sass)</li>
    <li>Stylized Components</li>
    <li>Axios</li>
    <li>JSON Web Token</li>
    <li>Bcrypt</li>
</ol>

<br>

## Installation

<ol>
    <li>Clone the repository: git clone</li>
    <li>Install dependencies for each individual directory (Client, Mobile, Server) using npm install</li>
    <li>Create a new MongoDB database</li>
    <li>Create a .env file in server directory with the following variables stated below</li>
    <li>Configure the environment variables for Server</li>
    <li>Configure WEBSOCKET_URL of webConfig.js in Client directory to point to Local Address or Deployed Server Address </li>
    <li>Configure API_BASE_URL and WEBSOCKET_URL of mobileConfig.js in Mobile directory to point to Local Address or Deployed Server Address (Note: Mobile Clients do not connect through LAN unlike Web Clients, thus an IP Address must be provided followed by the port number for development build) </li>
</ol>

#### .env Configuration
<li>PORT = Your desired Port number (5000 by default) </li>
<li>MONGO_URL = Your MONGODB Private API Key </li>
<li>JWT_SECRET = Generate your own 256bit encryption key and insert it </li>
<li>JWT_LIFETIME = Set your desired token lifetime (Default 1d)</li>
<li>NODE_ENV = Leave it blank for development or set to "production" if deploying the build</li>
<li>CORS_URL= URL for corsOptions needed for messaging separated by comma. Example: (http://localhost:3000,http://localhost:5100,http://192.168.68.50:5100)</li>

## Running

#### For development build
<ol>
    <li>Make sure NODE_ENV in .env is not set to production, webConfig and mobileConfig url are set to localhost/local ip address</li>
    <li>Start Server and Client by running "npm start" on Terminal in Server directory</li>
    <li>Open client in browser using localhost:3000 (Default for React Development Build)</li>
    <li>Run "npx expo" in Terminal of mobile directory to start Metro Bundler, then choose your options for running the mobile development build (Android/IOS emulator or by scanning QR Code with Expo App on your Phone) </li>
</ol>

#### For deployment build
<ol>
 <li>Make sure NODE_ENV in .env is set to production, webConfig and mobileConfig url are set to appropriate ip address</li>
<li>Remove previous node_module and build(client) packages from server and client directory</li>
<li>Run "setup-production" in server Terminal to install dependencies for both server and clients and also to build client</li>
<li>Deploy Client and Server Build to 3rd Party Cloud Server Provider </li>
<li>Build a Deployable Expo App using EAS Build, deploy app to Simulator or upload to AppStore/PlayStore</li>
</ol>


<br><br>

# Technical Documentation - React Frontend

<br>

## Assets

The assets folder in the React client folder contains various static files that are necessary for the website. This documentation provides an overview of the contents of the assets folder and their purpose.

### Folder Structure

The assets folder is organized as follows:

```
- assets
    - images
        - [image files]
    - scss
        - [SCSS files]
    - wrappers
        - [wrapper classes files]
```

### Images Folder

The `images` folder stores static images that are used throughout the website. It is recommended to keep all the image files within this folder to maintain a well-organized structure. The images can include logos, icons, background images, or any other visual assets required by the web pages.

Ensure that the image files have appropriate names and file formats (.jpg, .png, .svg, etc.) for optimal usage.

### SCSS Folder

The `scss` folder contains SCSS (Sassy CSS) files that define the styling and appearance of the Selling Guide Page. SCSS is a superset of CSS, providing advanced features like variables, mixins, and nested rules, making it easier to manage and maintain CSS code.

The SCSS files within this folder may include global styles, reusable styles for components, or specific styles for different sections of the website. It is recommended to follow a modular approach and organize the SCSS files based on their purpose and functionality.

### Wrappers Folder

The `wrappers` folder contains wrapper class files that define stylized components for the CSS of the web pages. These wrapper classes encapsulate specific styles and provide a convenient way to apply consistent styling to multiple components or sections.

By using wrapper classes, you can easily maintain and update the CSS styles for various components without modifying each component individually. The wrapper classes can be applied to HTML elements or React components by adding appropriate class names.

To use a wrapper class, add the corresponding class name to the element or component that requires the desired styling.

It is recommended to name the wrapper class files based on their purpose or the components they are intended to style. Organize the wrapper classes based on their functionality or relevance to ensure easy navigation and maintenance.

### Conclusion

The assets folder within the React client folder is an essential part of the project's structure. It contains the necessary static assets such as images, SCSS files for styling, and wrapper classes for stylized components. By organizing and managing these assets effectively, you can maintain a well-structured and visually appealing website.

<br>

## Components

The components folder in the React client folder contains a collection of React components that are used to build the user interface of the website. This documentation provides an overview of the components present within the folder, along with their descriptions and purposes.

### Folder Structure

The components folder is organized as follows:

```
- components
    - accordion
        - Accordion.js
        - AccordionItem.js
    - advertisement
        - Advert.js
        - AdvertContainer.js
        - AdvertInfo.js
        - ProductImages.js
        - SingleAdvert.js
    - agents
        - Agent.js
        - AgentContainer.js
    - bankers
        - Banker.js
        - BankerContainer.js
    - messaging
        - Conversation.js
        - Message.js
        - Messenger.js
    - Alert.js
    - BigSideBar.js
    - DataGov.js
    - FormImage.js
    - FormRow.js
    - FormRowSelect.js
    - FormRowTextArea.js
    - index.js
    - Loading.js
    - Logo.js
    - NavBar.js
    - NavLinks.js
    - PageBtnContainer.js
    - SearchContainer.js
    - SmallSideBar.js
```

### Accordion Folder

The `accordion` folder contains components related to an accordion feature. The components within this folder include:

- `Accordion.js`: This component represents the accordion itself, providing the structure and behavior of an accordion component.
- `AccordionItem.js`: This component represents an individual item within the accordion. It is used to render each item with its content and handle the item's state and interactions.

The accordion component is commonly used to display collapsible sections of content, where one item can be expanded at a time while others remain collapsed.

### Advertisement Folder

The `advertisement` folder contains components related to displaying advertisements. The components within this folder include:

- `Advert.js`: This component represents an advertisement and is used on the main page to display individual ads.
- `AdvertContainer.js`: This component contains a collection of `Advert.js` components and is responsible for rendering multiple ads on the main page.
- `AdvertInfo.js`: This component is used within `Advert.js` to display icon and text descriptions for the advertisement.
- `ProductImages.js`: This component represents an image gallery used in the `SingleAdvert.js` component to display multiple images related to a specific advertisement.
- `SingleAdvert.js`: This component provides a detailed view of an advertisement, displaying additional information about the advertisement such as its description, images, etc.

These components are used to showcase advertisements on the website, both in a summary view and in a detailed view.

### Agents Folder

The `agents` folder contains components related to property agents. The components within this folder include:

- `Agent.js`: This component displays information about a property agent, such as their name, contact details, etc.
- `AgentContainer.js`: This component contains a collection of `Agent.js` components and is responsible for rendering multiple agent profiles.

These components are used to present property agents and their details on the website.

### Bankers Folder

The `bankers` folder contains components related to mortgage bankers. The components within this folder include:

- `Banker.js`: This component displays information about a mortgage banker, such as their name, contact details, etc.
- `BankerContainer.js`: This component contains a collection of `Banker.js` components and is responsible for rendering multiple banker profiles.

These components are used to present mortgage bankers and their details on the website.

### Messaging Folder

The `messaging` folder contains components related to messaging functionality. The components within this folder include:

- `Conversation.js`: This component represents the left sidebar of the chat page and displays a list of conversations that the current user has.
- `Message.js`: This component represents the messages between users and displays a list of messages, distinguishing between sender and receiver.
- `Messenger.js`: This component is the overall component of the chat page. It contains `Conversation.js` and `Message.js` components and handles state management, effects, and server API calls for messaging functionality.

These components are used to facilitate messaging and communication between users on the website.

### Alert.js

- `Alert.js`: This component represents a popup alert that is displayed after a successful transaction or when an error in validation occurs.

The `Alert.js` component is responsible for displaying relevant messages to the user, providing information about the status of their actions.

### BigSideBar.js

- `BigSideBar.js`: This component represents a static sidebar component displayed on the left side of the screen when the window is enlarged.

The `BigSideBar.js` component provides a consistent and persistent sidebar for navigation or displaying important information on the website.

### DataGov.js

- `DataGov.js`: This component represents a datatable component used in the Past Transactions page. It displays all the information about past transactions.

The `DataGov.js` component is responsible for fetching and presenting data related to past transactions in a structured and organized manner.

### FormImage.js

- `FormImage.js`: This component represents an image upload component that is part of the Form component.

The `FormImage.js` component allows users to upload images as part of a form submission or input process.

### FormRow.js

- `FormRow.js`: This component represents an input component that is part of the Form component.

The `FormRow.js` component is used to display and handle input fields within a form, providing a reusable and consistent UI element for capturing user data.

### FormRowSelect.js

- `FormRowSelect.js`: This component represents a dropdown menu that is part of the Form component.

The `FormRowSelect.js` component allows users to select options from a predefined list within a form, providing a convenient way to choose from a set of choices.

### FormRowTextArea.js

- `FormRowTextArea.js`: This component represents a textarea component for description that is part of the Form component.

The `FormRowTextArea.js` component provides a textarea input field within a form, allowing users to enter multiline text or longer descriptions.

### index.js

- `index.js`: This file imports all the components and exports them as a single module.

The `index.js` file serves as the entry point for importing and exporting the components within the components folder, making it easier to import multiple components from a single file.

### Loading.js

- `Loading.js`: This component represents a loading animation used when `isLoading` is true.

The `Loading.js` component is responsible for displaying a visual indicator to the user while data is being fetched or processed, providing feedback that a task is in progress.

### Logo.js

- `Logo.js`: This component represents the logo component displayed on the top left-hand side of the web application.

The `Logo.js` component typically contains the website's logo or brand identity, providing a visual representation of the website's identity.

### NavBar.js

- `NavBar.js`: This component represents the top navigation component that displays the logout button.

The `NavBar.js` component provides a navigation bar at the top of the page, allowing users to access various sections of the website and providing a logout functionality.

### NavLinks.js

- `NavLinks.js`: This component represents the container that displays all the links and icons in the navbar.

The `NavLinks.js` component is responsible for rendering the links and icons within the navigation

bar, allowing users to navigate through different sections or perform specific actions.

### PageBtnContainer.js

- `PageBtnContainer.js`: This component represents the pagination component in the Main Page used to scroll forward and backward.

The `PageBtnContainer.js` component provides buttons or controls to navigate between different pages or sections of content, facilitating navigation and exploration of the website.

### SearchContainer.js

- `SearchContainer.js`: This component represents the container on the top that contains all the form inputs used for searches.

The `SearchContainer.js` component provides a centralized location for displaying and interacting with form inputs related to search functionality, allowing users to input search criteria and perform searches.

### SmallSideBar.js

- `SmallSideBar.js`: This component represents the popout menu component that appears when the screen is shrinked.

The `SmallSideBar.js` component provides a compact and collapsible menu that appears when the screen size is reduced, allowing users to access navigation options in a responsive manner.

### Conclusion

The components folder within the React client folder houses various components that play crucial roles in building the user interface of the website. By understanding the purpose and functionality of each component, you can effectively utilize and enhance the features and interactions offered by the website.

<br>

## Context

### Folder Structure

The assets folder is organized as follows:

```
- context
    - actions.js
    - appContext.js
    - reducer.js
```

### AppContext.js

The `AppContext.js` file is responsible for creating and providing the application context using the React Context API. It defines the initial state, reducer, and various actions used within the application. Let's break down the different sections of the code:

#### Import Statements

The necessary dependencies and action types are imported at the beginning of the file. These include React, `useReducer` and `useContext` hooks from React, the reducer function from `reducer.js`, and the Axios library for making HTTP requests. Additionally, the action types/constants defined in `actions.js` are imported.

#### Initial State

The `initialState` object holds the initial values for different state properties used in the application. It represents the initial state of the application before any actions are dispatched.

#### AppContext Creation

The `AppContext` is created using the `React.createContext()` function. This context will be used to provide state and actions to components that consume it.

#### AppProvider Component

The `AppProvider` component is responsible for providing the application context to its child components. It wraps the `children` components within the `AppContext.Provider` component.

Inside the `AppProvider` component, the `useReducer` hook is used to create a state and dispatch based on the provided reducer function (`reducer.js`) and initial state (`initialState`).

The `authFetch` object is created using Axios and is configured to include the user's token in the request headers for authentication purposes.

The component also includes various action functions that can be used within the application. These functions dispatch actions to update the state based on specific actions or API calls.

#### useAppContext Hook

The `useAppContext` hook allows components to access the application context by consuming the `AppContext`. It returns the state and action functions provided by the `AppProvider` component.

#### Export Statements

The `AppProvider`, `initialState`, and `useAppContext` are exported for usage in other parts of the application.

### Conclusion

The `AppContext.js` file provides a centralized location to define the initial state, reducer, and actions for the application. By utilizing the React Context API, it allows components to easily access and update the state and dispatch actions when necessary.

<br>

### Reducer.js

#### Overview

The User Reducer is a JavaScript function that handles state updates for user-related actions in an application. It receives an action object and the current state as input and returns a new state based on the action type.

#### Actions

The User Reducer handles the following actions:

- `DISPLAY_ALERT`: Updates the state to display an alert message with a danger type and a specific text.
- `CLEAR_ALERT`: Updates the state to clear the alert message.
- `REGISTER_USER_BEGIN`: Sets the `isLoading` flag to true, indicating that the user registration process has started.
- `REGISTER_USER_SUCCESS`: Updates the state with the user token and information after a successful registration.
- `REGISTER_USER_ERROR`: Updates the state with an error message if user registration fails.
- `LOGIN_USER_BEGIN`: Sets the `isLoading` flag to true, indicating that the user login process has started.
- `LOGIN_USER_SUCCESS`: Updates the state with the user token and information after a successful login.
- `LOGIN_USER_ERROR`: Updates the state with an error message if user login fails.
- `TOGGLE_SIDEBAR`: Toggles the `showSideBar` flag in the state, indicating whether the sidebar is visible or hidden.
- `LOGOUT_USER`: Resets the state to the initial values, clearing user information and token.
- `UPDATE_USER_BEGIN`: Sets the `isLoading` flag to true, indicating that the user update process has started.
- `UPDATE_USER_SUCCESS`: Updates the state with the updated user token and information after a successful update.
- `UPDATE_USER_ERROR`: Updates the state with an error message if user update fails.

#### Advertisement Actions

The User Reducer also handles actions related to advertisements:

- `HANDLE_CHANGE`: Updates the state with a new value for a specific field.
- `SHOW_SINGLE_ADVERT`: Toggles the `showSingleAdvert` flag and sets the `singleAdvertId` to the provided value.
- `CLEAR_ADVERT_FORM_VALUES`: Resets the advertisement form values to their initial state.
- `CREATE_ADVERT_BEGIN`: Sets the `isLoading` flag to true, indicating that the advertisement creation process has started.
- `CREATE_ADVERT_SUCCESS`: Updates the state after successfully creating a new advertisement.
- `CREATE_ADVERT_ERROR`: Updates the state with an error message if advertisement creation fails.
- `GET_ADVERT_BEGIN`: Sets the `isLoading` flag to true, indicating that the advertisement retrieval process has started.
- `GET_ADVERT_SUCCESS`: Updates the state with the retrieved advertisements.
- `GET_USER_ADVERT_BEGIN`: Sets the `isLoading` flag to true, indicating that the user advertisement retrieval process has started.
- `GET_USER_ADVERT_SUCCESS`: Updates the state with the user advertisement information after a successful retrieval.
- `GET_USER_ADVERT_ERROR`: Updates the state when there is an error retrieving user advertisements.
- `EDIT_ADVERT_BEGIN`: Sets the `isLoading` flag to true, indicating that the advertisement editing process has started.
- `EDIT_ADVERT_SUCCESS`: Updates the state after successfully editing an advertisement.
- `EDIT_ADVERT_ERROR`: Updates the state with an error message if advertisement editing fails.
- `DELETE_ADVERT_BEGIN`: Sets the `isLoading` flag to true, indicating that the advertisement deletion process has started.
- `DELETE_ADVERT_SUCCESS`: Updates the state after successfully deleting an advertisement.
- `DELETE_ADVERT_ERROR`: Updates the state with an error message if advertisement deletion fails.
- `DELETE_ADMIN_ADVERT_BEGIN`: Sets the `isLoading` flag to true, indicating that the admin advertisement deletion process has started.
- `DELETE_ADMIN_ADVERT_SUCCESS`: Updates the state after successfully deleting an advertisement as an admin.
- `CHANGE_PAGE`: Updates the state with a new page value for pagination.
- `SET_IMAGE_LIST`: Updates the state with a new image list value.
- `UPLOAD_IMAGE_LIST_BEGIN`: Sets the `isLoading` flag to true, indicating that the image upload process has started.
- `UPLOAD_IMAGE_LIST_SUCCESS`: Updates the state with the uploaded image source names.

#### Banker Actions

The User Reducer handles actions related to mortgage bankers:

- `CLEAR_BANKER_FORM_VALUES`: Resets the banker form values to their initial state.
- `CREATE_BANKER_BEGIN`: Sets the `isLoading` flag to true, indicating that the banker creation process has started.
- `CREATE_BANKER_SUCCESS`: Updates the state after successfully creating a new banker.
- `CREATE_BANKER_ERROR`: Updates the state with an error message if banker creation fails.
- `GET_BANKER_BEGIN`: Sets the `isLoading` flag to true, indicating that the banker retrieval process has started.
- `GET_BANKER_SUCCESS`: Updates the state with the retrieved bankers.
- `SET_EDIT_BANKER`: Sets the `isEditingBanker` flag and updates the state with the selected banker's information for editing.
- `DELETE_BANKER_BEGIN`: Sets the `isLoading` flag to true, indicating that the banker deletion process has started.
- `EDIT_BANKER_BEGIN`: Sets the `isLoading` flag to true, indicating that the banker editing process has started.
- `EDIT_BANKER_SUCCESS`: Updates the state after successfully editing a banker.
- `EDIT_BANKER_ERROR`: Updates the state with an error message if banker editing fails.

#### Property Agent Actions

The User Reducer handles actions related to property agents:

- `CLEAR_AGENT_FORM_VALUES`: Resets the agent form values to their initial state.
- `CREATE_AGENT_BEGIN`: Sets the `isLoading` flag to true, indicating that the agent creation process has started.
- `CREATE_AGENT_SUCCESS`: Updates the state after successfully creating a new agent.
- `CREATE_AGENT_ERROR`: Updates the state with an error message if agent creation fails.
- `GET_AGENT_BEGIN`: Sets the `isLoading` flag to true, indicating that the agent retrieval process has started.
- `GET_AGENT_SUCCESS`: Updates the state with the retrieved agents.
- `SET_EDIT_AGENT`: Sets the `isEditingAgent` flag and updates the state with the selected agent's information for editing.
- `DELETE_AGENT_BEGIN`: Sets the `isLoading` flag to true, indicating that the agent deletion process has started.
- `EDIT_AGENT_BEGIN`: Sets the `isLoading` flag to true, indicating that the agent editing process has started.
- `EDIT_AGENT_SUCCESS`: Updates the state after successfully editing an agent.
- `EDIT_AGENT_ERROR`: Updates the state with an error message if agent editing fails.

#### Past Transactions Actions

The User Reducer handles actions related to past transactions:

- `CLEAR_SEARCH_FORM_VALUES`: Resets the search form values to their initial state.
- `SEARCH_TRANSACTION_BEGIN`: Sets the `isLoading` flag to true, indicating that the transaction search process has started.
- `SEARCH_TRANSACTION_SUCCESS`: Updates the state with the retrieved transaction records.

#### Error Handling

If an unknown action type is provided, the reducer will throw an error indicating that the action type is not recognized.

#### State

The User Reducer updates the following properties in the state:

- `showAlert`: A boolean indicating whether an alert message should be displayed.
- `alertType`: A string representing the type of the alert message (e.g., success, danger).
- `alertText`: The text content of the alert message.
- `isLoading`: A boolean indicating whether an API request or operation is in progress.
- `token`: The user token after successful login or registration.
- `user`: The user object containing user information.
- `showSideBar`: A boolean indicating whether the sidebar should be visible.

- `isEditing`: A boolean indicating whether an advertisement is being edited.
- `address`, `postalCode`, `area`, `unitType`, `size`, `price`, `description`: Fields for advertisement data.
- `imageList`: An array of image files for an advertisement.
- `imageSourceNames`: An array of image source names after uploading images.
- `singleAdvertId`: The ID of the single advert being displayed.
- `hasAdvert`: A boolean indicating whether the user has an existing advert.
- `adverts`: An array of advertisement objects.
- `totalAdverts`: The total number of advertisements.
- `numOfPages`: The total number of pages for pagination.
- `myAdvert`: An object containing user-specific advertisement information.
- `isEditingBanker`: A boolean indicating whether a banker is being edited.
- `editBankerId`: The ID of the banker being edited.
- `bankers`: An array of banker objects.
- `isEditingAgent`: A boolean indicating whether an agent is being edited.
- `editAgentId`: The ID of the agent being edited.
- `agents`: An array of agent objects.
- `hdb_records`: An array of past transaction records.

### Conclusion

The User Reducer handles various actions related to user management, advertisements, mortgage bankers, property agents, and past transactions. It updates the state based on the provided action type and returns a new state reflecting the changes.

<br>

## Pages

The pages folder in the web application contains the main pages that users interact with. This documentation provides an overview of the pages present within the folder, along with their descriptions and purposes.

### Folder Structure

The assets folder is organized as follows:

```
- pages
    - dashboard
        - AllAdverts.js
        - ChatPage.js
        - index.js
        - Menu.js
        - MortgageBankers.js
        - MyAdvert.js
        - PastTransaction.js
        - Profile.js
        - PropertyAgents.js
        - SellingGuide.js
    - Error.js
    - index.js
    - Landing.js
    - ProtectedRoute.js
    - Register.js
```

### Dashboard Folder

The `dashboard` folder contains pages related to the menu items in the web application. The pages within this folder include:

- `AllAdverts.js`: This page represents the Main Page and holds the `SingleAdvert`, `SearchContainer`, and `AdvertContainer` components. It displays a collection of advertisements and provides search functionality to filter and browse through the ads.

- `ChatPage.js`: This page represents the Chat History page and holds the `Messenger` component. It displays conversations and messages between users, facilitating communication within the web application.

- `index.js`: This file imports all the pages in the `dashboard` folder and exports them as a single module.

- `Menu.js`: This page represents the overlay page that holds the `BigSideBar` and `SmallSideBar` components, displaying the menu bar and providing navigation options.

- `MortgageBankers.js`: This page contains multiple `Form` components and functions to retrieve mortgage banker information from the server. It also includes the `BankerContainer` component, which is responsible for displaying the mortgage bankers' profiles.

- `MyAdvert.js`: This page represents the My Advertisement page. It consists of multiple `Form` components necessary for users to create or edit their own advertisements. It contains functions to trigger reducer actions to post a new advertisement, retrieve existing advertisements, and update existing advertisements.

- `PastTransaction.js`: This page represents the Past Transactions page, which includes a search function with multiple `Form` components. It sends a GET request to an external API based on the search parameters and displays the search results using the `DataGov` component.

- `Profile.js`: This page contains multiple `Form` components for users to edit their personal information.

- `PropertyAgents.js`: This page contains multiple `Form` components and functions to retrieve property agent information from the server. It also includes the `AgentContainer` component, responsible for displaying the property agents' profiles.

- `SellingGuide.js`: This page contains an array called `hdbGuide` that holds titles and descriptions for the 14 Steps Selling Guide. An `Accordion` component uses this array as a prop to display the guide on the page.

The pages within the `dashboard` folder provide various functionalities and information related to advertisements, chat history, mortgage bankers, user profiles, property agents, and selling guides.

### Pages Folder

The `pages` folder contains additional pages in the web application. The pages within this folder include:

- `Error.js`: This page represents the 404 error page, displayed when a user tries to access a non-existing page.

- `index.js`: This file imports all the pages in the `pages` folder and exports them as a single module.

- `Landing.js`: This page represents the main landing page that users see before logging in or registering.

- `ProtectedRoute.js`: This page ensures that unauthorized users are redirected back to the landing page or another designated page. It provides protection for certain routes that require authentication or authorization.

- `Register.js`: This page allows users to log in or register for an account. It contains multiple `Form` components for capturing user information.

The pages within the `pages` folder cater to various functionalities such as error handling, user authentication, registration, and the main landing page.

### Conclusion

The pages folder within the web application holds the main pages that users interact with. By understanding the purpose and functionality of each page, you can effectively navigate the web application and utilize its features and functionalities.

<br>

## Utils

### Folder Structure

The assets folder is organized as follows:

```
- utils
    - links.js
```

#### Links.js

Contains the text, path and icon for the 8 menu item. Exported as links to be used in the MenuBar

<br>

## `App.js` 

The `App.js` file is the entry point of your React application. It sets up the routing configuration using the `react-router-dom` library and defines the routes for different pages in your application.

### Usage

To use the `App` component, import it into your main file (e.g., `index.js`) and render it as the root component of your application.

The `App` component contains the following elements:

- `BrowserRouter`: The `BrowserRouter` component wraps the entire application and enables client-side routing using the HTML5 history API.
- `Routes`: The `Routes` component is used to define the routes of your application.
- `Route`: The `Route` component defines a specific route and its corresponding element/component to be rendered.
- `ProtectedRoute`: The `ProtectedRoute` component is a custom component that ensures the user is authenticated before accessing protected pages. It wraps the `Menu` component to enforce authentication.
- `Landing`, `Register`, and `Error`: These components are imported from the `pages` folder and represent the landing page, registration page, and error page, respectively.
- `AllAdverts`, `MyAdvert`, `ChatPage`, `SellingGuide`, `PastTransaction`, `MortgageBankers`, `PropertyAgents`, and `Profile`: These components are imported from the `pages/dashboard` folder and represent various pages in the dashboard section of your application.
- `Menu`: The `Menu` component represents the overlay page that contains the `BigSideBar` and `SmallSideBar` components for displaying the menu.

### Route Configuration

The `Routes` component is responsible for defining the routes of your application. Here's an overview of the defined routes:

- The root route ("/") is wrapped in a `ProtectedRoute` component to ensure that the user is authenticated. It renders the `Menu` component as the main content for protected pages.

  - The `Menu` component will be rendered for all routes within the protected route.
  - The `index` route (e.g., "/") renders the `AllAdverts` component.
  - Additional routes can be added within the protected route to map to their respective components (e.g., "/my-advert" maps to the `MyAdvert` component).

- Other routes outside the protected route include:
  - "/register" renders the `Register` component.
  - "/landing" renders the `Landing` component.
  - "\*" matches any other routes and renders the `Error` component, representing the 404 error page.

### Conclusion

The `App.js` file serves as the central configuration for routing and rendering different components based on the URL path in your React application.

<br>

## `webConfig.js`

`WEBSOCKET_URL` - This variable determines the URL for establishing WebSocket connections. It can be configured differently for development and deployment.

<br><br>

# Technical Documentation - NodeJs Backend

<br>

## Models

The models folder contains 6 Schema models that are used for creating objects to be stored into the MongoDB Database

### Folder Structure

The assets folder is organized as follows:

```
- models
    - Advert.js
    - Conversation.js
    - Message.js
    - MortgageBanker.js
    - PropertyAgent.js
    - Users.js
```

<br>

### `Advert.js`

The `AdvertSchema` defines the schema for the `Advert` model in your Mongoose database. It specifies the structure and validation rules for the `Advert` documents.

#### Usage

To use the `Advert` model, import it into your code and interact with the database using Mongoose methods such as `create`, `find`, `update`, and `delete`.

#### Schema Structure

The `AdvertSchema` consists of the following fields:

- `address`: The address of the unit. It is a required field with a maximum length of 50 characters.
- `postalCode`: The postal code of the unit. It is a required field and must be a valid numeric postal code with a length of 6 characters.
- `area`: The area of the unit. It is an optional field with a default value of "North". It can have one of the following values: "North", "East", "West", "South", or "Central".
- `unitType`: The type of the unit. It is an optional field with a default value of "2Room". It can have one of the following values: "2Room", "3Room", "4Room", "5Room", "EA", "Jumbo", or "Maisonette".
- `size`: The size of the unit in square feet. It is a required field and must be a valid numeric value with a length between 3 and 4 characters.
- `price`: The selling price of the unit. It is a required field and must be a valid numeric value with a maximum length of 7 digits.
- `description`: A short description of the unit. It is a required field with a maximum length of 500 characters.
- `imageSourceNames`: An array of strings representing the names of the image sources associated with the unit. It has a default value of an empty array.
- `createdBy`: The ID of the user who created the advert. It is a required field and references the `User` model.

Additionally, the schema includes the following options:

- `{ timestamps: true }`: This option adds `createdAt` and `updatedAt` fields to the document, automatically tracking the creation and modification timestamps.

<br>

### `Conversation.js`

The `ConversationSchema` defines the schema for the `Conversation` model in your Mongoose database. It specifies the structure of the conversation documents.

#### Usage

To use the `Conversation` model, import it into your code and interact with the database using Mongoose methods such as `create`, `find`, `update`, and `delete`.

#### Schema Structure

The `ConversationSchema` consists of the following field:

- `members`: An array field that holds the members of the conversation which includes the sender and recipient

Additionally, the schema includes the following options:

- `{ timestamps: true }`: This option adds `createdAt` and `updatedAt` fields to the document, automatically tracking the creation and modification timestamps.

<br>

### `Message.js`

The `MessageSchema` defines the schema for the `Message` model in your Mongoose database. It specifies the structure of the message documents.

#### Usage

To use the `Message` model, import it into your code and interact with the database using Mongoose methods such as `create`, `find`, `update`, and `delete`.

#### Schema Structure

The `MessageSchema` consists of the following fields:

- `conversationId`: A string field that holds the ID of the conversation to which the message belongs.
- `sender`: A string field that holds the sender of the message.
- `text`: A string field that holds the text content of the message.

Additionally, the schema includes the following options:

- `{ timestamps: true }`: This option adds `createdAt` and `updatedAt` fields to the document, automatically tracking the creation and modification timestamps.

This schema does not include any validation or constraints on the fields.

<br>

### `MortgageBanker.js`

The `MortgageBankerSchema` defines the schema for the `MortgageBanker` model in your Mongoose database. It specifies the structure of the mortgage banker documents.

#### Usage

To use the `MortgageBanker` model, import it into your code and interact with the database using Mongoose methods such as `create`, `find`, `update`, and `delete`.

#### Schema Structure

The `MortgageBankerSchema` consists of the following fields:

- `banker_name`: A string field that holds the name of the mortgage banker.
- `banker_bank`: A string field that holds the bank that the mortgage banker represents.
- `banker_position`: A string field that holds the position of the mortgage banker.
- `banker_number`: A string field that holds the contact number of the mortgage banker. It is validated using the `validator.isNumeric` function from the `validator` library to ensure it is a valid numeric value. It should be exactly 8 digits long.
- `banker_email`: A string field that holds the email of the mortgage banker. It is validated using the `validator.isEmail` function from the `validator` library to ensure it is a valid email address.
- `banker_image`: A string field that holds the path to the image of the mortgage banker. It has a default value of '/uploads/bankers/banker1.jpg', but can be customized to store the actual image path.

Additionally, the schema includes various validation rules, such as required fields and length constraints.

<br>

### `PropertyAgent.js`

The `PropertyAgentSchema` defines the schema for the `PropertyAgent` model in your Mongoose database. It specifies the structure of the property agent documents.

#### Usage

To use the `PropertyAgent` model, import it into your code and interact with the database using Mongoose methods such as `create`, `find`, `update`, and `delete`.

#### Schema Structure

The `PropertyAgentSchema` consists of the following fields:

- `agent_name`: A string field that holds the name of the property agent.
- `agent_company`: A string field that holds the company that the property agent represents.
- `agent_position`: A string field that holds the position of the property agent.
- `agent_number`: A string field that holds the contact number of the property agent. It is validated using the `validator.isNumeric` function from the `validator` library to ensure it is a valid numeric value. It should be exactly 8 digits long.
- `agent_email`: A string field that holds the email of the property agent. It is validated using the `validator.isEmail` function from the `validator` library to ensure it is a valid email address.
- `agent_image`: A string field that holds the path to the image of the property agent. It has a default value of '/uploads/bankers/agent1.jpeg', but can be customized to store the actual image path.

Additionally, the schema includes various validation rules, such as required fields and length constraints.

<br>

### `User.js` Documentation

The `UserSchema` defines the schema for the `User` model in your Mongoose database. It specifies the structure of the user documents.

#### Usage

To use the `User` model, import it into your code and interact with the database using Mongoose methods such as `create`, `find`, `update`, and `delete`.

#### Schema Structure

The `UserSchema` consists of the following fields:

- `name`: A string field that holds the name of the user. It is required and should be between 3 and 20 characters long.
- `email`: A string field that holds the email of the user. It is required and validated using the `validator.isEmail` function from the `validator` library to ensure it is a valid email address. It should be unique.
- `number`: A string field that holds the contact number of the user. It is required and validated using the `validator.isNumeric` function from the `validator` library to ensure it is a valid numeric value. It should be exactly 8 digits long. It should also be unique.
- `password`: A string field that holds the password of the user. It is required and should be at least 6 characters long. The password is stored securely using bcrypt hashing. The field is not selected by default when querying the database (using `select: false`).

Additionally, the schema includes the following methods:

- `pre('save')`: A pre-save middleware that automatically hashes the user's password using bcrypt before saving the document to the database. It only hashes the password if it has been modified.
- `createJWT()`: A method that generates a JSON Web Token (JWT) for the user, containing the user's ID as the payload. The method signs the token using the `process.env.JWT_SECRET` and sets an expiration time based on the `process.env.JWT_LIFETIME` environment variables.
- `comparePassword(candidatePassword)`: A method that compares a candidate password with the user's hashed password stored in the database. It returns a boolean indicating whether the passwords match.

<br>

## Controllers

The `controllers` folder contains controllers responsible for handling various aspects of your application's functionality. These controllers interact with the models to perform CRUD (Create, Read, Update, Delete) operations and handle business logic.

### Folder Structure
The `controllers` folder is organized as follows:
```
- controllers
  - advertController.js
  - agentController.js
  - authController.js
  - bankerController.js
  - conversationController.js
  - messageController.js
```

### `advertController.js`

The `advertController.js` contains controller functions for managing property advertisements. These functions handle the creation, retrieval, update, and deletion of property advertisements, as well as image-related operations.


#### Create Advert

**Method:** `POST /api/adverts`

**Description:** Creates a new advertisement.

- **Parameters:**
  - `address` (string): The address of the advertisement.
  - `postalCode` (string): The postal code of the advertisement.
  - `area` (string): The area of the advertisement.
  - `unitType` (string): The unit type of the advertisement.
  - `size` (number): The size of the advertisement.
  - `price` (number): The price of the advertisement.
  - `description` (string): The description of the advertisement.
  - `imageSourceNames` (array of strings): An array of image source names associated with the advertisement.

#### Get Single Advert

**Method:** `GET /api/adverts/:id`

**Description:** Retrieves a single advertisement by user ID.

- **Parameters:**
  - `id` (string): The ID of the user who created the advertisement.

#### Upload Image

**Method:** `POST /api/adverts/upload-image`

**Description:** Uploads one or more images for an advertisement.

- **Parameters:**
  - `image` (array of files): An array of image files to upload.

#### Get All Adverts

**Method:** `GET /api/adverts`

**Description:** Retrieves a list of advertisements based on query parameters.

- **Query Parameters:**
  - `search` (string, optional): A search query to filter advertisements by address.
  - `area` (string, optional): Filter advertisements by area.
  - `unitType` (string, optional): Filter advertisements by unit type.
  - `minPrice` (number, optional): Minimum price filter.
  - `maxPrice` (number, optional): Maximum price filter.
  - `page` (number, optional): The page number for pagination.
  - `limit` (number, optional): The maximum number of advertisements per page.

#### Update Advert

**Method:** `PUT /api/adverts/:id`

**Description:** Updates an existing advertisement by user ID.

- **Parameters:**
  - `id` (string): The ID of the user who created the advertisement.
  - `address` (string): The updated address of the advertisement.
  - `postalCode` (string): The updated postal code of the advertisement.
  - `area` (string): The updated area of the advertisement.
  - `unitType` (string): The updated unit type of the advertisement.
  - `size` (number): The updated size of the advertisement.
  - `price` (number): The updated price of the advertisement.
  - `description` (string): The updated description of the advertisement.
  - `imageSourceNames` (array of strings): The updated array of image source names associated with the advertisement.

#### Delete Advert

**Method:** `DELETE /api/adverts/:id`

**Description:** Deletes an advertisement by user ID.

- **Parameters:**
  - `id` (string): The ID of the user who created the advertisement.

#### Delete Single Image

**Method:** `DELETE /api/adverts/delete-image`

**Description:** Deletes a single image associated with an advertisement.

- **Parameters:**
  - `userId` (string): The ID of the user who created the advertisement.
  - `imageUrl` (string): The URL of the image to delete.

#### Delete Images

**Method:** `DELETE /api/adverts/delete-images`

**Description:** Deletes multiple images associated with an advertisement.

- **Parameters:**
  - `imageFiles` (array of strings): An array of image URLs to delete.

The `advertController.js` allows you to perform CRUD operations on advertisements, including creation, retrieval, update, and deletion. It also supports image uploads and deletion of images associated with advertisements.

<br>

### `agentController.js`

The `agentController.js` contains controller functions for managing property agent profiles. These functions handle the creation, retrieval, update, and deletion of property agent profiles, as well as image-related operations.


#### Create Agent

**Method:** `POST /api/agents`

**Description:** Creates a new property agent.

- **Parameters:**
  - `agent_name` (string): The name of the property agent.
  - `agent_company` (string): The company name of the property agent.
  - `agent_position` (string): The position/title of the property agent.
  - `agent_number` (string): The contact number of the property agent.
  - `agent_email` (string): The email address of the property agent.
  - `agent_image` (string): The image source URL of the property agent.

#### Get All Agents

**Method:** `GET /api/agents`

**Description:** Retrieves a list of all property agents.

#### Update Agent

**Method:** `PUT /api/agents/:id`

**Description:** Updates an existing property agent by agent ID.

- **Parameters:**
  - `id` (string): The ID of the property agent to update.
  - `agent_name` (string): The updated name of the property agent.
  - `agent_company` (string): The updated company name of the property agent.
  - `agent_position` (string): The updated position/title of the property agent.
  - `agent_number` (string): The updated contact number of the property agent.
  - `agent_email` (string): The updated email address of the property agent.
  - `agent_image` (string): The updated image source URL of the property agent.

#### Delete Agent

**Method:** `DELETE /api/agents/:id`

**Description:** Deletes a property agent by agent ID.

- **Parameters:**
  - `id` (string): The ID of the property agent to delete.

#### Upload Image

**Method:** `POST /api/agents/upload-image`

**Description:** Uploads an image for a property agent.

- **Parameters:**
  - `image` (file): The image file to upload.

#### Delete Image

**Method:** `DELETE /api/agents/delete-image`

**Description:** Deletes an image associated with a property agent.

- **Parameters:**
  - `image` (string): The image source URL to delete.

The `agentController.js` allows you to manage property agents by creating, updating, deleting, and retrieving property agents. It also provides functionality for uploading and deleting agent images.


<br>

### `authController.js`

The `authController.js` contains the controller functions responsible for handling user authentication and user-related operations.

#### Register

**Method:** `POST /api/auth/register`

**Description:** Registers a new user.

- **Parameters:**
  - `name` (string): The name of the user.
  - `email` (string): The email address of the user.
  - `password` (string): The user's password.
  - `number` (string): The user's contact number.

#### Login

**Method:** `POST /api/auth/login`

**Description:** Logs in a user and provides an authentication token.

- **Parameters:**
  - `email` (string): The email address of the user.
  - `password` (string): The user's password.

#### Update User

**Method:** `PUT /api/auth/update`

**Description:** Updates user information.

- **Parameters:**
  - `email` (string): The updated email address of the user.
  - `name` (string): The updated name of the user.
  - `number` (string): The updated contact number of the user.

#### Get User

**Method:** `GET /api/auth/user/:id`

**Description:** Retrieves user information by user ID.

- **Parameters:**
  - `id` (string): The ID of the user to retrieve.

The `authController.js` provides endpoints for user registration, login, updating user information, and retrieving user information by user ID. It also handles error responses for invalid requests.

<br>

### `bankerController.js`

The `bankerController.js` contains controller functions for managing mortgage banker profiles. These functions handle the creation, retrieval, update, and deletion of mortgage banker profiles, as well as image-related operations.

#### Create Banker

**Method:** `POST /api/bankers`

**Description:** Creates a new mortgage banker.

- **Parameters:**
  - `banker_name` (string): The name of the mortgage banker.
  - `banker_bank` (string): The bank associated with the mortgage banker.
  - `banker_position` (string): The position or title of the mortgage banker.
  - `banker_number` (string): The contact number of the mortgage banker.
  - `banker_email` (string): The email address of the mortgage banker.
  - `banker_image` (string): URL of the mortgage banker's image.

#### Get All Bankers

**Method:** `GET /api/bankers`

**Description:** Retrieves a list of all mortgage bankers.

#### Update Banker

**Method:** `PUT /api/bankers/:id`

**Description:** Updates information about a mortgage banker by ID.

- **Parameters:**
  - `id` (string): The ID of the mortgage banker to update.
  - `banker_name` (string): The updated name of the mortgage banker.
  - `banker_bank` (string): The updated bank associated with the mortgage banker.
  - `banker_position` (string): The updated position or title of the mortgage banker.
  - `banker_number` (string): The updated contact number of the mortgage banker.
  - `banker_email` (string): The updated email address of the mortgage banker.
  - `banker_image` (string): URL of the updated mortgage banker's image.

#### Delete Banker

**Method:** `DELETE /api/bankers/:id`

**Description:** Deletes a mortgage banker by ID.

- **Parameters:**
  - `id` (string): The ID of the mortgage banker to delete.

#### Upload Image

**Method:** `POST /api/bankers/upload`

**Description:** Uploads an image for a mortgage banker.

- **Parameters:**
  - `image` (file): The image file to upload.

#### Delete Image

**Method:** `DELETE /api/bankers/image`

**Description:** Deletes an image associated with a mortgage banker.

- **Parameters:**
  - `image` (string): URL of the image to delete.

The `bankerController.js` provides endpoints for creating, retrieving, updating, and deleting mortgage bankers, as well as uploading and deleting associated images. It handles error responses for invalid requests.

<br>

### `conversationController.js`

The `conversationController.js` contains controller functions for managing conversations between users. These functions handle the creation of conversations, retrieval of conversations, and checking for existing conversations.

#### Create Conversation

**Method:** `POST /api/conversations`

**Description:** Creates a new conversation between two users.

- **Parameters:**
  - `senderId` (string): The ID of the sender user.
  - `receiverId` (string): The ID of the receiver user.

#### Get Conversation

**Method:** `GET /api/conversations/:id`

**Description:** Retrieves conversations involving a specific user by their ID.

- **Parameters:**
  - `id` (string): The ID of the user to retrieve conversations for.

#### Check Existing Conversation

**Method:** `GET /api/conversations/check/:senderId/:receiverId`

**Description:** Checks if a conversation already exists between two users.

- **Parameters:**
  - `senderId` (string): The ID of the sender user.
  - `receiverId` (string): The ID of the receiver user.

The `conversationController.js` provides endpoints for creating conversations, retrieving conversations involving a specific user, and checking if a conversation exists between two users. It handles error responses for invalid requests and missing conversations.

<br>

### `messageController.js`

The `messageController.js` contains controller functions for managing messages within conversations. These functions handle the creation of new messages and retrieval of messages within a conversation.

#### New Message

**Method:** `POST /api/messages`

**Description:** Creates a new message and adds it to a conversation.

- **Request Body:**
  - `message` (object): The message object to be created.

#### Get Messages

**Method:** `GET /api/messages/:conversationId`

**Description:** Retrieves all messages within a conversation based on the conversation ID.

- **Parameters:**
  - `conversationId` (string): The ID of the conversation to retrieve messages from.

The `messageController.js` provides endpoints for creating new messages and retrieving messages within a specific conversation. It handles error responses for invalid requests and missing messages.


<br>

## Database 

### Folder Structure 
The assets folder is organized as follows:

```
- db
    - connect.js
```
### `connect.js`

The `connect.js` file contains a function for connecting to a MongoDB database using Mongoose.

#### `connectDB(url)`

**Description:** This function establishes a connection to a MongoDB database using the provided URL.

**Parameters:**
- `url` (string): The URL of the MongoDB database to connect to.

**Usage:**
```javascript
import mongoose from 'mongoose';

const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;
```
<br>

## Errors

The errors folder consists of files that handle various kinds of errors in the server accordingly.

### Folder Structure
The `errors` folder is organized as follows:
```
- errors
  - bad-request.js
  - custom-api.js
  - index.js
  - not-found.js
  - unauthenticated.js
```

### `bad-request` Class

The `BadRequestError` class is a custom error class that extends the `CustomerAPIError` class. It is used to represent HTTP 400 Bad Request errors in your application. This error class allows you to handle and communicate bad request errors with specific error messages.

#### Constructor

- **Parameters:**
  - `message` (string): A custom error message that describes the reason for the bad request error.

#### Properties

- `statusCode` (number): The HTTP status code associated with the error, which is set to `400` for Bad Request errors.

#### Example Usage

```javascript
import CustomerAPIError from './custom-api.js';
import { StatusCodes } from 'http-status-codes';

class BadRequestError extends CustomerAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

// Creating a BadRequestError instance
const error = new BadRequestError('Invalid input data');

// Accessing the statusCode property
console.log(error.statusCode); // Outputs: 400
```

### `custom-api.js`

The `Custom-API` class is a custom error class that extends the built-in JavaScript `Error` class. It serves as the base class for handling custom errors in your API or application.

#### Constructor

- **Parameters:**
  - `message` (string): A custom error message that describes the reason for the error.

#### Properties

- `name` (string): The name of the error, which is automatically set to `"CustomerAPIError"`.
- `message` (string): The custom error message provided during instantiation.

#### Example Usage

```javascript
class CustomerAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

// Creating a CustomerAPIError instance
const error = new CustomerAPIError('An error occurred');

// Accessing the name and message properties
console.log(error.name); // Outputs: "CustomerAPIError"
console.log(error.message); // Outputs: "An error occurred"
```

### `not-found.js`

The `NotFoundError` class is a custom error class that extends the `CustomerAPIError` class. It is used to represent HTTP 404 Not Found errors in your application. This error class allows you to handle and communicate resource not found errors with specific error messages.

#### Constructor

- **Parameters:**
  - `message` (string): A custom error message that describes the reason for the resource not found error.

#### Properties

- `statusCode` (number): The HTTP status code associated with the error, which is set to `404` for Not Found errors.

#### Example Usage

```javascript
import CustomerAPIError from './custom-api.js';
import { StatusCodes } from 'http-status-codes';

class NotFoundError extends CustomerAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

// Creating a NotFoundError instance
const error = new NotFoundError('Resource not found');

// Accessing the statusCode property
console.log(error.statusCode); // Outputs: 404
```

### `unauthenticated.js`

The `UnAuthenticatedError` class is a custom error class that extends the `CustomerAPIError` class. It is used to represent HTTP 401 Unauthorized errors in your application. This error class allows you to handle and communicate authentication-related errors with specific error messages.

#### Constructor

- **Parameters:**
  - `message` (string): A custom error message that describes the reason for the authentication error.

#### Properties

- `statusCode` (number): The HTTP status code associated with the error, which is set to `401` for Unauthorized errors.

#### Example Usage

```javascript
import CustomerAPIError from './custom-api.js';
import { StatusCodes } from 'http-status-codes';

class UnAuthenticatedError extends CustomerAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

// Creating an UnAuthenticatedError instance
const error = new UnAuthenticatedError('Unauthorized access');

// Accessing the statusCode property
console.log(error.statusCode); // Outputs: 401
```

<br>

## Middleware

The `middleware` folder contains custom middleware functions used to handle various aspects of request processing in the application.

### Folder Structure
The `middleware` folder is organized as follows:
```
- errors
  - auth.js
  - error-handler.js
  - index.js
  - not-found.js
```
### `auth.js`

The `auth.js` middleware is responsible for authenticating and authorizing incoming requests by verifying JSON Web Tokens (JWT).

#### Authentication Middleware

**Description:** This middleware is used to ensure that incoming requests are made by authenticated users. It verifies the validity of the JWT token provided in the `Authorization` header.

- **Usage:** It should be applied to routes that require authentication and authorization.

#### Authentication Process

1. Extract the JWT token from the `Authorization` header in the incoming request.
2. Verify the token using the JWT secret key defined in the environment variables.
3. If the token is valid, extract the user ID from the payload and attach it to the `req.user` object for use in subsequent middleware or route handlers.
4. If the token is invalid or missing, it throws an `UnAuthenticatedError` with an error message.

#### Example Usage

Apply this middleware to routes that require authentication as follows:

```javascript
const express = require('express');
const authMiddleware = require('../middleware/auth.js');
const router = express.Router();

// Apply the auth middleware to protect the route
router.get('/protected-route', authMiddleware, (req, res) => {
  // Route handler logic for protected route
});

module.exports = router;
```

### `error-handler.js`

The `error-handler.js` middleware is responsible for handling errors and formatting error responses for HTTP requests.

#### Error Handling Middleware

**Description:** This middleware is used to handle errors that occur during the processing of HTTP requests and send appropriate error responses to the client.

- **Usage:** It should be used as error handling middleware in your Express application.

#### Error Handling Process

1. The middleware receives the `err` object, which represents the error that occurred.
2. It checks the type and properties of the error to determine the appropriate HTTP status code and error message.
3. If the error is of type `ValidationError`, it sets the status code to `StatusCodes.BAD_REQUEST` and formats the error message to include details of the validation errors.
4. If the error is of type `MongoError` with code `11000`, it sets the status code to `StatusCodes.BAD_REQUEST` and provides a message indicating that a unique field constraint has been violated.
5. For other types of errors or if no specific error handling condition is met, it sets the status code to `StatusCodes.INTERNAL_SERVER_ERROR` and provides a generic error message.
6. The formatted error response is then sent to the client with the appropriate status code and error message.

#### Example Usage

Apply this middleware to your Express application to handle errors globally:

```javascript
const express = require('express');
const { StatusCodes } = require('http-status-codes');
const errorHandlerMiddleware = require('./errorHandlerMiddleware.js');
const app = express();

// ... Other middleware and route handlers ...

// Apply the error handler middleware at the end of the middleware chain
app.use(errorHandlerMiddleware);

// ... Start the Express server ...

module.exports = app;
```
### `notFoundMiddleware.js`

The `notFoundMiddleware.js` middleware is responsible for handling requests to routes that do not exist in the application.

#### Not Found Middleware

**Description:** This middleware is used to handle incoming requests to routes that do not match any defined routes in the application. It sends a 404 Not Found response to the client.

- **Usage:** It should be applied as a catch-all middleware at the end of the middleware chain in your Express application to handle unmatched routes.

#### Error Handling Process

1. When a request is made to a route that does not match any of the defined routes, this middleware is triggered.
2. It responds with a 404 status code and a simple message indicating that the requested route does not exist.

#### Example Usage

Apply this middleware at the end of the middleware chain in your Express application to handle unmatched routes:

```javascript
const express = require('express');
const notFoundMiddleware = require('./notFoundMiddleware.js');
const app = express();

// ... Other middleware and route handlers ...

// Apply the not found middleware at the end to catch unmatched routes
app.use(notFoundMiddleware);

// ... Start the Express server ...

module.exports = app;
```

<br>

## Public

The public folder serves as a storage location for images used in the application, making them publicly accessible to users. These images can include property photos, agent profile pictures, and other visual assets displayed on the platform.

### Folder Structure
The `public` folder is organized as follows:
```
- public
  - uploads folder
    - agents folder
    - bankers folder
```

#### uploads

Holds the uploaded images of advertisements uploaded by users. It also holds the agents and bankers image folder

#### agents

Holds the display photos of the property agents. Photos of agents uploaded will be stored in this folder

#### bankers

Holds the display photos of the mortgage bankers. Photos of bankers uploaded will be stored in this folder

<br>

## Routes


### Folder Structure
The `routes` folder is organized as follows:
```
- public
  - advertRoutes.js
  - agentRoutes.js
  - authRoutes.js
  -bankerRoutes.js
  -conversationRoutes.js
  -messageRoutes.js
```

### `advertRoutes.js`

The `advertRoutes.js` router is responsible for defining and handling routes related to advertisements in the application.

#### Advertisements Router

**Description:** This router defines and handles routes for creating, retrieving, updating, and deleting advertisements in the application. It also includes routes for uploading, deleting single, and deleting multiple advertisement images.

- **Usage:** Import and apply this router in your Express application to manage advertisement-related routes.

#### Routes

1. **POST `/`**
   - Description: Create a new advertisement.
   - Controller: `createAdvert` in `advertController.js`.
   - HTTP Method: POST.
   - Request Body: JSON data containing advertisement details.
   - Response: JSON response with the created advertisement data.

2. **GET `/`**
   - Description: Get a list of all advertisements.
   - Controller: `getAllAdvert` in `advertController.js`.
   - HTTP Method: GET.
   - Response: JSON response with an array of advertisements.

3. **GET `/:id`**
   - Description: Get a single advertisement by ID.
   - Controller: `getSingleAdvert` in `advertController.js`.
   - HTTP Method: GET.
   - Response: JSON response with the advertisement details.

4. **PATCH `/:id`**
   - Description: Update a single advertisement by ID.
   - Controller: `updateAdvert` in `advertController.js`.
   - HTTP Method: PATCH.
   - Request Body: JSON data containing advertisement details to be updated.
   - Response: JSON response with the updated advertisement data.

5. **DELETE `/:id`**
   - Description: Delete a single advertisement by ID.
   - Controller: `deleteAdvert` in `advertController.js`.
   - HTTP Method: DELETE.
   - Response: JSON response indicating the success of the deletion operation.

6. **POST `/uploadImage`**
   - Description: Upload one or more images for an advertisement.
   - Controller: `uploadImage` in `advertController.js`.
   - HTTP Method: POST.
   - Request: Form data containing image files.
   - Response: JSON response with the uploaded image URLs.

7. **DELETE `/deleteSingleImage`**
   - Description: Delete a single image from an advertisement.
   - Controller: `deleteSingleImage` in `advertController.js`.
   - HTTP Method: DELETE.
   - Request Body: JSON data containing the user ID and image URL to delete.
   - Response: JSON response indicating the success of the image deletion.

8. **DELETE `/deleteImages`**
   - Description: Delete multiple images from an advertisement.
   - Controller: `deleteImages` in `advertController.js`.
   - HTTP Method: DELETE.
   - Request Body: JSON data containing an array of image URLs to delete.
   - Response: JSON response indicating the success of the image deletions.

<br>

### `agentRoutes.js`

The `agentRoutes.js` router is responsible for defining and handling routes related to property agents in the application.

#### Property Agents Router

**Description:** This router defines and handles routes for creating, retrieving, updating, and deleting property agents in the application. It also includes routes for uploading and deleting property agent images.

- **Usage:** Import and apply this router in your Express application to manage property agent-related routes.

#### Routes

1. **POST `/`**
   - Description: Create a new property agent.
   - Controller: `createAgent` in `agentController.js`.
   - HTTP Method: POST.
   - Request Body: JSON data containing property agent details.
   - Response: JSON response with the created property agent data.

2. **GET `/`**
   - Description: Get a list of all property agents.
   - Controller: `getAllAgents` in `agentController.js`.
   - HTTP Method: GET.
   - Response: JSON response with an array of property agents.

3. **POST `/uploadImage`**
   - Description: Upload an image for a property agent.
   - Controller: `uploadImage` in `agentController.js`.
   - HTTP Method: POST.
   - Request: Form data containing an image file.
   - Response: JSON response with the uploaded image URL.

4. **DELETE `/deleteImage`**
   - Description: Delete an image associated with a property agent.
   - Controller: `deleteImage` in `agentController.js`.
   - HTTP Method: DELETE.
   - Request Body: JSON data containing the image URL to delete.
   - Response: JSON response indicating the success of the image deletion.

5. **DELETE `/:id`**
   - Description: Delete a property agent by ID.
   - Controller: `deleteAgent` in `agentController.js`.
   - HTTP Method: DELETE.
   - Response: JSON response indicating the success of the deletion operation.

6. **PATCH `/:id`**
   - Description: Update a property agent by ID.
   - Controller: `updateAgent` in `agentController.js`.
   - HTTP Method: PATCH.
   - Request Body: JSON data containing property agent details to be updated.
   - Response: JSON response with the updated property agent data.

<br>

### `authRoutes.js`

The `authRoutes.js` router is responsible for defining and handling routes related to user authentication and user profile management in the application.

#### Authentication and User Profile Router

**Description:** This router defines and handles routes for user registration, login, updating user profiles, and retrieving user information. It also includes route protection using authentication middleware.

- **Usage:** Import and apply this router in your Express application to manage authentication and user profile-related routes.

#### Routes

1. **POST `/register`**
   - Description: Register a new user.
   - Controller: `register` in `authController.js`.
   - HTTP Method: POST.
   - Request Body: JSON data containing user registration details.
   - Response: JSON response with the registered user's data and authentication token.

2. **POST `/login`**
   - Description: Log in an existing user.
   - Controller: `login` in `authController.js`.
   - HTTP Method: POST.
   - Request Body: JSON data containing user login credentials.
   - Response: JSON response with the authenticated user's data and authentication token.

3. **PATCH `/updateUser`**
   - Description: Update the user's profile.
   - Controller: `updateUser` in `authController.js`.
   - HTTP Method: PATCH.
   - Middleware: `authenticateUser` for user authentication.
   - Request Body: JSON data containing updated user profile information.
   - Response: JSON response with the updated user profile data.

4. **GET `/:id`**
   - Description: Get user information by ID.
   - Controller: `getUser` in `authController.js`.
   - HTTP Method: GET.
   - Request Params: User ID.
   - Response: JSON response with the user's information.

<br>

### `bankerRoutes.js`

The `bankerRoutes.js` router is responsible for defining and handling routes related to mortgage bankers in the application.

#### Mortgage Banker Router

**Description:** This router defines and handles routes for creating, retrieving, updating, and deleting mortgage banker information. It also includes routes for uploading and deleting banker images.

- **Usage:** Import and apply this router in your Express application to manage mortgage banker-related routes.

#### Routes

1. **POST `/`**
   - Description: Create a new mortgage banker.
   - Controller: `createBanker` in `bankerController.js`.
   - HTTP Method: POST.
   - Request Body: JSON data containing mortgage banker information.
   - Response: JSON response with the created mortgage banker data.

2. **GET `/`**
   - Description: Get a list of all mortgage bankers.
   - Controller: `getAllBankers` in `bankerController.js`.
   - HTTP Method: GET.
   - Response: JSON response with a list of mortgage banker data.

3. **PATCH `/:id`**
   - Description: Update mortgage banker information by ID.
   - Controller: `updateBanker` in `bankerController.js`.
   - HTTP Method: PATCH.
   - Request Params: Mortgage banker ID.
   - Request Body: JSON data containing updated mortgage banker information.
   - Response: JSON response with the updated mortgage banker data.

4. **DELETE `/:id`**
   - Description: Delete a mortgage banker by ID.
   - Controller: `deleteBanker` in `bankerController.js`.
   - HTTP Method: DELETE.
   - Request Params: Mortgage banker ID.
   - Response: JSON response confirming the deletion of the mortgage banker.

5. **POST `/uploadImage`**
   - Description: Upload an image for a mortgage banker.
   - Controller: `uploadImage` in `bankerController.js`.
   - HTTP Method: POST.
   - Request Body: Form data containing the banker's image.
   - Response: JSON response with the URL of the uploaded image.

6. **DELETE `/deleteImage`**
   - Description: Delete a mortgage banker's image.
   - Controller: `deleteImage` in `bankerController.js`.
   - HTTP Method: DELETE.
   - Request Body: JSON data containing the image URL.
   - Response: JSON response confirming the deletion of the image.

<br>

### `conversationRoutes.js`

The `conversationRoutes.js` router is responsible for defining and handling routes related to conversations in the application.

#### Conversation Router

**Description:** This router defines and handles routes for creating conversations, retrieving conversations by ID, and checking for the existence of conversations between two users.

- **Usage:** Import and apply this router in your Express application to manage conversation-related routes.

#### Routes

1. **POST `/`**
   - Description: Create a new conversation.
   - Controller: `createConversation` in `conversationController.js`.
   - HTTP Method: POST.
   - Request Body: JSON data containing sender and receiver IDs.
   - Response: JSON response with the newly created conversation data.

2. **GET `/:id`**
   - Description: Get a conversation by its ID.
   - Controller: `getConversation` in `conversationController.js`.
   - HTTP Method: GET.
   - Request Params: Conversation ID.
   - Response: JSON response with the conversation data.

3. **GET `/:senderId/:receiverId`**
   - Description: Check if a conversation exists between two users (sender and receiver).
   - Controller: `checkExistingConversation` in `conversationController.js`.
   - HTTP Method: GET.
   - Request Params: Sender ID and Receiver ID.
   - Response: JSON response indicating whether the conversation exists or not.

<br>

### `messageRoutes.js`

The `messageRoutes.js` router is responsible for defining and handling routes related to messages in the application.

#### Message Router

**Description:** This router defines and handles routes for creating new messages and retrieving messages by conversation ID.

- **Usage:** Import and apply this router in your Express application to manage message-related routes.

#### Routes

1. **POST `/`**
   - Description: Create a new message.
   - Controller: `newMessage` in `messageController.js`.
   - HTTP Method: POST.
   - Request Body: JSON data containing message details.
   - Response: JSON response with the saved message data.

2. **GET `/:conversationId`**
   - Description: Get all messages for a specific conversation by its ID.
   - Controller: `getMessage` in `messageController.js`.
   - HTTP Method: GET.
   - Request Params: Conversation ID.
   - Response: JSON response with an array of messages for the specified conversation.

<br>

## Main Files

### `Environment Variables (.env)`

Environment variables are configuration settings that can be used to customize the behavior of your application without changing the source code. These variables are often used to store sensitive information or configuration options. Below are the environment variables used in your application:

#### `PORT`

- **Description:** The `PORT` environment variable specifies the port on which your Node.js application will listen for incoming HTTP requests.
- **Usage:** Your application will bind to this port to listen for HTTP traffic.
- **Example:** `PORT=5000`

#### `MONGO_URL`

- **Description:** The `MONGO_URL` environment variable specifies the URL for connecting to your MongoDB database.
- **Usage:** Your application will use this URL to establish a connection to the database.
- **Example:** `MONGO_URL=mongodb+srv://<username>:<password>@xxxxxxx?retryWrites=true&w=majority`

#### `JWT_SECRET`

- **Description:** The `JWT_SECRET` environment variable is used to sign JSON Web Tokens (JWTs) for authentication and authorization purposes.
- **Usage:** Your application will use this secret to encode and decode JWTs.
- **Example:** `JWT_SECRET=xxxxxxxxxxxxxxxxxxxx`

#### `JWT_LIFETIME`

- **Description:** The `JWT_LIFETIME` environment variable specifies the lifetime (expiration time) of JSON Web Tokens (JWTs).
- **Usage:** It defines how long a JWT token remains valid before it expires.
- **Example:** `JWT_LIFETIME=1d`

#### `NODE_ENV`

- **Description:** The `NODE_ENV` environment variable indicates the current environment of your application, such as 'development', 'production', or 'testing'.
- **Usage:** Your application can use this variable to enable different behaviors or optimizations based on the environment.
- **Example:** `NODE_ENV=production`

#### `CORS_URL`

- **Description:** The `CORS_URL` environment variable specifies the allowed origins for Cross-Origin Resource Sharing (CORS) in your application.
- **Usage:** It defines the domains that are allowed to make requests to your server from different origins.
- **Example:** `CORS_URL=http://localhost:3000,http://localhost:5000,http://192.168.01.01:5000,

These environment variables play a crucial role in configuring and securing your application. Ensure that they are set correctly based on your application's requirements and deployment environment.

<br>

### `Server.js`

Contains methods to initialize the server and also socket server. 

<br><br>

# Technical Documentation - React Native Mobile Frontend

## Assets

The Assets folder as a centralized repository for static resources, such as fonts, icons, and images. It includes dedicated subfolders like "font" for custom fonts, "icons" for icon sets, and "images" for general image assets, including essential files like "splash.png" and "logo.png" used throughout the application's UI and branding.

### Folder Structure
The `assets` folder is organized as follows:
```
- assets
  - fonts folder
    -fonts
  - icons folder
    -icons
  - images folder
    -images
  - images
```
<br>

## Components 

The Components folder contains reusable and modular code blocks are used on various pages.

### Folder Structure
The `components` folder is organized as follows:
```
- components
  - advertisement
    -AdvertisementCard.js
    -AdvertisementDetails.js
    -AdvertSearchModal.js
    -ImageDisplay.js
  - Auth
    -AuthContent.js
    -AuthForm.js
    -Input.js
  - messaging
    -Conversation.js
    -Message.js
    -Messenger.js
  - pastTransactions
    -SearchModal.js
  - sellingGuide
    -CustomText.js
    -StepModal.js
    -Title.js
  - ui
    -Agent.js
    -Banker.js
    -BottomMenu.js
```

### Advertisement Folder

The "Advertisement" folder contains components related to displaying advertisements on the website.

#### `AdvertisementCard.js`

The `AdvertisementCard` component is used to display a summary view of an advertisement. It provides information such as the address, price, size, unit type, and date posted.

#### Props

- `advertisement` (Object, required): An object containing the details of the advertisement to be displayed. It should have the following properties:
  - `address` (String, required): The address of the property being advertised.
  - `price` (Number, required): The price of the property.
  - `size` (Number, required): The size of the property in square feet.
  - `unitType` (String, required): The type of unit (e.g., apartment, house).
  - `createdAt` (String, required): The date when the advertisement was posted.
  - `imageSourceNames` (Array of Strings, required): An array of image URLs representing the property's images. The first image is used as the card's main image.

<br>

#### `AdvertisementDetails.js`

The AdvertisementDetails component provides a detailed view of a specific advertisement. It displays additional information about the advertisement, including images, address, unit type, area, price, description, and more.

#### Props
- `route` (Object, required): React Navigation route object that contains the advertisement details passed as parameters.

<br>

#### `AdvertSearchModal.js`

The `AdvertSearchModal` component is a modal that allows users to search for advertisements based on various criteria such as unit type, location, minimum price, and maximum price.

#### Props

- `visible` (Boolean, required): Indicates whether the modal is visible.
- `onClose` (Function, required): A function to close the modal.

<br>

#### `ImageDisplay.js`

The `ImageDisplay` component is used to display a set of images related to an advertisement. It provides a grid of images with an option to delete individual images.

#### Props

- `images` (Array of Strings, required): An array of image URLs to be displayed.
- `onDeleteImage` (Function, required): A callback function to delete an image.

<br>

### Auth Folder

#### `AuthContent.js`

The `AuthContent` component is responsible for rendering the authentication content, including the authentication form, logo image, and navigation buttons.

#### Props

- `isLogin` (Boolean, required): Indicates whether the authentication mode is for login (true) or registration (false).
- `onAuthenticate` (Function, required): A callback function to handle user authentication.

<br>

#### `AuthForm.js`

The `AuthForm` component is responsible for rendering the authentication form, including input fields for name, email, number, and password, as well as handling user input and submission.

#### Props

- `isLogin` (Boolean, required): Indicates whether the form is for login (true) or registration (false).
- `onSubmit` (Function, required): A callback function to handle form submission.
- `credentialsInvalid` (Object, required): An object containing boolean flags for input field validation (name, email, number, password).

<br>

#### `Input.js`

The `Input` component is a reusable form input field that displays a label, takes user input, and supports various configurations for keyboard type, secure input, and validation styling.

#### Props

- `label` (String, required): The label displayed above the input field.
- `keyboardType` (String, optional): The type of keyboard to display (e.g., 'default', 'numeric', 'email-address', 'phone-pad', etc.).
- `secure` (Boolean, optional): Indicates whether the input should be treated as a password input (masked).
- `onUpdateValue` (Function, required): A callback function to handle input changes.
- `value` (String, required): The current value of the input field.
- `isInvalid` (Boolean, optional): Indicates whether the input is considered invalid, triggering validation styling.

<br>

### Messaging

#### `Conversation.js`

The `Conversation` component is used to display a single conversation in a chat application. It shows information about the conversation's participants and related content.

#### Props

- `conversation` (Object, required): An object representing the conversation.
- `onPress` (Function, required): A callback function to handle the press event on the conversation.
- `isCurrent` (Boolean, optional): Indicates whether the conversation is the current active one.

<br>

#### `Message.js`

The `Message` component is used to display a single message in a chat interface. It can render both user's own messages and messages from others.

#### Props

- `message` (Object, required): An object representing the message to be displayed.
- `own` (Boolean, optional): Indicates whether the message is sent by the user (true) or someone else (false).

<br>

#### `Messenger.js`

The `Messenger` component is used to implement a real-time messaging interface for chatting between users. It supports multiple conversations and allows users to send and receive messages.

#### Props

- `sellerId` (String, required): The ID of the seller or user with whom the current user is chatting.

<br>

### Past Transactions

#### `SearchModal.js`

The `SearchModal` component is a modal that allows users to perform a search based on various criteria, including town, block, street, and unit type.

#### Props

- `visible` (Boolean, required): Indicates whether the modal is visible.
- `onClose` (Function, required): A function to close the modal.

<br>

### Selling Guide

#### `CustomText.js`

The `CustomText` component is a custom text component that allows you to create clickable links within text.

#### Props

- `children`: The text content to be displayed.
- `style`: Custom styles to be applied to the text.
- `onPress`: A function to be executed when the text is pressed.
- `link`: The URL to which the text should link. When clicked, the text will open the specified URL.

<br>

#### `StepModal.js`

The `StepModal` component is a modal that displays a step or instructional content with a title, description, and a "Back" button to close the modal.

#### Props

- `title`: The title or heading of the step.
- `description`: The detailed description or instructions for the step.
- `visible`: Indicates whether the modal is visible.
- `onClose`: A function to close the modal when the "Back" button is pressed.

<br>

#### `Title.js`

The `Title` component is a user interface element that displays a title as a clickable link. When clicked, it opens a modal (`StepModal`) to provide additional information or instructions related to the title.

#### Props

- `data`: An object containing the title and its associated description.
  - `title`: The title to be displayed as a clickable link.
  - `description`: The detailed description or instructions related to the title.

<br>

### UI

#### `Button.js`

The `Button` component is a customizable button component in a React Native application. It provides a touchable area that can trigger a specified action when pressed.

#### Props

The `Button` component accepts the following props:

- `children` (required): The text or content to display within the button.
- `onPress` (required): The callback function to execute when the button is pressed.

<br>

#### `FlatButton.js`

The `FlatButton` component is a basic button component for a React Native application. It provides a touchable area that can trigger a specified action when pressed.

## Props

The `FlatButton` component accepts the following props:

- `children` (required): The text or content to display within the button.
- `onPress` (required): The callback function to execute when the button is pressed.

<br>

#### `StepModal.js`

The `StepModal` component is used to display a modal that provides step-by-step instructions or information. It typically includes a title, a description, and a "Back" button to close the modal.

#### Props

The `StepModal` component accepts the following props:

- `title` (required): The title or heading of the step/modal.
- `description` (required): The detailed description or instructions for the step/modal.
- `visible` (required): A boolean that indicates whether the modal is visible or hidden.
- `onClose` (required): A callback function to close the modal when the "Back" button is pressed.

<br>

#### `LoadingOverlay.js`

The `LoadingOverlay` component is a simple component that displays an activity indicator (spinner) centered on the screen to indicate that some loading or processing operation is in progress.

#### Props

The `LoadingOverlay` component does not require any props. It is a standalone component that only displays a loading spinner.

<br>

### Main

#### `Agent.js`

The `Agent` component is a UI element used to display information about a real estate agent. It includes details such as the agent's name, company, position, email, and an optional image.

#### Props

- `_id` (String): The unique identifier of the agent.
- `agent_name` (String): The name of the agent.
- `agent_company` (String): The name of the company the agent works for.
- `agent_position` (String): The position or role of the agent.
- `agent_email` (String): The email address of the agent.
- `agent_image` (String): The URL of the agent's profile image.

<br>

#### `Banker.js`

The `Banker` component is a UI element used to display information about a banker. It includes details such as the banker's name, bank, position, email, and an optional image.

#### Props

- `_id` (String): The unique identifier of the banker.
- `banker_name` (String): The name of the banker.
- `banker_bank` (String): The name of the bank the banker works for.
- `banker_position` (String): The position or role of the banker.
- `banker_email` (String): The email address of the banker.
- `banker_image` (String): The URL of the banker's profile image.

<br>

#### `BottomMenu.js`

The `BottomMenu` component is responsible for defining and rendering a bottom tab navigation menu in a React Native application. This menu allows users to navigate between different screens or sections of the app using icons in the bottom tab bar.


#### Screens and Icons

The `BottomMenu` component defines several screens, each associated with a specific icon from the Ionicons library. Here is a list of screens and their respective icons:

1. **AllAdvert**
   - Icon: Search icon
   - Description: Displays a screen with a search feature for advertisements.

2. **MyAdvert**
   - Icon: Document icon
   - Description: Displays a screen for managing user's own advertisements.

3. **ChatPage**
   - Icon: Chat bubbles icon
   - Description: Provides a chat feature for users.

4. **PastTransaction**
   - Icon: Bar chart icon
   - Description: Displays past transaction information.

5. **SellingGuide**
   - Icon: Newspaper icon
   - Description: Offers a selling guide or informational content.

6. **MortgageBanker**
   - Icon: Cash icon
   - Description: Shows mortgage banker-related information.

7. **PropertyAgent**
   - Icon: Business icon
   - Description: Displays information about property agents.

8. **Profile**
   - Icon: Person circle icon
   - Description: Provides the user's profile information.

#### Options

Each screen in the `BottomMenu` component defines specific options to configure the appearance and behavior of the screen. The primary option is `tabBarIcon`, which determines the icon displayed in the tab bar. Icons are colored differently when focused or not.

## Constants

The `constants` folder contains essential files, including `icons.js`, `images.js`, `index.js`, and `theme.js`, which collectively manage assets, icons, images, and theming constants used for styling and theming within a React Native application.

### Folder Structure
The `constants` folder is organized as follows:
```
- components
  -icons.js
  -images.js
  -index.js
  -theme.js
```

#### `icons.js`
The `icons.js` file exports a collection of image assets in the form of imported image paths. These images are typically used as icons throughout the application for various purposes such as menus, search, filters, and more.

#### `images.js`
The `images.js` file exports a collection of image assets in the form of imported image paths. These images are typically used as logos, banners, or other graphical elements in the application.

#### `index.js`
The `index.js` file serves as an aggregator for the exports from images.js and icons.js. It also exports color schemes, font information, sizing constants, and shadow styles used for styling the application's user interface.

#### `theme.js`
The `theme.js` file contains constants for defining colors, fonts, sizes, and shadows used for consistent theming and styling of the application's user interface elements. It serves as a central place for managing the visual aspects of the app's design.


<br>

## Pages

The "pages" folder consists of files each representing a specific page or screen in a React Native application. These files include components for user registration, property listings, agent profiles, and a comprehensive guide for selling HDB flats.

### Folder Structure
The `pages` folder is organized as follows:
```
- pages
  -AllAdvert.js
  -ChatPage.js
  -index.js
  -Login.js
  -MortgageBanker.js
  -MyAdvert.js
  -PastTransaction.js
  -Profile.js
  -PropertyAgent.js
  -Register.js
  -SellingGuide.js
```

#### `AllAdvert.js`
The `AllAdvert.js` file represents the main page of the application, displaying a collection of advertisements. It utilizes components like `AdvertisementCard`, `AdvertSearchModal`, and `AdvertisementDetails` to present and filter ads. Users can browse ads and initiate searches based on various criteria.

#### `ChatPage.js`

The `ChatPage.js` file is a React Native component representing a chat page. It includes the `Messenger` component and uses the `sellerId` obtained from the route parameters to initialize the chat with a specific seller.

#### `index.js`

The `index.js` file in this module exports various React Native components representing different screens or pages of the application. These components include:

- `AllAdvert`: Represents the main page for displaying advertisements.
- `ChatPage`: Represents a chat page for communication.
- `MortgageBanker`: Represents a page related to mortgage banking.
- `MyAdvert`: Represents a page for managing user-specific advertisements.
- `PastTransaction`: Represents a page for viewing past transactions.
- `Profile`: Represents a user profile page.
- `PropertyAgent`: Represents a page related to property agents.
- `Register`: Represents a registration page.
- `SellingGuide`: Represents a page providing a guide for selling.
- `Login`: Represents a login page.

#### `Login.js`

The `Login.js` file defines the `Login` component, which is a screen for user authentication. This component utilizes the following functionalities:

- Imports the `AuthContent` component from "../components/Auth/AuthContent" to display authentication-related content.
- Imports the `LoadingOverlay` component from "../components/ui/LoadingOverlay" to show a loading overlay while authenticating.
- Imports the `useAppContext` hook from "../context/appContext" to access application context and methods.
- Imports the `useState` hook from React to manage component state.

Within the `Login` component:

- It uses the `useAppContext` hook to access the `loginUser` function from the application context.
- Manages the `isAuthenticating` state variable, initially set to `false`.
- Defines a `loginHandler` function that triggers user login. It sets `isAuthenticating` to `true`, prepares user data (email and password), calls `loginUser` from the context, and sets `isAuthenticating` back to `false` when done.
- If `isAuthenticating` is `true`, it renders the `LoadingOverlay` component to show a loading indicator.
- Otherwise, it renders the `AuthContent` component, passing `isLogin` as `true` and the `loginHandler` function to handle user authentication.

#### `MortgageBanker.js`

The `MortgageBanker` component represents a screen in the application and is responsible for displaying recommended mortgage bankers. Here's a summary of this component:

- Utilizes the `useAppContext` hook to access application context and methods, particularly `getBankers` and `bankers`.
- Uses the `useEffect` hook to trigger the `getBankers` method when the component mounts and calls the `printBankers` function to log banker details.
- The `printBankers` function iterates through the list of bankers and logs their name, bank, position, number, and email.
- Renders a `ScrollView` containing:
  - A container with the title "Recommended Mortgage Bankers" and a description of mortgage bankers' roles and services.
  - A list of `Banker` components, mapping through the `bankers` array and passing each banker's details as props.


#### `MyAdvert.js`

The `MyAdvert` component is responsible for managing and displaying user advertisements within the application. Here's a summary of this component:

- Utilizes the `useAppContext` hook to access various application context variables and methods.
- Fetches user-specific advertisement data by calling the `getUserAdvert` method when the component mounts or when `hasAdvert` changes.
- Allows users to input and edit details such as address, postal code, location, unit type, size, price, and description.
- Provides a picker for selecting location and unit type from predefined options.
- Allows users to select and upload images for their advertisement, with a limit of 5 images.
- Displays a list of uploaded images and allows users to delete individual images.
- Implements form validation and displays an error message if required fields are not filled.
- Enables users to submit or update their advertisement data by invoking the `createAdvert` or `updateAdvert` methods.
- Offers a "Delete" button to remove the user's advertisement.
- Features loading overlays during asynchronous operations to provide feedback to the user.



#### `PastTransaction.js`

The `PastTransaction` component represents a screen in the application for displaying past HDB transactions. Here's a summary of this component:

- Utilizes the `useAppContext` hook to access various application context variables and methods, including past HDB transaction records.
- Offers a "Search" button that triggers the display of a search modal when pressed.
- Displays a list of past HDB transactions, including details such as date, block, town, street, flat type, storey, floor area, lease start date, remaining lease, and price.
- Utilizes a `FlatList` component for efficient rendering of the transaction records.
- Provides a loading overlay during data loading, indicating to users that the data is being fetched.
- Invokes the `getPastRecords` method to fetch past transaction records when the component mounts.
- Ensures responsiveness and clean layout with appropriate styling, making it easy for users to browse past HDB transactions.



### `Profile.js`

The `Profile` component represents a user profile page where users can view and update their profile information. Here's a summary of this component:

- Utilizes the `useAppContext` hook to access user data and the `updateUser` method for profile updates.
- Provides input fields for users to modify their name, email, and contact number.
- Includes a "Save Changes" button that triggers the `handleSubmit` function to update the user's profile with the new information.
- Retrieves and displays the current user's data (name, email, and contact number) within the input fields.
- Ensures a clean and user-friendly interface with appropriate styling.
- Offers a seamless user experience for managing profile information, enhancing user engagement and personalization.


#### `PropertyAgent.js`

The `PropertyAgent` component provides users with a list of trusted property agents, offering the following features:

- Utilizes the `useAppContext` hook to retrieve a list of property agents via the `getAgents` function.
- Presents a title, introductory text, and a collection of property agents.
- The introductory text emphasizes the expertise, professionalism, and integrity of the agents in assisting users with buying and selling processes.
- Users can explore and connect with these trusted agents for a seamless and successful real estate experience.
- Offers a user-friendly and visually appealing interface with appropriate styling.
- Enhances user engagement by providing access to reputable real estate professionals.
- Facilitates lasting connections between users and trusted agents, contributing to overall user satisfaction and trust.


#### `PropertyAgent.js`

The `PropertyAgent` component serves as a user interface for displaying trusted property agents, offering the following functionalities:

- Utilizes the `useAppContext` hook to fetch a list of property agents using the `getAgents` function.
- Features a title and introductory text that emphasize the expertise, professionalism, and integrity of the property agents.
- Allows users to access a collection of trusted agents who can assist with various aspects of the real estate process, such as buying and selling.
- Highlights the agents' dedication to customer satisfaction and their strong reputation for providing top-notch service.
- Promotes the development of enduring relationships between users and agents, ensuring a positive and seamless real estate experience.
- Provides an aesthetically pleasing and user-friendly interface with appropriate styling.


#### `Register.js`

The `Register` component enables user registration within the application and offers the following functionality:

- Utilizes the `useAppContext` hook to register a new user via the `registerUser` function.
- Implements a loading overlay to provide user feedback while the registration process is ongoing.
- Exposes a user-friendly registration form that collects essential information, including name, email, contact number, and password.
- Executes the registration process when the user submits the registration form, creating a new user account with the provided information.
- Facilitates the creation of a new user account, helping users join the application with their credentials.
- Ensures a seamless and secure registration experience, enhancing user engagement and trust in the application.

The `Register` component plays a crucial role in expanding the user base of the application and enabling new users to access its features.


#### `SellingGuide.js`

The `SellingGuide` component provides a detailed 14-step guide for users who are interested in selling their HDB flats. It offers comprehensive information and instructions on each step of the HDB resale process. Here's a breakdown of what the component does:

- Utilizes a collection of data (`hdbGuide`) that contains information for each step of the selling guide, including the title and a detailed description.

- Displays a title, introductory text, and a list of 14 steps with descriptions, guiding users through the entire process.

- Provides a user-friendly layout with appropriate styles, ensuring readability and visual appeal.


## Main

### App.js
#### Overview
`App.js` is the entry point of the React Native application. It handles navigation, user authentication, and the rendering of different application screens based on the user's authentication status.

#### Dependencies
- `React` and `React Native`: Required for building the mobile application.
- `@react-navigation/native` and `@react-navigation/stack`: Used for navigation management.
- `expo-splash-screen`: Used for managing the application's splash screen.
- Custom components and context from the application's structure.

#### Components and Functions
1. `AuthStack()`: A stack navigator for authentication-related screens, including login and registration.

2. `AuthenticatedStack()`: A stack navigator for screens accessible to authenticated users. It includes a welcome screen with a logout button.

3. `Navigation()`: The main navigation component that checks if the user is authenticated and renders either the `AuthenticatedStack` or `AuthStack`.

4. `App()`: The root component of the application. It wraps the `Navigation` component within the `AppProvider` for managing application context.

`Initialization` - The `useEffect` hook is used to initialize the application. It attempts to retrieve the user's authentication token and data from local storage using `getUserFromLocalStorage`.

`SplashScreen` - The `SplashScreen.hideAsync()` method is used to hide the splash screen once the application is ready to render. It ensures a smooth transition from the splash screen to the app interface.

`Conditional Rendering` - The application's navigation structure is conditionally rendered based on the user's authentication status. Authenticated users see the `AuthenticatedStack`, while unauthenticated users see the `AuthStack`.

`User Authentication` - The application checks for the user's authentication status and token to determine which stack to display.

`User Logout` - Authenticated users have the option to log out using the "Exit" button in the header of the `AuthenticatedStack`. This action triggers the `logoutUser()` function.

`Usage` - This component is used as the root component of the mobile application and is typically rendered in the `index.js` or `App.js` file when initializing the app.

`Note` - The application appears to use custom components and context for user management, and specific implementations may vary based on the custom components and context used within the application.

<br>

### mobileConfig.js

`API_BASE_URL` - This variable determines the base URL for making HTTP requests to the server. It can be configured differently for development and deployment.

`WEBSOCKET_URL` - This variable determines the URL for establishing WebSocket connections. Like API_BASE_URL, it can be configured differently for development and deployment.








