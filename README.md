# React + TypeScript + Vite

## React typescript bases of components and hooks.

### A progresive components examples:

1. App (Vite default)
2. FirstComponent (Hello world!)
3. ArrowFunctionComponent (Hello world! and variables)
4. PropsComponent (about Props in components)
5. CounterComponent (A counter component example)
6. ListComponent (Grocery list)
7. UsersApp (List of users and post details)
8. HooksApp (contain the CounterComponent)
9. FormComponent
10. TableComponent
11. HeavyCalculations (useMemo)
12. CallBackComponent
13. ReduceComponent (example to understand hook useReducer)
14. UseReducerComponent (useReducer)
15. HOC (high order component -HOCWithLoader)

-------------
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
