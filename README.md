# CrossComm React Native Mobile Template

This template is meant to serve as a universal starting point for all React Native mobile projects. If anything needs to be added, do so and issue a pull request to the main branch.

# About This Template

This template is created using Expo EAS build

# New Project Setup

1. Customize package.json attributes: `name`, `description`, `repository`, etc.
2. Update app.config.ts attributes:
3. If you have problems with ESLint or (Prettier)[https://prettier.io/docs/en/install.html], go to their websites and follow the install instructions. I also relied heavily on (this blog post)[https://dev-yakuza.posstree.com/en/react/prettier/#:~:text=To%20use%20Prettier%20in%20React%2C%20we%20need%20to,it%20like%20below%20to%20define%20the%20code%20format.] for installation if you have questions. 

# To Build this Template

Use `expo start ios` or `expo start android`.

# Editor Configuration

## Webstorm Plugins

- EditorConfig
- ESLint

## VSCode Plugins

This list is maintained in extensions.json. You can quickly see them in the extensions side menu by searching for `@recommended` in extensions.

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

# Conventions

## Prettier, ESLint, and EditorConfig

EditorConfig is used to define a common set of configurations that every editor can use. When it comes to using prettier and eslint, we combine all three. ESlint is configured to use prettier and prettier inherits a few configuration options from editorconfig. [This article](https://blog.theodo.com/2019/08/empower-your-dev-environment-with-eslint-prettier-and-editorconfig-with-no-conflicts/) describes the setup process.

## File and Directory Naming

- PascalCase for class and component file names `components/PageSection.tsx`
- lower case or camelCase for directories

## Scripts

- all scripts should have an associated script in package.json scripts
- package.json script naming conventions: `<action>:<noun>:<env>`. Ex: `test`, `test:css`, `test:css:ci`

## Unit Testing

## Automated Tasks

# Utils

- sizeScaler.tx is used to help with device scaling to keep the device compatible with whatever screen size. Please use these whenever possible.
- (React-Native-Safe-Area-Context)[https://docs.expo.dev/versions/latest/sdk/safe-area-context/] is used to help position the app around various operating system interface elements.

# Navigation

Navigation is handled by React Navigation V6. FOr helping handling typescript and React Navigation, see (here)[https://reactnavigation.org/docs/typescript/#annotating-usenavigation]. 