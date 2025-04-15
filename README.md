# Experiments in Joy

## Code of Conduct

We are committed to fostering a welcoming, respectful, and inclusive community.

This project adheres to the [![Contributor Covenant Code of Conduct](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md).
By participating, you are expected to uphold this code. We expect all contributors to help maintain a safe and positive environment for everyone.

If you witness or experience any behavior that violates this code, please report it by contacting: [your-email@example.com]

## License

This project is licensed under the [Nonviolent Public License version 7 or later (NVPLv7+)](https://thufie.lain.haus/NPL.html).

Use of this software is restricted to nonviolent, non-coercive, and non-discriminatory purposes.

Attribution is required. Please credit this project in derivative works with the following:

© 2025 Annabel Church — Licensed under NVPLv7+

This license is not OSI-approved but is designed to reflect ethical principles of nonviolence and human rights.

## Svelte

### sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

### Run lint

````bash
npm run lint

### Fix issues

```bash
npx prettier . --write
````

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
