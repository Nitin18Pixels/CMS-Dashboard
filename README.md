# CRM Dashboard

This project is a Customer Relationship Management (CRM) dashboard built using React. It includes a sidebar for navigation, a header with notification and profile icons, and various pages such as Home, Profile, Settings, Reports, and Analytics.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/crm-dashboard.git
   cd crm-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open the application:**
   Open your browser and navigate to `http://localhost:3000`.

## External Packages

The following external packages are used in this project:

- **React:** A JavaScript library for building user interfaces.
- **React Router:** A library for routing in React applications.
  ```bash
  npm install react-router-dom
  ```
- **React Icons:** A library for including popular icons in React projects.
  ```bash
  npm install react-icons
  ```
- **Bootstrap:** A CSS framework for building responsive and mobile-first websites.
  ```bash
  npm install bootstrap
  ```

## Project Structure

The project structure is as follows:

```
src/
├── components/
│   ├── Home.jsx
│   ├── Profile.jsx
│   ├── Settings.jsx
│   ├── Reports.jsx
│   ├── Analytics.jsx
├── layout/
│   ├── AppLayout.jsx
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── styles.css
├── App.jsx
├── main.jsx
├── index.css
```

- **components/**: Contains the different page components (Home, Profile, Settings, Reports, Analytics).
- **layout/**: Contains the layout components (AppLayout, Header, Sidebar) and the main stylesheet (styles.css).
- **App.jsx**: The main application component that sets up routing.
- **main.jsx**: The entry point of the application.
- **index.css**: Global styles for the application.

## Features

- **Responsive Sidebar:** The sidebar can be toggled to show or hide text, displaying only icons when collapsed.
- **Header Icons:** The header includes notification and profile icons.
- **Routing:** The application uses React Router for navigation between different pages.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
