# NgRx Todo Application

A modern, responsive Todo application built with Angular 20 and NgRx for state management, featuring a clean UI with Tailwind CSS.

## 🚀 Features

- **Add Tasks**: Create new todo items with form validation
- **Delete Tasks**: Remove completed or unwanted tasks
- **Responsive Design**: Beautiful UI with Tailwind CSS styling
- **State Management**: Powered by NgRx for predictable state updates
- **Real-time Updates**: Reactive UI with RxJS observables
- **Form Validation**: Input validation with Angular Reactive Forms

## 🛠️ Tech Stack

- **Angular 20.1.0** - Latest Angular framework
- **NgRx 20.0.0** - State management library
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **RxJS 7.8.0** - Reactive programming library
- **TypeScript 5.8.2** - Type-safe JavaScript
- **SCSS** - CSS preprocessor

## 📁 Project Structure

```
src/
├── app/
│   ├── cores/
│   │   ├── state/
│   │   │   └── todo.state.ts          # Todo state interface
│   │   ├── store/
│   │   │   ├── todo.actions.ts        # NgRx actions
│   │   │   ├── todo.reducer.ts        # NgRx reducer
│   │   │   └── todo.selector.ts       # NgRx selectors
│   │   └── todo-input/
│   │       ├── todo-input.ts          # Main component
│   │       ├── todo-input.html        # Component template
│   │       ├── todo-input.scss        # Component styles
│   │       └── todo-input-module.ts   # Component module
│   ├── app.ts                         # Root component
│   ├── app.html                       # Root template
│   ├── app-module.ts                  # Root module
│   └── app-routing-module.ts          # Routing configuration
├── main.ts                            # Application bootstrap
├── styles.scss                        # Global styles
└── index.html                         # HTML entry point
```

## 🏗️ Architecture

### NgRx State Management

The application uses NgRx for centralized state management:

- **State**: `TodoState` interface defines the application state structure
- **Actions**: `addTodo` and `removeTodo` actions for state mutations
- **Reducer**: Pure functions handling state transitions
- **Selectors**: `selectAllTodos` for efficient state queries

### Component Architecture

- **TodoInputComponent**: Main component handling todo input and display
- **Reactive Forms**: Form validation and user input handling
- **Observable Pattern**: Reactive UI updates with RxJS

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ngrx-todo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode
- `npm test` - Run unit tests
- `ng generate component <name>` - Generate new component

## 🎨 UI Components

The application features a modern, responsive design:

- **Input Form**: Clean input field with validation
- **Task List**: Organized list with delete functionality
- **Responsive Layout**: Mobile-friendly design
- **Interactive Elements**: Hover effects and smooth transitions

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration is handled through PostCSS.

### TypeScript
Strict TypeScript configuration with:
- Strict mode enabled
- No implicit returns
- Experimental decorators support

### Angular
- Non-standalone components
- SCSS styling
- Reactive forms
- Router support

## 🧪 Testing

Run unit tests with Karma:
```bash
npm test
```

## 📦 Building for Production

Create a production build:
```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Additional Resources

- [Angular Documentation](https://angular.dev/)
- [NgRx Documentation](https://ngrx.io/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [RxJS Documentation](https://rxjs.dev/)
